import React from "react";
import styles from '../styles/options.module.css'

export default function Options(props) {

  const { weekDates, isCompleted } = props;

  // const formatDate = (dateObj) => {
  //   if (Object.prototype.toString.call(dateObj) === "[object Date]" && !isNaN(dateObj)) {
  //     const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  //     return dateObj.toLocaleDateString(undefined, options);
  //   }
  //   return ""; // Return an empty string if the date is invalid
  // };

  // const formattedDate = formatDate(date.date);
  
  return (
    <>
      {weekDates.map((date) => 
        <div className={styles.optionDiv} key={`id-${date.id}`}>
          <h3 style={{color: '#ffffff'}}>{date.day}</h3>
          <h3 style={{color: '#7449af'}}>{`${date.dd}/${date.mm}/${date.year}`}</h3>
          <button className={styles.selectBtn} style={ isCompleted && {backgroundColor: isCompleted ? 'greenyellow': ''}}>
            <i className="fa-solid fa-check"></i>
          </button>
          <button className={styles.selectBtn} style={ isCompleted && {backgroundColor: isCompleted ? '': 'red'}}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button className={styles.selectBtn} style={ isCompleted === null ? {backgroundColor: 'greenyellow'}: null}>
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>
      )}
      
    </>
  );
}
