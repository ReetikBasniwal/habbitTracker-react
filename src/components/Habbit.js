import React from "react";
import styles from "../styles/Habbit.module.css";
import Options from "./Options";
import { useSelector } from "react-redux";


export default function Habbit() {

  const habbits = useSelector((state) => state.habbitReducer.habbits);
  console.log(habbits);

  return (
    <>
      {habbits.map((habbit, index) => {
        return (
          <div className={styles.habbit} key={`habbit-id-${index}`}>
            <h2>{habbit.text}</h2>
            <div className={styles.optionsContainer}>
              <Options weekDates={habbit.weekData} isCompleted={habbit.isDone}/>
            </div>
          </div>
        );
      })}
    </>
    
  );
}
