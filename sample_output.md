```
# HELP apprenda_node_current_state The current state of the node as an index of 
Online,Offline,Removed,Down,Reserved,Maintenance,ReservedDown
# TYPE apprenda_node_current_state gauge
apprenda_node_current_state{node="hqs-engineer01",role="Windows"} 0
apprenda_node_current_state{node="hqs-engineer03",role="Windows"} 0
apprenda_node_current_state{node="hqs-engineer04",role="Linux"} 0
apprenda_node_current_state{node="hqs-engineer05",role="Linux"} 0
apprenda_node_current_state{node="hqs-engineer06",role="Linux"} 0
apprenda_node_current_state{node="hqs-engineer08",role="Windows"} 0
apprenda_node_current_state{node="hqs-engineer09",role="Windows"} 0
apprenda_node_current_state{node="hqs-engineer10",role="Windows"} 0
apprenda_node_current_state{node="hqs-engineer11",role="Windows"} 0

# HELP apprenda_node_current_cpu_allocation The current allocation of CPU capacity consumed by guest application 
workloads (in Mhz)
# TYPE apprenda_node_current_cpu_allocation gauge
apprenda_node_current_cpu_allocation{node="hqs-engineer01"} 0
apprenda_node_current_cpu_allocation{node="hqs-engineer03"} 500
apprenda_node_current_cpu_allocation{node="hqs-engineer04"} 0
apprenda_node_current_cpu_allocation{node="hqs-engineer05"} 0
apprenda_node_current_cpu_allocation{node="hqs-engineer06"} 500
apprenda_node_current_cpu_allocation{node="hqs-engineer08"} 500
apprenda_node_current_cpu_allocation{node="hqs-engineer09"} 500
apprenda_node_current_cpu_allocation{node="hqs-engineer10"} 0
apprenda_node_current_cpu_allocation{node="hqs-engineer11"} 0

# HELP apprenda_node_current_memory_allocation The current allocation of memory capacity consumed by guest 
application workloads (in MB)
# TYPE apprenda_node_current_memory_allocation gauge
apprenda_node_current_memory_allocation{node="hqs-engineer01"} 0
apprenda_node_current_memory_allocation{node="hqs-engineer03"} 500
apprenda_node_current_memory_allocation{node="hqs-engineer04"} 0
apprenda_node_current_memory_allocation{node="hqs-engineer05"} 0
apprenda_node_current_memory_allocation{node="hqs-engineer06"} 500
apprenda_node_current_memory_allocation{node="hqs-engineer08"} 500
apprenda_node_current_memory_allocation{node="hqs-engineer09"} 500
apprenda_node_current_memory_allocation{node="hqs-engineer10"} 0
apprenda_node_current_memory_allocation{node="hqs-engineer11"} 0

# HELP apprenda_node_total_usable_memory The total amount of memory that can be allocated to guest application 
workloads (in MB)
# TYPE apprenda_node_total_usable_memory gauge
apprenda_node_total_usable_memory{node="hqs-engineer01"} 4095
apprenda_node_total_usable_memory{node="hqs-engineer03"} 4095
apprenda_node_total_usable_memory{node="hqs-engineer04"} 3791
apprenda_node_total_usable_memory{node="hqs-engineer05"} 3791
apprenda_node_total_usable_memory{node="hqs-engineer06"} 3791
apprenda_node_total_usable_memory{node="hqs-engineer08"} 4095
apprenda_node_total_usable_memory{node="hqs-engineer09"} 4095
apprenda_node_total_usable_memory{node="hqs-engineer10"} 4095
apprenda_node_total_usable_memory{node="hqs-engineer11"} 4095
```
