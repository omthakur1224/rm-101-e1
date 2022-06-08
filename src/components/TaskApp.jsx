import React,{useState} from "react";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
// import Task from "./Task/Task";
import tasks from '../data/tasks.json'
import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  const [data,setData]=useState(tasks)
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp} style={{
      margin: "auto",
      display: "flex",
      flexDirection:"column",
      alignItems:'center',
      textAlign:'center',
      width:"400px",
      height: "90vh",
      marginTop:'50px',
      marginBottom:'50px',
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    }}>
      {/* Header */}
      <TaskHeader data={data} setData={setData}/>
      {/* Add Task */}
      <AddTask data={data} setData={setData}/>
      {/* Tasks */}
      <Tasks data={data} setData={setData}/>
    </div>
  );
};

export default TaskApp;
