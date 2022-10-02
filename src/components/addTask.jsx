import React, { Component } from 'react';

class AddTask extends Component 
{
    state = { 
        createTaskButtonPressed: false
     } 

     // when create Task button has been pressed
        // stop rendering create Task Button
        // render TaskDetails component

     onSubmitTask = () =>
     {
        console.log("Submit Task Event Handler Called");
        this.setState({createTaskButtonPressed: false});

        // send textbox to something else
     }
    
     onAddTask = () =>
    {
        console.log("Task added");
        this.setState({createTaskButtonPressed: true});
    }

    onCancel = () =>
    {
        console.log("Handle Cancel!");
        this.setState({createTaskButtonPressed: false});
    }

    updateTask = taskName =>
    {
        // this.state.taskName = event.target.value;
        //console.log(taskName.target.value);

        console.log(taskName.target.value);
        // when submit button is pressed, pass this value to the task component
        
    }

    render() { 
        return (
            <div>
                {!this.state.createTaskButtonPressed && <button onClick={this.onAddTask}>Create Task</button>}
                
                {this.state.createTaskButtonPressed && 
                    <div>
                    <form>
                        <label>
                            Task: <input type="text" onChange={this.updateTask}/>
                        </label>
                    </form>

                    <button
                        onClick={this.onCancel}>
                        Cancel
                    </button>

                    <button
                        onClick={this.onSubmitTask}>
                        Submit Task
                    </button>
                    </div>
                }
            </div>  
        ) 
    } // end of render
}
 
export default AddTask;