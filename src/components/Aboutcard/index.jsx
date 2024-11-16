import React from "react";
import styles from "./index.module.css";

const AboutCard = ({ counter, name, name1 }) => {
  return (
    <div className={styles.AboutCard}>
      <div className={styles.card}>
        <h1>{counter}</h1>
        <p>{name1}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default AboutCard;
