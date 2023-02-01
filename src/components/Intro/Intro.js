import React from "react";
import "./Intro.css";
import stepOne from "../../images/clickOne.svg";
import stepTwo from "../../images/clickTwo.svg";
import stepThree from "../../images/scale.svg";


function Intro() {
  
  return (
    <div className="IntroContainer">
        <div className="Intro">
            <div>
                <h1 className="Intro--title"> Compare nutrition values in 3 easy steps!</h1>
            </div>
            <div className="Intro--instructions">
                <div className="Intro--instructions-1">
                    <img src={stepOne} width="150px" alt="Step One - Select an item" />
                </div>
                <div className="Intro--instructions-2">
                    <img src={stepTwo} width="150px" alt="Step Two - Select an item" />
                </div>
                <div className="Intro--instructions-3">
                    <img src={stepThree} width="150px" alt="Step Three - Compare" />
                </div>
            </div>
            <div className="Intro--numbers">
                <div className="Intro--numbers-1">
                    Select first item
                </div>
                <div className="Intro--numbers-2">
                    Select second item
                </div>
                <div className="Intro--numbers-3">
                    Compare nutrition
                </div>
            </div>
        </div>
    </div>
  );
}


export default Intro;