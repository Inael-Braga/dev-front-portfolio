import React, { useState } from "react";
import './MyProj.css';
import Button from "../components/Button";
import exampleproj from '../assets/exampleproj.png';    
import { Link } from "react-router-dom";

const MyProj = () => {

    const [cardsData, setCardsData] = useState([
        {
            imageUrl: exampleproj,
            title: 'titulo',
            client: 'Cliente 1',
            work: 'Trabalho 1'
        },
        {
            imageUrl: exampleproj,
            title: 'titulo',
            client: 'Cliente 1',
            work: 'Trabalho 1'
        },
        {
            imageUrl: exampleproj,
            title: 'titulo',
            client: 'Cliente 1',
            work: 'Trabalho 1'
        },
    ]);

    return(
        <section className="MyProjDiv">
            <div className="MyProjContainer">
            <h2>Projetos em destaque</h2>
            <Button style="secondary"><a><Link to="/projetos">Ver mais</Link></a></Button>
            <div className="cardsPai">
                <div className="Cardsproj">
                    {cardsData.map((card, index) => (
                        <div key={index} className="CardX">
                            <img src={card.imageUrl} alt="exemplo"/>
                            <div className="TitulodoCard">
                                <h4>{card.title}</h4>
                                <hr/>
                            </div>
                            <table>
                            <tbody>
                                <tr>
                                    <tr>Client: </tr>
                                    <th>{card.client}</th>
                                </tr>
                                <tr>
                                    <tr>Work: </tr>
                                    <th>{card.work}</th>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    ))} 
                    
                </div>
            </div>

            </div>
        </section>
    );
}

export default MyProj;