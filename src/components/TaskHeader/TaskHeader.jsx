import React,{useState,useEffect} from "react";
import styles from "./taskHeader.module.css";
const TaskHeader = () => {
  // sample values to be replaced
  const [totalTask ,setTotalTask]=useState(0);
  const [unCompletedTask,setUnCompletedTask]=useState(0);
  // let totalTask = 0;
  // let unCompletedTask = 0;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader} style={{
      backgroundColor:"skyblue",
      width: "100%",
      height: "25%"
    }}>
      <h1>Task ToDo</h1>
      <p>
          You have completed
          &nbsp;
          <b data-testid="header-remaining-task">{unCompletedTask}</b>
          &nbsp;
          of
          &nbsp;
          <b data-testid="header-total-task">{totalTask}</b>
          &nbsp;
          task remaining
        </p>
      
    </div>
  );
};

export default TaskHeader;
