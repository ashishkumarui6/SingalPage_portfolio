import React from "react";
import Container from "../../ui/container";
import styles from "./index.module.css";
import Work_Comp from "../../components/Work_Comp";
import Skill from "../../components/Skill";
import MiniTitle from "../../shared/SectionTitle/MiniTitle";
import SectionTitle from "../../shared/SectionTitle";
import CustomContaienr from "../../ui/container/CustomContainer";
import AboutCard from "../../components/Aboutcard";
import Icon from "../../ui/icon";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Card_Data = [
  {
    id: 1,
    name: "years of experience",
    name1: "fresher",
  },
  {
    id: 2,
    counter: "06+",
    name: "Completed Projects",
  },
  {
    id: 3,
    counter: "06+",
    name: "Webapps & Websites",
  },
];

const icon_Data = [
  {
    id: 1,
    icon: <FaGithub />,
  },
  {
    id: 2,
    icon: <FaInstagram />,
  },
  {
    id: 3,
    icon: <FaSnapchatGhost />,
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
  },
];

const About = () => {
  return (
    <Container>
      <CustomContaienr>
        <div className={styles.container}>
          <div>
            <MiniTitle name="About" />
          </div>
          <div>
            <SectionTitle name="About Me" />
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <h4 className={styles.Adbout_h4}>
                <div>
                  <span>I'm Ashish Kumar,</span>Experienced Software Engineer
                  with expertise in
                  <br />
                  <span>React.js.</span> known for strong problem-solving skills
                  and leadership abilities. <br /> I am committed to delivering
                  high-quality frontend solutions, while staying up to date with
                  industry advancements. I am seeking a challenging role as a
                  web app developer where I can leverage my proficiency in
                  modern development tools, including
                  <br />
                  <span>Next.js, Node.js, and Express</span> to contribute to
                  organizational growth. A team player who thrives in
                  collaborative environments, I am always eager to learn new
                  technologies and skills to enhance my impact and meet company
                  objectives.
                </div>
              </h4>
              <div className={styles.icon_cont}>
                {icon_Data.map((it) => {
                  return <Icon key={it.id} icon={it.icon} />;
                })}
              </div>
            </div>
            <div className={styles.right}>
              {Card_Data.map((it) => {
                return (
                  <AboutCard
                    key={it.id}
                    name={it.name}
                    counter={it.counter}
                    name1={it.name1}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Work_Comp />
        <Skill />
      </CustomContaienr>
    </Container>
  );
};

export default About;
