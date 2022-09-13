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
     }
    
    addTask = () => 
    {
        console.log("Task added");
        this.setState({createTaskButtonPressed: true});
        // when clicked change the render to a place where you can add a form
        // render the Task Detail
    };

    render() { 
        return (
            <div>
                {!this.state.createTaskButtonPressed && <button onClick={this.addTask}>Create Task</button>}
                {this.state.createTaskButtonPressed && <TaskDetails></TaskDetails>}

            </div>
            
        ) 
        
    } // end of render


}
 
export default AddTask;