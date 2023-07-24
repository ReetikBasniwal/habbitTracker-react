import React from "react";
import styles from '../styles/options.module.css'

export default function Options() {
  return (
    <div className={styles.optionDiv}>
      <h3 style={{color: '#7449af'}}>today</h3>
      <button className={styles.selectBtn}>
        <i class="fa-solid fa-check"></i>
      </button>
      <button className={styles.selectBtn}>
        <i class="fa-solid fa-xmark"></i>
      </button>
      <button className={styles.selectBtn}>
        <i class="fa-solid fa-minus"></i>
      </button>
    </div>
  );
}
