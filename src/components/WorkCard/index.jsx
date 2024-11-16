import React from "react";
import styles from "./index.module.css";

const WorkCard = ({ src, title, heading, para, icon, hoverName }) => {
  return (
    <>
      <div className={styles.WorkCard}>
        <div className={styles.workCont}>
          <div className={styles.imgCont}>
            <img src={src} alt={title} />
          </div>
          <div className={styles.hoverCont}>
            <div>
              <h5>{heading}</h5>
              <p>{para}</p>
            </div>
            <div className={styles.icon}>{icon}</div>
          </div>
        </div>
      </div>
      <div className={styles.hoverName}>{hoverName}</div>
    </>
  );
};

export default WorkCard;
