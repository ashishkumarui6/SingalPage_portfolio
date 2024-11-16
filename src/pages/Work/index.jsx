import React from "react";
import Container from "../../ui/container";
import styles from "./index.module.css";
import SectionTitle from "../../shared/SectionTitle";
import MiniTitle from "../../shared/SectionTitle/MiniTitle";
import Content from "../../shared/Content";
import CustomContaienr from "../../ui/container/CustomContainer";
import { AiFillChrome } from "react-icons/ai";
import chat from "../../assets/project/chat.png";
import WorkCard from "../../components/WorkCard";

const Work_card = [
  {
    id: 1,
    img: chat,
    title: "image",
    icon: <AiFillChrome />,
    hoverName: "Hover to play",
    heading: "Calculator",
    para: "Js,HTML,Css,Responsive",
  },
  {
    id: 2,
    img: chat,
    icon: <AiFillChrome />,
    title: "image",
    hoverName: "Hover to play",
    heading: "Calculator",
    para: "Js,HTML,Css,Responsive",
  },
  {
    id: 3,
    img: chat,
    icon: <AiFillChrome />,
    title: "image",
    hoverName: "Hover to play",
    heading: "Calculator",
    para: "Js,HTML,Css,Responsive",
  },
];

const Work = () => {
  return (
    <Container>
      <CustomContaienr>
        <div className={styles.Container}>
          <MiniTitle name="My work" />
          <SectionTitle name="Projects." />
          <Content
            width="69%"
            name="Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
          />
          <div className={styles.mainCont}>
            <div className={styles.top}>
              <div className={styles.card}>
                {Work_card.map((it, index) => {
                  return (
                    <div key={index}>
                      <WorkCard
                        src={it.img}
                        title={it.title}
                        hoverName={it.hoverName}
                        heading={it.heading}
                        para={it.para}
                        icon={it.icon}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.bot}>
              <div className={styles.card}>
                {Work_card.map((it, index) => {
                  return (
                    <div key={index}>
                      <WorkCard
                        src={it.img}
                        title={it.title}
                        hoverName={it.hoverName}
                        heading={it.heading}
                        para={it.para}
                        icon={it.icon}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </CustomContaienr>
    </Container>
  );
};

export default Work;
