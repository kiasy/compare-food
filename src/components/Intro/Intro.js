import React from "react";
import "./Intro.css";


function Intro() {
  
  return (
    <div className="IntroContainer">
        <div className="Intro">
            <div className="Intro--numbers">
                <div className="Intro--numbers-1">
                    1
                </div>
                <div className="Intro--numbers-2">
                    2
                </div>
                <div className="Intro--numbers-3">
                    3
                </div>
            </div>
            <div className="Intro--instructions">
                <div className="Intro--instructions-1">
                    One
                </div>
                <div className="Intro--instructions-2">
                    Two
                </div>
                <div className="Intro--instructions-3">
                    Three
                </div>
            </div>
        </div>
    </div>
  );
}

export default Intro;