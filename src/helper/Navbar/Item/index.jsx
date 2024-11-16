import React from "react";
import styles from "../index.module.css";

const Item = ({ name, onClick }) => {
  return (
    <li className={styles.li} onClick={() => onClick(name)}>
      {name}
    </li>
  );
};

export default Item;
