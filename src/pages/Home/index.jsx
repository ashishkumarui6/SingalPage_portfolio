import React from "react";
import styles from "./index.module.css";
import CustomContaienr from "../../ui/container/CustomContainer";
import Container from "../../ui/container";
import Button from "../../widgets/Button";

const Home = () => {
  return (
    <Container>
      <CustomContaienr>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.latus}>
              <div className={styles.roundTop}>
                <div className={styles.roundBot}></div>
              </div>
            </div>
            <div className={styles.content}>
              <h1>
                Hi, I'm <span>Ashish</span>
              </h1>
              <p>
                I develop smart user interfaces and useful
                <br />
                interactions, developing rich web
                <br />
                applications and seamless web experiences.
              </p>
              <div className={styles.btn}>
                <Button name="Download CV" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          </div>
        </div>
      </CustomContaienr>
    </Container>
  );
};

export default Home;
