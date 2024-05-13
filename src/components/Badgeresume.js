import React, {useState} from "react";
import './Badgeresume.css';
import github from "../assets/icon/github.svg";
import linkedin from "../assets/icon/linkedin.svg";
import whatsapp from "../assets/icon/whatsapp.svg";
import mail from "../assets/icon/mail.svg";


const Badgeresume = () => {

    const [badgeData, setBadgeData] = useState ([
        {
            iconSVG: linkedin,
            textBadge: 'linkedin.com/in/inael-braga',
            siteUrl: "https://br.linkedin.com/in/inael-braga"
        },       
        {
            iconSVG: github,
            textBadge: 'github.com/Inael-Braga',
            siteUrl: "http://github.com/Inael-Braga"
        },
        {
            iconSVG: whatsapp,
            textBadge: '85 998287428',
            siteUrl: "http://wa.me/+5585998287428"
        },
        {
            iconSVG: mail,
            textBadge: 'inaelb@gmail.com',
            siteUrl: "http://mail.to:inaelb@gmail.com"
        },
        {
            iconSVG: linkedin,
            textBadge: 'inaelb@gmail.com',
            siteUrl: "http://mail.to:inaelb@gmail.com"
        },
        
    ])
    return(
        <div className="BadgeDiv">
            {badgeData.map(( badge, index) =>(
                <div className="Badge">
                    <a href={badge.siteUrl}>
                    <img className="iconResume" src={badge.iconSVG} />
                    <p>{badge.textBadge}</p>
                    </a>
                </div>
            ))}

        </div>
    );
}

export default Badgeresume;