import axios from "axios";
import React,{useState} from "react";
import styles from "./tasks.module.css";
import tasks from '../../data/tasks.json'
import Task from "../Task/Task";
const Tasks = ({data,setData}) => {
  // NOTE: do not delete `data-testid` key value pair
  // const [data,setData]=useState(tasks);
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
    {data.map((e)=>
         <div style={{display:"flex",justifyContent:"space-between"}} key={e.id}>
          <ul data-testid="tasks" className={styles.tasks}>
            {/* Task List */}
            {e.text}
          </ul>
          <Task data={data} setData={setData} count={e.id}/>
         </div>
        )}
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </div>
  );
};

export default Tasks;
