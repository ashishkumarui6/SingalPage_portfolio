import React from "react";
import Navbar from "../../helper/Navbar";
import About from "../../pages/About";
import Work from "../../pages/Work";
import Contact from "../../pages/Contact";

const Public = ({ element }) => {
  return (
    <main>
      <Navbar />
      {element}
      <About />
      <Work />
      <Contact />
    </main>
  );
};

export default Public;
