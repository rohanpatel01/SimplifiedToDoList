import React, { Component } from 'react';
import TaskDetails from "./taskDetails";

class AddTask extends Component 
{
    state = { 
        createTaskButtonPressed: false
     } 

     // when create Task button has been pressed
        // stop rendering create Task Button
        // render TaskDetails component

     handleSubmitTask = () =>
     {
        console.log("Submit Task Event Handler Called");
        this.setState({createTaskButtonPressed: false});

        // send textbox to something else
     }
    
     handleAddTask = () =>
    {
        console.log("Task added");
        this.setState({createTaskButtonPressed: true});
    }

    handleCancel = () =>
    {
        console.log("Handle Cancel!");
        this.setState({createTaskButtonPressed: false});
    }

    render() { 
        return (
            <div>
                {!this.state.createTaskButtonPressed && <button onClick={this.handleAddTask}>Create Task</button>}
                {this.state.createTaskButtonPressed && 
                <TaskDetails 
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmitTask}>
                </TaskDetails>}
            </div>  
        ) 
    } // end of render
}
 
export default AddTask;