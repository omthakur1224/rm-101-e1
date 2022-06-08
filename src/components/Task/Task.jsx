import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <ul data-testid="task" className={styles.task} style={{display:"flex"}}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text" >
      <Counter/>
      </div>
      {/* Counter here */}
      <button data-testid="task-remove-button" style={{width:"20px",height:"20px"}}>X</button>
    </ul>
  );
};

export default Task;
