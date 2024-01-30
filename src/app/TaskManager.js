import {useState} from 'react';
import './Style.css'

function TaskManager(){
    const [tasks,setTasks]=useState([]);
    const [inputValue,setInputValue]=useState("");

    function addTask(){
        if(inputValue.length===0){
            return;
        }
      setTasks([
        ...tasks,
        {
          content: inputValue,
          isComplete: false,
          isEditing: false
        }
      ]);
      setInputValue("");
    }

function deleteTask(taskIndex){ 
      tasks.splice(taskIndex, 1)
      setTasks([
    ...tasks
      ])

 }

 const markCompleted=(taskIndex)=>{
tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
setTasks([
    ...tasks
])
 }

 const editTask=(taskIndex)=>{
   tasks[taskIndex].isEditing=true;
   setTasks(
    [...tasks]
   )
 }

 const updateValue=(taskIndex,value)=>{
    tasks[taskIndex].content=value;
    setTasks(
        [...tasks]
    )
 }

 const saveTask=(taskIndex)=>{
    tasks[taskIndex].isEditing= false;
    setTasks(
        [...tasks]
    )

 }



    return <div className='task-manager'>
        <h1>TODO APP</h1>
        <div className='tasks'>
            {
                tasks.sort((a)=>a.isComplete ?1 :-1).map(
                    (task, index)=><div key={index} className='task'>
                        <input type="checkbox" checked={task.isComplete} onChange={()=>markCompleted(index)} />
                        
                        {
                            task.isEditing ?
                            <span>
                                <input className='edit-input'  value={task.content} onChange={(event)=>updateValue(index,event.target.value)}/>
                                <button className='save' onClick={()=>saveTask(index)}>Save</button>
                            </span>:
                            <span>
                            <span className='content'>
                                {
                        task.isComplete ?
                        <del>{task.content}</del>:
                        task.content
                    }
                    </span>
                    
                    <button className='edit' onClick={()=>editTask(index)}>Edit</button>
                            </span>
                        }
                    
                    <button className='delete' onClick={()=>deleteTask(index) }>Delete</button>
                    </div>
                )
            }
        </div>
        <div className='add-task-container'>
            <input className='add-task-container-input' value={inputValue} onChange={(event)=>setInputValue(event.target.value)} />
            <button className='add-task-container-btn' onClick={addTask}>Submit</button>
        </div>
    </div>  }
export default TaskManager;  