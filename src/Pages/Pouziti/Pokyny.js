import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import image from "../../Images/ilu_1.png";
import image2 from "../../Images/ilu_2.png";
import arrow from "../../Images/arrow.png";

export default class Pokyny extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("kvalitaMenuPouziti");
    this.menuItem.classList.add("bg-gradient-pouziti");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout zpet="/pouziti-pero">
        <div className="container-fluid">
          <div className="row alignCenter sekundarniMenu2">
            <span className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link to="/pouziti-pero">
                <span>Pero</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/pouziti-pokyny" className="aktivniMenuitemPouziti">
                <span>Pokyny</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col pouzitinadpisy">
                    <h1 className="op1">
                      Podávání je podpořeno názorným <br /> návodem obsaženým v
                      balení
                      <sup style={{ fontSize: "25px" }}>1,2</sup>
                    </h1>
                    <h2
                      className="op2"
                      style={{ fontWeight: "normal", fontSize: "19px" }}
                    >
                      Pokyny k použití přípravku TERROSA<sup>®</sup> umožňují
                      již od prvního dne bezpečné použití.<sup>2</sup>
                    </h2>
                    <br />
                    <h2
                      className="op3"
                      style={{ fontWeight: "bold", fontSize: "19px" }}
                    >
                      K dispozici je ilustrovaný návod, jenž pacientům pomůže
                      při užívání léku od přípravy až k aplikaci:<sup>2</sup>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col temnaModra op4">
                    <p>
                      <strong>Příprava pera</strong>
                    </p>
                    <p>
                      Při prvním <br /> použitím nebo <br /> výměně náplně
                    </p>
                    <img
                      className="positionObrazku"
                      style={{ maxWidth: "70%" }}
                      src={image}
                      alt="Pero"
                    />
                    <img className="leftArrow" src={arrow} alt="arrow" />
                  </div>
                  <div className="col temnaModra op5">
                    <p>
                      <strong>Aplikace perem</strong>
                    </p>{" "}
                    <p>
                      Každodenní <br /> podávání
                    </p>
                    <img
                      className="positionObrazku"
                      style={{ maxWidth: "70%", marginRight: "70px" }}
                      src={image2}
                      alt="Pero"
                    />
                    <img className="rightArrow" src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>&nbsp;</p>
              <p style={{ fontSize: "10px" }}>&nbsp;</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p style={{ fontSize: "10px" }}>&nbsp;</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>&nbsp;</p>
              <p style={{ fontSize: "10px" }}>
                O více informací požádejte obchodního zástupce, který vám dodá
                informační materiál o přípravku TERROSA určený pro pacienty a
                instruktážní video. <br />
                1. TERROSA<sup>&reg;</sup> Pen. Patient Instruction Leaflet
                (PIL). 2019. Labellig number: K-22234-1.9. TERROSA
                <sup>&reg;</sup> Pen. Patient Instruction Leaflet (PIL). 2012.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
