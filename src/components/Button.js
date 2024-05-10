import React, { Children } from "react";
import './Button.css';

function Button({style, children, icon}){
    const primaryButton = "button primary";
    const secondaryButton = "button secondary";

    const buttonClass = style === "primary" ? primaryButton : secondaryButton;

    return <button className={buttonClass}>{children}{icon && <span className="icon">{icon}</span>}</button>;
}

export default Button;