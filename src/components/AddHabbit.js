import React, { useState } from "react";
import styles from "../styles/addHabbit.module.css";
import { useDispatch } from "react-redux";
import { habbitActions } from "../redux/reducers/reducers";

export default function AddHabbit() {
  const [habbit, setHabbit] = useState("");
  const dispatch = useDispatch();

  const handleAddHabbit = (e) => {
    e.preventDefault();
    dispatch(habbitActions.addHabbit(habbit));
    setHabbit("");
  };

  return (
    <div className={styles.createHabbit}>
      <h1>Add New Habbit</h1>
      <p style={{margin: '50px 0 10px 0'}}>
        “We become what we repeatedly do.”{" "}
        <span style={{ display: "inline-block", fontWeight: 'bold'}}>― Sean Covey</span>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "70%",
        }}
      >
        <input
          className={styles.addHabbit}
          placeholder="Type your habbit here..."
          value={habbit}
          onChange={(e) => setHabbit(e.target.value)}
        />
        <button className={styles.addHabbitBtn} onClick={handleAddHabbit}>
          Add Habbit
        </button>
      </div>
    </div>
  );
}
