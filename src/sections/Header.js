import React from "react";
import './Header.css';
import { Link } from 'react-router-dom'; //Função de linkar pra outra página

const Header = () => {
    return(
        <div className="Header">
            <div className="HeaderContainer">
                <div className="HeaderLogo">
                    <h4><Link to="/"><a>Braga</a></Link></h4>
                </div>
                <div className="HeaderMenu">
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li><Link to="/contato"><a>Contato</a></Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header;