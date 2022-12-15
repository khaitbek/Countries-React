import React from "react";
// import the logo
import LogoImage from "./assets/logo.svg";


function Logo(){
    return (
        <a href="#" className="site-logo">
            <img src={LogoImage} alt="Counties Logo" className="logo-img" width="234" height="33"/>
        </a>
    )
}

export default Logo;