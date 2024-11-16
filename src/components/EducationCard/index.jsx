import React from "react";
import styles from "./index.module.css";

const Education = ({ icon, date, course, name }) => {
  return (
    <div className={styles.EducationCard}>
      <div className={styles.Edu_content}>
        <div className={styles.Edu_icon}>
          <div className={styles.icon_box}>
            {icon}
            <div className={styles.latus}></div>
          </div>
        </div>
        <div className={styles.text}>
          <p>{date}</p>
          <h3>{course}</h3>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Education;
