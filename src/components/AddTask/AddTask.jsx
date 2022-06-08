import React,{useState} from "react";
import styles from "./addTask.module.css";
import tasks from '../../data/tasks.json'

const AddTask = ({data,setData}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [task,setTask]=useState({
    "text":"",
  })
  console.log("task",task)
  return (
    <div className={styles.todoForm}>
      <input id='text' data-testid="add-task-input" type="text" onChange={(e)=>
      {
        const { id,value}=e.target
        console.log(id,value)
        setTask({
          [id]:value }
      )}}/>
      <button data-testid="add-task-button" onClick={()=>{
        setTask({...task,
        "id":Math.floor(Math.random(100-1)*100),
        "count":0,
        "done":false})
        console.log(task)
        setData([...data,task]);
        }}>+</button>
    </div>
  );
};

export default AddTask;
