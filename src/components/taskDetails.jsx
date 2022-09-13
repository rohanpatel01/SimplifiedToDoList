import React, { Component } from 'react';

class TaskDetails extends Component 
{
    // store variables from form so it can be passed to actual task 
    // when created 

    // state = 
    // {

    // }
    
    // make addTask's createTaskButtonPressed value = true;
    onSubmitTask = () => 
    {
        console.log("hi");
    }

    render() { 
        return (
            <div>
                <form>
                    <label>Task:
                        <input type="text" />
                    </label>
                </form>

                <button
                    onClick={this.onSubmitTask}>
                    Submit Task
                </button>
            </div>
        ) 
        
    } // end of render


}
 
export default TaskDetails;