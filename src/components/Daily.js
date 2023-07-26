import React from "react";
import styles from "../styles/daily.module.css";
import { useDispatch, useSelector } from "react-redux";
import { habbitActions } from "../redux/reducers/reducers";
// import Options from "./Options";

export default function Daily() {
  const habbits = useSelector((state) => state.habbitReducer.habbits);
  const dispatch = useDispatch();
  // console.log(habbits);

  return (
    <>
      {habbits &&
        habbits.map((habbit, index) => {
          // Calculate the completed days count
          const completedDays = habbit.weekData.filter((day) => day.isDone === true).length;

          return (
            <div className={styles.habbit} key={`habbit-id-${index}`}>
              <span className={styles.iconDiv}>
                <i className="fa-regular fa-circle-dot"></i>
              </span>
              <button
                className={`${styles.deleteBtn} ${styles["vibrate-on-hover"]}`}
                onClick={() => dispatch(habbitActions.deleteHabbit(habbit._id))}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <h4 >{habbit.text}</h4>
              <span style={{marginBottom: '10px'}}>{`${completedDays}/7 days`}</span>
            </div>
          );
        })}
    </>
  );
}
