import React from "react";
import styles from "./index.module.css";
import MiniTitle from "../../shared/SectionTitle/MiniTitle";
import SectionTitle from "../../shared/SectionTitle";
import Education from "../EducationCard";
import { MdCastForEducation } from "react-icons/md";

const Edu_Data = [
  {
    id: 1,
    icon: <MdCastForEducation />,
    date: "2022-25",
    course: "Polytechnic Diploma (CSE) ",
    name: "Shri Ramswaroop Memorial University,Lucknow",
  },
  {
    id: 2,
    icon: <MdCastForEducation />,
    date: "2021-23",
    course: "ITI (Electrician) ",
    name: "Government ITI,Musafirkhana,Amethi",
  },
  {
    id: 3,
    icon: <MdCastForEducation />,
    date: "2021",
    course: "Matriculation",
    name: "Sri GB Singh GIC Achalpur,Amethi",
  },
];

const Exp_data = [
  {
    id: 1,
    icon: <MdCastForEducation />,
    date: "Jun 2024 - Present",
    course: "React Developer",
    name: "Softflew - Best IT Training Institute in Lucknow",
  },
];

const Work_Comp = () => {
  return (
    <div className={styles.content}>
      <div>
        <MiniTitle name="What I have done so far." />
      </div>
      <div>
        <SectionTitle name="Education & Experience." />
      </div>
      <div className={styles.componet}>
        <div className={styles.left}>
          <ul className={styles.ul}>
            {Edu_Data.map((it, index) => {
              return (
                <li key={index}>
                  <Education
                    icon={it.icon}
                    date={it.date}
                    course={it.course}
                    name={it.name}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.right}>
          <ul className={styles.ul}>
            {Exp_data.map((it, index) => {
              return (
                <li key={index}>
                  <Education
                    icon={it.icon}
                    date={it.date}
                    course={it.course}
                    name={it.name}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work_Comp;
