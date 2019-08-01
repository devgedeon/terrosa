import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import babka from "../../Images/babicka.png";
import React, { Component } from "react";
import holub from "../../Images/holub.png";
import holub2 from "../../Images/hloub_2.png";

export default class Uvod extends Component {
  componentDidMount() {
    this.menuItem = document
      .getElementById("nenaplnene")
      .classList.add("class", "border-bottom-half");
    this.menIcko = document.getElementById("uvodMenuItem");
    this.menIcko.classList.add("sedyBackgroundProUvod");
    this.menIcko.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout vpred="/uvod-terrosa">
        <img className="uvodniBabicka" src={babka} alt="" />
        <img className="uvodniHolub" src={holub} alt="" />
        <img className="zobajiciHolub" src={holub} alt="" />
        <img className="zobajiciHolub2" src={holub2} alt="" />
        <div className="container-fluid">
          <div className="row alignCenter sekundarniMenu">
            <div className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link to="/uvod">
                <span>
                  Očekávané
                  <br />
                  potřeby
                </span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/uvod-terrosa">
                <span className="specialBlbost">
                  TERROSA<sup>&reg;</sup>
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col" style={padding}>
                  <br />
                  <h1 className="op1" style={nadpis}>
                    Zvyšující se výskyt osteoporózy
                    <sup style={{ fontSize: "22px" }}>1</sup> <br /> je způsoben
                    stárnutím populace<sup style={{ fontSize: "22px" }}>2</sup>
                  </h1>
                  <br />
                  <div>
                    <h3 className="op2">
                      <strong>V Evropě:</strong>
                    </h3>
                    <p className="op2">
                      Osteoporotické zlomeniny jsou každoročně příčinou{" "}
                      <strong>
                        2 milionů <br /> ztracených let života v důsledku nemoci
                        (DALY – disability-adjusted <br /> life years)
                      </strong>
                      , což je víc než u revmatoidní artritidy.<sup>1</sup>
                    </p>
                    <p>&nbsp;</p>
                    <p className="op3" style={tazelena}>
                      Příštích pět let: <br /> významný dopad <br /> na
                      společnost a ekonomiku
                      <sup style={{ fontSize: "15px" }}>3</sup>
                    </p>

                    <p className="babickaBefore op4" style={terapie}>
                      Jak se vypořádáme s rostoucí <br /> potřebou léčby <br />{" "}
                      včetně anabolické terapie?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p style={(padding, regerence)}>
                DALY zahrnuje invaliditu a ztracené roky života v důsledku
                osteoporotické zlomeniny. <br /> QALY sestává z nákladů na nové
                a přetrvávající zlomeniny a nákladů na farmakologickou prevenci
                zlomenin včetně nákladů na administrativu a sledování. 1.
                Johnell O, Kanis JA: Osteoporos Int. 2006; 17:1726-1733. 2. EU
                Commission. The 2018 Ageing Report. Economic & Budgetary
                Projections for the 28 EU Member States (2016-2070). Available
                at
                https://ec.europa.eu/infopublications/economic-and-financial-affairs-publications_en
                (last accessed: June 2019. 3 Svedbom A et al. Arch Osteoporos.
                2013; 8: 137
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const nadpis = {
  fontWeight: "bold",
  fontSize: "2.3rem"
};
const padding = {
  marginLeft: "100px",
  color: "#23355f"
};
const tazelena = {
  color: "#0c9aa8",
  fontWeight: "bold",
  fontSize: "1.7rem",
  lineHeight: "2.2rem"
};
const terapie = {
  fontWeight: "bold",
  fontSize: "1.4rem",
  lineHeight: "2rem"
};
const regerence = {
  fontSize: "11px",
  marginLeft: "130px",
  maxWidth: "60vw"
};
