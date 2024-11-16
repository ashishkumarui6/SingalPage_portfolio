import React from "react";
import styles from "./index.module.css";

const MiniTitle = ({ name }) => {
  return <div className={styles.title}>{name}</div>;
};

export default MiniTitle;
