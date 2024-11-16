import React from "react";
import styles from "./index.module.css";

const Icon = ({ icon }) => {
  return (
    <div className={styles.about_Icon}>
      <div className={styles.Icon}>{icon}</div>
    </div>
  );
};

export default Icon;
