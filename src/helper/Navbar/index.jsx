import React from "react";
import styles from "./index.module.css";
import Item from "./Item";
import Container from "../../ui/container";

const Navbar = ({ OngetMenu }) => {
  return (
    <Container>
      <nav>
        <div className={styles.logo}>
          {/* <span>A</span> */}
          <p>Ashish | Protfolio</p>
        </div>
        <ul className={styles.ul}>
          <Item name="Home" onclick={OngetMenu} />
          <Item name="About" onclick={OngetMenu} />
          <Item name="Work" onclick={OngetMenu} />
          <Item name="Contact" onclick={OngetMenu} />
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
