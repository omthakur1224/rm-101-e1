import React from "react";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
// import Task from "./Task/Task";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
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
      <TaskHeader />
      {/* Add Task */}
      <AddTask/>
      {/* Tasks */}
      <Tasks/>
    </div>
  );
};

export default TaskApp;
