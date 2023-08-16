import React from "react";
import styles from "../styles/options.module.css";
import { useDispatch } from "react-redux";
import { habbitActions } from "../redux/reducers/reducers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Options(props) {
  const habbit = props.habbit;
  console.log(habbit);
  // const isCompleted = props.weekData.isDone;
  const dispatch = useDispatch();
  const today = new Date().getDay();

  const toggleHabbit = (habbitId, dayId, choice) => {
    if (dayId > today) {
      toast.error("You can not edit your next days status", {
        position: toast.POSITION.TOP_LEFT,
      });
      return;
    }
    if(choice === 1){
      dispatch(habbitActions.markDone({ habbitId, dayId }))
    }else if(choice === 2){
      dispatch(habbitActions.markNotDone({ habbitId, dayId }))
    }else {
      dispatch(habbitActions.markDefault({ habbitId, dayId }))
    }

  };

  return (
    <>
      {habbit.weekData.map((dateItem, index) => (
        <div className={styles.optionDiv} key={`id-${index}`}>
          <h3 style={{ color: "#ffffff" }}>{dateItem.day}</h3>
          <h3
            style={{ color: "#7449af" }}
          >{dateItem.date}</h3>
           <button
            className={styles.selectBtn}
            style={
              dateItem.isDone === true ? { backgroundColor: "greenyellow" } : null
            }
            onClick={() => toggleHabbit(habbit._id, dateItem.id, 1)}
          >
            <i className="fa-solid fa-check"></i>
          </button>
          <button
            className={styles.selectBtn}
            style={dateItem.isDone === false ? { backgroundColor: "red" } : null}
            onClick={() => toggleHabbit(habbit._id, dateItem.id, 2)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button
            className={styles.selectBtn}
            style={dateItem.isDone === null ? { backgroundColor: "#7e4bc6" } : null}
            onClick={() => toggleHabbit(habbit._id, dateItem.id, 3)}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>
      ))}
    </>
  );
}
