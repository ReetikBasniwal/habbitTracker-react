import React from "react";
import styles from "../styles/daily.module.css";
import { useSelector } from "react-redux";
// import Options from "./Options";

export default function Daily() {
  const habbits = useSelector((state) => state);

  return (
    <>
      {habbits.map((habbit, index) => {
        return (
          <div className={styles.habbit} key={`habbit-id-${index}`}>
            <span className={styles.iconDiv}>
              <i className="fa-regular fa-circle-dot"></i>
            </span>
            <h4>{habbit.text}</h4>
          </div>
        );
      })}
    </>
  );
}
