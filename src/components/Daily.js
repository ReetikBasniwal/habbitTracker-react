import React from "react";
import styles from "../styles/daily.module.css";
import Options from "./Options";

export default function Daily() {
  return (
    <div className={styles.habbit}>
      <span className={styles.iconDiv}>
        <i class="fa-regular fa-circle-dot"></i>
      </span>
      <h4>Your Habbit</h4>
    </div>
  );
}
