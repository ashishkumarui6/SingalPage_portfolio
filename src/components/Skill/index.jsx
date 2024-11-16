import React from "react";
import styles from "./index.module.css";
import html from "../../assets/skill_icon/html.png";
import css from "../../assets/skill_icon/css.png";
import js from "../../assets/skill_icon/js.png";
import react from "../../assets/skill_icon/react.png";
import redux from "../../assets/skill_icon/redux.png";
import taiwind from "../../assets/skill_icon/tailwind.png";
import node from "../../assets/skill_icon/node.png";
import express from "../../assets/skill_icon/express.png";
import mongo from "../../assets/skill_icon/mongo.png";
import git from "../../assets/skill_icon/git.png";
import MiniTitle from "../../shared/SectionTitle/MiniTitle";
import SectionTitle from "../../shared/SectionTitle";
import Content from "../../shared/Content";

const iconData = [
  { id: 1, img: html, name: "HTML 5", title: "skill_con" },
  { id: 2, img: css, name: "CSS 3", title: "skill_con" },
  { id: 3, img: js, name: "JavaScript", title: "skill_con" },
  { id: 4, img: react, name: "React JS", title: "skill_con" },
  { id: 5, img: redux, name: "Redux Toolkit", title: "skill_con" },
  { id: 6, img: taiwind, name: "Tailwind CSS", title: "skill_con" },
  { id: 7, img: node, name: "Node JS", title: "skill_con" },
  { id: 8, img: express, name: "ExpressJS", title: "skill_con" },
  { id: 9, img: mongo, name: "MongoDB", title: "skill_con" },
  { id: 10, img: git, name: "Git", title: "skill_con" },
];

const Skill = () => {
  return (
    <>
      <MiniTitle name=" Skillset i have" />
      <SectionTitle name="Technology." />
      <Content
        width="68%"
        name="HTML, CSS, JS building small and medium web applications with React, Node, Express and ThreeJS, custom plugins, features animations and coding interactive layouts. I have also full-stack developer experience"
      />
      <div className={styles.Content}>
        {iconData.map((it, index) => {
          return (
            <div className={styles.icon} key={index}>
              <div className={styles.imgCont}>
                <img src={it.img} alt={it.title} />
              </div>
              <div className={styles.name}>{it.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skill;
