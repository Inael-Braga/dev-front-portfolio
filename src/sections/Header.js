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
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="/projetos"><a>Projetos</a></Link></li>
                        <li><Link to="/resume"><a>Resume</a></Link></li>
                        <li><Link to="/contato"><a>Contato</a></Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header;