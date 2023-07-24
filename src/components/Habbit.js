import React from "react";
import styles from "../styles/Habbit.module.css";
import Options from "./Options";

export default function Habbit() {
  return (
    <div className={styles.habbit}>
      <h2>Read a book</h2>
      <div className={styles.optionsContainer}>
        <Options />
        <Options />
        <Options />
        <Options />
        <Options />
        <Options />
      </div>
    </div>
  );
}
