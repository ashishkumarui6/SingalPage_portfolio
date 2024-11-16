import React from "react";
import styles from "./index.module.css";

const Content = ({ name, width }) => {
  return (
    <h4 className={styles.Content} style={{ width: width }}>
      {name}
    </h4>
  );
};

export default Content;
