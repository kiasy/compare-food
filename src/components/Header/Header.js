import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="NavbarContainer">
        <nav className="Navbar">
            <div className="Navbar--left">
                <a href=".">Compare Food</a>
            </div>
        </nav>
    </div>
  );
}

export default Header;