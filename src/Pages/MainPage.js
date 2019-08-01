import React from "react";
import logo from "../Images/02_logo.jpg";
import { Link } from "react-router-dom";
import troj from "../Images/troj.png";
export default function MainPage() {
  return (
    <Link to="/uvod" className="mainPage">
      <img className="logo" src={logo} alt="Logo" />
      <div className="mainText op1">
        <p>
          Anabolická léčba pacientů s osteoporózou<sup>1</sup>
        </p>
        <h1>
          TERROSA<sup className="sup">&reg;</sup>
          <img style={{ width: "5%" }} src={troj} alt="sdf" />
        </h1>
        <h2>Pojďme společně stavět</h2>
      </div>
      <div className="bottomText op2">
        <p style={{ fontWeight: "bold" }}>
          TERROSA<sup>&reg;</sup> je určena pro léčbu osteoporózy u žen po
          menopauze a u mužů při zvýšeném riziku zlomenin a osteoporózy spojené
          s dlouhodobou systémovou léčbou glukokortikoidy při zvýšeném riziku
          zlomenin.<sup>1</sup>
        </p>
      </div>
      <div className="bottomText2 op3">
        <p>
          <strong>
            {" "}
            TERROSA<sup>&reg;</sup>. Summary of Product Characteristics. 2017.
            Available at www.ema.europa.eu/en/documents/
            <br />
            product-information/terrosa-epar-product-information_en.pdf (last
            accessed:june 2019){" "}
          </strong>
          <br />
          Tento dokument obsahuje informace o preskripci.
          <br />
          Datum přípravy: červen 2019 Kód odbornosti:
        </p>
      </div>
    </Link>
  );
}
