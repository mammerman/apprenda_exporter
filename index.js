'use strict';

let request = require('request-promise');
let async = require('async');
let http = require('http');
let sequence = require('sequence');

let prometheus = require('prom-client');
let Gauge = prometheus.Gauge;

let express = require('express');
let app = express();

/*
* ACP vars
*/

var acp_nodes;
var acp_root_url = process.env.ACP_TARGET_ROOT_URL;
var acp_auth_url = 'https://' + acp_root_url + '/authentication/api/v1/sessions/soc/';
var session_token;
var server;
var server_listen_port = process.env.EXPORTER_LISTEN_PORT;
var node_roles_state_keys = ['Online', 'Offline', 'Removed', 'Down', 'Reserved', 'Maintenance', 'ReservedDown'];

/*
* METRIC DEFINITIONS
*/

// gauge metric for node state (indexOf node_roles_state_keys)
var node_state_gauge = new prometheus.Gauge({ 
    name: 'apprenda_node_current_state', 
    help: 'The current state of the node as an index of ' + node_roles_state_keys.toString(), 
    labelNames: ['node', 'role'] });

// gauge metric for node cpu allocation
var node_cpu_allocation_gauge = new prometheus.Gauge({ 
    name: 'apprenda_node_current_cpu_allocation', 
    help: 'The current allocation of CPU capacity consumed by guest application workloads (in Mhz)',
    labelNames: ['node'] });

// gauge metric for node memory allocation
var node_memory_allocation_gauge = new prometheus.Gauge({ 
    name: 'apprenda_node_current_memory_allocation', 
    help: 'The current allocation of memory capacity consumed by guest application workloads (in MB)',
    labelNames: ['node'] }); 

// gauge metric for node cpu allocation
var node_memory_total_gauge = new prometheus.Gauge({ 
    name: 'apprenda_node_total_usable_memory', 
    help: 'The total amount of memory that can be allocated to guest application workloads (in MB)',
    labelNames: ['node'] });   


// handle requests to /metrics from prometheus
app.get('/metrics', (req, res) => {
    getSession(function(){
        getNodeData(function(){        
            res.end(prometheus.register.metrics());
            endSession()
        })
    });
});


// deletes session via API
function endSession()
{
    console.log("Killing session");
    
    var options = {
        url: acp_auth_url + session_token,
        method: 'DELETE',
        rejectUnauthorized: false // in case target uses self-signed SSL cert (dev)
    }

    request(options, function(err, res, body){

        if(err) {
            console.log(err);
        } else {
            console.log("Session closed");
        }

    });

}

// create session via API
function getSession(callback)
{

    console.log("Target: " + acp_root_url);
    console.log("Authenticating");
    
    var options = {
        url: acp_auth_url,
        body: {
            username: process.env.ACP_USER,
            password: process.env.ACP_SECRET
        },
        method: 'POST',
        json: true,
        rejectUnauthorized: false // in case target uses self-signed SSL cert (dev)
    }

    request(options)
        .then(function(parsedBody){
            session_token = parsedBody.apprendaSessionToken;
            console.log("Session token stored"); 
            callback();
        })
        .catch(function(err){
            console.log(err);
            callback();
        });

}

/*
* Call nodes endpoint on ACP API and get node data, insert into metrics
*/
function getNodeData(callback) 
{

    console.log("Getting node metadata");

    var options = {
        url: 'https://' + acp_root_url + '/soc/api/v1/nodes',
        rejectUnauthorized: false,
        headers:
        {
            "ApprendaSessionToken": session_token
        }
    }

    request.get(options)
        .then(function(parsedBody){
            var items = JSON.parse(parsedBody).items;
            for(var n=0;n<items.length;n++) {
                var node = items[n];

                // node role metrics
                for(var i=0;i<node.nodeRoles.length;i++){
                    var role = node.nodeRoles[i];
                    if((role.nodeRole == "Windows") || (role.nodeRole == "Linux"))
                    {

                        // role state
                        node_state_gauge.set({node: node.name, role: role.nodeRole}, 
                            node_roles_state_keys.indexOf(role.roleState.state)
                        );

                        // memory allocation
                        node_memory_allocation_gauge.set({node: node.name},
                            role.allocatedMemory
                        );

                        // memory total
                        node_memory_total_gauge.set({node: node.name},
                            role.totalMemory
                        ); 

                        // cpu allocation
                        node_cpu_allocation_gauge.set({node: node.name},
                            role.allocatedCpu
                        );                     

                    }
                }
            }
            callback();          
        })
        .catch(function(err){
            callback();
        });
}

// listen for requests
app.listen(server_listen_port || 3000, () => {
    console.log("Listening");
});