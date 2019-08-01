import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import anotherImage from "../../Images/studie.jpg";

export default class DesignStudie extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("kvalitaMenuItem");
    this.menuItem.classList.add("bg-gradient-kvalita");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">
                    <h2 className="temnaModra op1">
                      <strong style={{ marginTop: "10px" }}>
                        Design studie FK/FD<sup>1</sup>
                      </strong>
                      <br /> n = 54
                    </h2>
                  </div>
                  <div
                    className="col"
                    style={{
                      textAlign: "right",
                      marginTop: "15px",
                      position: "absolute",
                      right: 0
                    }}
                  >
                    <Link
                      id="sakraTohlA"
                      to="/kvalita-bioekvivalence"
                      style={zavri}
                    >
                      x
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <br />
                  </div>
                </div>
                <div className="row" style={{ padding: "0px 20px" }}>
                  <div className="col leftGradientBlock op2">
                    <p>
                      <strong className="temnaModra">
                        Studie fáze I, randomizovaná, dvojitě zaslepená,
                        dvoufázová, dvousekvenční, zkřížená komparativní FK/FD
                        studie fáze I probíhající ve dvou obdobích u zdravých
                        premenopauzálních žen, v níž byly sledovány proﬁ ly
                        časového průběhu sérových koncentrací a bezpečnost po
                        podání jedné dávky léku (TERROSA
                        <sup>®</sup>
                        proti originálnímu teriparatidu).
                      </strong>
                      <br />
                      <br />
                      <strong className="temnaModra">
                        Společné výsledné ukazatele FK:
                      </strong>{" "}
                      rozsah expozice [AUC<sub>0–tlast</sub>] a vrcholná
                      expozice [C
                      <sub>max</sub>] - Na ekvivalenci lze soudit, jestliže
                      94,12 % CI pro poměr TERROSA : originální teriparatid
                      spadá do standardního rozmezí <br />
                      bioekvivalence 80,00–125,00 %. <br />
                      <strong className="temnaModra">
                        Další výzkumné ukazatele:{" "}
                      </strong>{" "}
                      další parametry FK, FD a bezpečnosti včetně sérových
                      koncentrací kalcia a výskytu nežádoucích účinků
                    </p>
                  </div>
                </div>
                <div className="row" style={{ padding: "0px 20px" }}>
                  <div className="col op3">
                    <p className="temnaMmodra">
                      Odběr vzorku pro zhodnocení FK (koncentrace teriparatidu)
                    </p>
                  </div>
                </div>
                <div className="row op4" style={{ padding: "0px 20px" }}>
                  <div className="col">
                    <img
                      style={{ maxWidth: "70%" }}
                      src={anotherImage}
                      alt=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row" style={{ padding: "0px 20px" }}>
                  <p>&nbsp;</p>
                  <br />
                  <p style={{ fontSize: "10px" }}>
                    AUC0-tlast – plocha pod křivkou od času 0 k poslednímu
                    měření; CI – interval spolehlivosti (conﬁ dence interval);{" "}
                    <br /> C <sub>max</sub> – maximální koncentrace; FD –
                    farmakodynamika; FK – farmakokinetika. <br />
                    1. Takács I et al. Osteoporosis International. 2018;
                    30(3):675-683.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
const zavri = {
  textAlign: "right",
  backgroundColor: "#23355f",
  color: "#fff !important",
  fontWeight: "bold",
  padding: "10px 15px",
  borderRadius: "50%"
};
