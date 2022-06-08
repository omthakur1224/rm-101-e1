import React,{useState,useEffect} from "react";
import styles from "./counter.module.css";
import tasks from '../../data/tasks.json'
const Counter = ({count}) => {
  // sample value to be replaced
  // const [data,setData]=useState(tasks);
  // const [count,setCount]=useState(0);
  // console.log("tasks",tasks,id)
  // useEffect(() => {
    // for(let i=0;i<data.length;i++){
    //   if(tasks.id===id){
    //     setCount(tasks.count);
    //     console.log("count",tasks.count)
    //     break;
    //   }
    // }
  //   console.log("filtered")
  // }, [])
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter} style={{display:"flex"}}>
      <button data-testid="task-counter-increment-button" onClick={()=>{count++}}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={()=>{count--}}>-</button>
    </div>
  );
};

export default Counter;
