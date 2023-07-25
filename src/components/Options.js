import React from "react";
import styles from '../styles/options.module.css'

export default function Options(props) {

  const { date, completed } = props;

  const formatDate = (dateObj) => {
    if (Object.prototype.toString.call(dateObj) === "[object Date]" && !isNaN(dateObj)) {
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      return dateObj.toLocaleDateString(undefined, options);
    }
    return ""; // Return an empty string if the date is invalid
  };

  const formattedDate = formatDate(date.date);
  
  return (
    <div className={styles.optionDiv}>
      <h3 style={{color: '#7449af'}}>{formattedDate}</h3>
      <button className={styles.selectBtn} style={{backgroundColor: completed ? 'greenyellow': ''}}>
        <i className="fa-solid fa-check"></i>
      </button>
      <button className={styles.selectBtn} style={{backgroundColor: completed ? '': 'red'}}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <button className={styles.selectBtn}>
        <i className="fa-solid fa-minus"></i>
      </button>
    </div>
  );
}
