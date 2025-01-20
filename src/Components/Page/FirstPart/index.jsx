import React from 'react';
import { Modes } from '../../../assets/Modes';
import { LanguageSwicher } from '../../../assets/Lang';
import mern from "../../../../public/img/mern.png";
import "./style.css";

const FirstPart = () => {
  return (
    <div className="layout">
      <nav className="sticky-navbar">
        <div className="navbar">
          <div className="mode">
            <Modes />
          </div>
          <div className="lang">
            <LanguageSwicher />
          </div>
        </div>

        <div className="mern-img">
          <img src={mern} draggable="false" alt="MERN Logo" />
          {/* <p>by Fidan</p> */}
        </div>
      </nav>

  
    </div>
  );
};

export default FirstPart;
