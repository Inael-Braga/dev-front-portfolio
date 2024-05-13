import React from "react";
import './PHome.css';
import Hero from "../sections/Hero";
import About from "../sections/About";
import Inspiracional from "../sections/Inspiracional";
import MyProj from "../sections/MyProj";
// import CardWorks from "../sections/CardWords";


function PHome() {
    return (
        <>
            <Hero />
            <About />
            <MyProj />
            {/* <CardWorks /> */}
            <Inspiracional />
        </>
    );
  }
  
  export default PHome;