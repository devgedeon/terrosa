import React from "react";
import domek from "../Images/domek.jpg";
import sd from "../Images/sdikona.jpg";
import pi from "../Images/spc.jpg";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="container-fluid">
      <div className="row hlavniMenu">
        <div className="col col-256">&nbsp;</div>
        <div className="col col-128" id="uvodMenuItem">
          <Link to="/uvod">Úvod</Link>
        </div>
        <div className="col col-128" id="kvalitaMenuItem">
          <Link to="/kvalita-uvod">Kvalita</Link>
        </div>
        <div className="col col-128">Použití</div>
        <div className="col col-128">Společnost</div>
        <div className="col col-128">Dostupnost</div>
        <div className="col col-128">Souhrn</div>
        <div className="col col-256">
          <img src={domek} alt="" />
          &nbsp;&nbsp;
          <img src={sd} alt="" />
          &nbsp;&nbsp;
          <img src={pi} alt="" />
        </div>
      </div>
      <div className="row">
        <hr />
      </div>
    </div>
  );
}
