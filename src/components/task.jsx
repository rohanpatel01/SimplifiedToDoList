import React, { Component } from 'react';
import TaskDetails from "./taskDetails";
// see what you need to import

class Task extends Component 
{
    state = 
    { 
        // hold the details of the task from taskDetails
        taskName: ""
    } 

    render() { 
        const {taskName} = this.state.taskName;
        return (
            <TaskDetails 
            

            >

            </TaskDetails>
        );
    }
}
 
export default Task;