import axios from "axios";
import React,{useState} from "react";
import styles from "./tasks.module.css";
import tasks from '../../data/tasks.json'
import Task from "../Task/Task";
const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [data,setData]=useState(tasks);
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
    {data.map((e)=>
         <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
          <ul data-testid="tasks" className={styles.tasks} key={e.id}>
            {/* Task List */}
            {e.text}
          </ul>
          <Task/>
         </div>
        )}
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </div>
  );
};

export default Tasks;
