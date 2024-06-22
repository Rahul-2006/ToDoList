import React, {useState} from "react";
function ToDoList() {
    
    const [Tasks , setTasks] = useState(["eat breakfast" , "drink coffee"]);
    const [newTask , setnewTasks] = useState("");

    function handleInputchange() {
        setnewTasks(event.target.value);
    }   
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t , newTask]);
        setnewTasks("");
        }
    }
    function removeTask(index) {
        const updatedTask = Tasks.filter((_,i) => i !== index);
        setTasks(updatedTask);
    }
    function MoveUp(index) {
        if (index > 0) {
             const updatedTask = [...Tasks];
        [updatedTask[index], updatedTask[index - 1]] = 
        [updatedTask[index-1] , updatedTask[index]];
        setTasks(updatedTask);
        }
    }
    function MoveDown(index) {
        if (index < Tasks.length - 1) {
            const updatedTask = [...Tasks];
       [updatedTask[index], updatedTask[index + 1]] = 
       [updatedTask[index + 1] , updatedTask[index]];
       setTasks(updatedTask);
       }
    }
    return( 
        <div className="ToDoList">
            <h1>To-Do-List</h1>
        <div>
        <input type="text" placeholder="Enter Your Task..." value={newTask} onChange={handleInputchange}/>
        <button className="add-button" onClick={addTask} >
            Add
        </button>
        </div>
        <ol>
            {Tasks.map((task,index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" 
                        onClick={() => removeTask(index)}
                         >Delete</button>
                <button className="move-button" 
                        onClick={() => MoveUp(index)}
                         >👆🏻</button>
                <button className="move-button" 
                        onClick={() => MoveDown(index)}
                         >👇🏻</button>
            </li>
            )}
        </ol>
        </div> )
}
export default ToDoList