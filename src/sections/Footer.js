import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <div className="footerdiv">
            <div className="footerContainer">
                <div className="ftop">
                    <h4>Fale comigo</h4>
                    <h2>inaelb@gmail.com</h2>
                </div>
                <div className="fmid">
                    <h4>Braga</h4>
                    <h4>Fortaleza, CE - Brasil</h4>
                    <h4><a href="wa.me/+5585998287428">85 998287428 </a></h4>
                </div>
                <div className="fbottom">
                    <span>© 2024. Braga. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;