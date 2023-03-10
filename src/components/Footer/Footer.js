import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerHR">
                <hr />
            </div>
            <div className="footerSocial">
                <a href="https://www.linkedin.com/in/danielklivansky/" class="fa fa-linkedin"> </a>
                <a href="https://github.com/kiasy/compare-food" class="fa fa-github"> </a>
                <a href="mailto:dakiasy@gmail.com" class="fa fa-envelope-o"> </a>
            </div>
            <div className="footerText">
                <p>Copyright ©2023 Daniel Klivansky, Inc. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;




