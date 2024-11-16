import React from "react";
import styles from "./index.module.css";
import { FaDownload } from "react-icons/fa";

const Button = ({ name }) => {
  return (
    <div className={styles.Btn}>
      <button>
        {name}
        <div className={styles.iconCont}>
          <div className={styles.icon}>
            <FaDownload />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Button;
