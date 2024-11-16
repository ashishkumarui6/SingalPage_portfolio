import React from "react";
import styles from "./index.module.css";
import MiniTitle from "../../shared/SectionTitle/MiniTitle";
import SectionTitle from "../../shared/SectionTitle";
import Container from "../../ui/container";
import CustomContaienr from "../../ui/container/CustomContainer";
import Content from "../../shared/Content";
import Contact_rightCard from "../../components/Contact_rightCard";
import { FaAddressCard } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
const contact = [
  {
    id: 1,
    icon: <FaAddressCard />,
    top: "Address",
    bot: "Lucknow, India",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    top: "Instagram",
    bot: "ashish_374757",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    top: "Whatsapp",
    bot: "+91 7704984177",
  },
  {
    id: 4,
    icon: <MdMarkEmailRead />,
    top: "Gmail",
    bot: "ashishkumarui6@gmail.com",
  },
];

const Contact = () => {
  return (
    <Container>
      <CustomContaienr>
        <div className={styles.Contact}>
          <MiniTitle name="Get in touch" />
          <SectionTitle name="Contact." />
          <Content name="Feel free to contact me if you have any questions or feedback!" />
          <div className={styles.Content}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <div className={styles.contactCont}>
                <ul className={styles.ul}>
                  {contact.map((it) => {
                    return (
                      <li key={it.id}>
                        <Contact_rightCard
                          icon={it.icon}
                          topName={it.top}
                          botName={it.bot}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CustomContaienr>
    </Container>
  );
};

export default Contact;
