import React from "react";
import styles from "./index.module.css";
const Contact_rightCard = ({ icon, topName, botName }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.matter}>
          <div className={styles.text}>
            <div className={styles.top}>{topName}</div>
            <div className={styles.bot}>{botName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_rightCard;
