```
# HELP apprenda_node_current_state The current state of the node as an index of Online,Offline,Removed,Down,Reserved,Maintenance,ReservedDown
# TYPE apprenda_node_current_state gauge
apprenda_node_current_state{node="apprlin",role="Linux"} 0
apprenda_node_current_state{node="apprwin",role="Windows"} 0

# HELP apprenda_node_current_cpu_allocation The current allocation of CPU capacity consumed by guest application workloads (in Mhz)
# TYPE apprenda_node_current_cpu_allocation gauge
apprenda_node_current_cpu_allocation{node="apprlin"} 0
apprenda_node_current_cpu_allocation{node="apprwin"} 1500

# HELP apprenda_node_current_memory_allocation The current allocation of memory capacity consumed by guest application workloads (in MB)
# TYPE apprenda_node_current_memory_allocation gauge
apprenda_node_current_memory_allocation{node="apprk8s"} 1500
apprenda_node_current_memory_allocation{node="apprlin"} 0
apprenda_node_current_memory_allocation{node="apprwin"} 1500

# HELP apprenda_node_total_usable_memory The total amount of memory that can be allocated to guest application workloads (in MB)
# TYPE apprenda_node_total_usable_memory gauge
apprenda_node_total_usable_memory{node="apprk8s"} 1839
apprenda_node_total_usable_memory{node="apprlin"} 1839
apprenda_node_total_usable_memory{node="apprwin"} 4095

# HELP apprenda_developer_workload_count_total The total number of workloads currently running for a developer/application combination.
# TYPE apprenda_developer_workload_count_total gauge
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="account"} 5
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="apprenda-logging"} 2
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="scheduling"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="cluster-manager"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="catalog"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="developer"} 5
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="utilization-catalog"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="storage"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="monitoring"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="extensibility"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="presentation"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="apprenda-onboarding"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="application-catalog"} 1
apprenda_developer_workload_count_total{developerTeamAlias="developer",applicationAlias="timecard"} 4
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="authentication"} 2
apprenda_developer_workload_count_total{developerTeamAlias="developer",applicationAlias="wmiexporter"} 1
apprenda_developer_workload_count_total{developerTeamAlias="developer",applicationAlias="ctxtester"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="maintenance"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="resources"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="soc"} 1
apprenda_developer_workload_count_total{developerTeamAlias="apprenda",applicationAlias="storefront"} 1
apprenda_developer_workload_count_total{developerTeamAlias="developer",applicationAlias="prometheus"} 2
apprenda_developer_workload_count_total{developerTeamAlias="developer",applicationAlias="helloworld"} 1

# HELP apprenda_developer_workload_memory_allocation_total The amount of memory allocated via resource policy for a developer/application combination (in MB)
# TYPE apprenda_developer_workload_memory_allocation_total gauge
apprenda_developer_workload_memory_allocation_total{developerTeamAlias="developer",applicationAlias="timecard"} 1000
apprenda_developer_workload_memory_allocation_total{developerTeamAlias="developer",applicationAlias="ctxtester"} 500
apprenda_developer_workload_memory_allocation_total{developerTeamAlias="developer",applicationAlias="prometheus"} 1000
apprenda_developer_workload_memory_allocation_total{developerTeamAlias="developer",applicationAlias="helloworld"} 500
```