import React from "react";
import styles from "./index.module.css";

const SectionTitle = ({ name }) => {
  return <div className={styles.title}>{name}</div>;
};

export default SectionTitle;
