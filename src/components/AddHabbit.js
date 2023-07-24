import React from 'react'
import styles from '../styles/addHabbit.module.css';

export default function AddHabbit() {
  return (
    <div className={styles.createHabbit}>
        <h1>Add New Habbit</h1>
        <p>“We become what we repeatedly do.” <h5 style={{display: 'inline-block'}}>― Sean Covey</h5></p>
        <div style={{display: 'flex', justifyContent:'space-around', alignItems: 'center', width: '70%'}}>
            <input 
                className={styles.addHabbit}
                placeholder='Type your habbit here...'
            />
            <button 
                className={styles.addHabbitBtn}
            >Add Habbit</button>
        </div>
    </div>
  )
}
