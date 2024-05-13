import React, { useState } from "react";
import './CardWorks.css';
import cardorder from "../assets/cardorder.jpg";
import cardnft from "../assets/cardnft.jpg";
import card2col from "../assets/card2col.jpg";

const CardWorks = () => {
    const [CardsWorkData, setWorksData] = useState([
        {
            imageUrl: cardorder,
            titleWork: 'Card Order',
            languageWork: 'HTML e CSS',
            siteUrl: 'https://inael-braga.github.io/Order-summary-component/'
        },
        {
            imageUrl: cardnft,
            titleWork: 'Cart NFT',
            languageWork: 'HTML e CSS',
            siteUrl: 'https://inael-braga.github.io/01---NTF-Preview-Card/'
        },  
        {
            imageUrl: card2col,
            titleWork: 'Card teste',
            languageWork: 'HTML e CSS',
            siteUrl: 'https://inael-braga.github.io/Results-summary-component/'
        },  
        
        

    ])
    return(
        <div className="Cards">
            {CardsWorkData.map((proj, index) =>(
                <div className="CardDiv">
                    <a href={proj.siteUrl}><img src={proj.imageUrl} /></a>
                    <h4>{proj.titleWork}</h4>
                    <span>{proj.languageWork}</span>
                
                </div>

            ))}

        </div>

        
    );
}

export default CardWorks;