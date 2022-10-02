import React, { Component } from 'react';

// get input from task input and send it to 

class TaskDetails extends Component 
{
    state = 
    {
        nameOfTask: ""
    }

    updateTask = taskName =>
    {
        // this.state.taskName = event.target.value;
        //console.log(taskName.target.value);

        console.log(taskName.target.value);
        // when submit button is pressed, pass this value to the task component
        
    }



    render() 
    { 
        return (
            <div>
                <form>
                    <label>
                        Task: <input type="text" onChange={this.updateTask}/>
                    </label>
                </form>

                <button
                    onClick={this.props.onCancel}>
                    Cancel
                </button>

                <button
                    onClick={this.props.onSubmit}>
                    Submit Task
                </button>
            </div>
        ) 
        
    } // end of render


}
 
export default TaskDetails;
// export {name};