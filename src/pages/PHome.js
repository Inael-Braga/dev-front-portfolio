import React from "react";
import './PHome.css';
import Hero from "../sections/Hero";
import About from "../sections/About";
import Inspiracional from "../sections/Inspiracional";
import MyProj from "../sections/MyProj";

function PHome() {
    return (
        <>
            <Hero />
            <About />
            <MyProj />
            <Inspiracional />
        </>
    );
  }
  
  export default PHome;