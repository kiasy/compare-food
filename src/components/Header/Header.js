import React from "react";
import "./Header.css";


function Header() {
  
  return (
    <div className="NavbarContainer">
        <nav className="Navbar">
            <div className="Navbar--left">
                Logo
            </div>
            <div className="Navbar--right">
                <h1 className="Navbar--right--List">
                    Data
                </h1>
                <h1 className="Navbar--right--FAQ">
                    FAQ
                </h1>
            </div>
        </nav>
    </div>
  );
}

export default Header;