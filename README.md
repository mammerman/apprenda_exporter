# apprenda_exporter

A prometheus exporter for the Apprenda Cloud Platform (see [sample output](sample_output.md))

Required environment variables:


| Variable      | Description |
| ------------- |:-------------| 
| ACP_USER    | Operator account | 
| ACP_SECRET      | Operator secret |  
| ACP_TARGET_ROOT_URL | The root URL of the Apprenda instance you're monitoring (e.g. apps.mydomain.com) |
| EXPORTER_LISTEN_PORT | Tell the exporter to listen on a specific port, default is 3000 |
