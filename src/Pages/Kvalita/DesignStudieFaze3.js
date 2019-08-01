import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
export default class DesignStudieFaze3 extends Component {
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
                        Design studie fáze III<sup>1</sup>
                      </strong>
                      <br /> n = 250
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
                      to="/kvalita-ucinnost-a-imunogenicita"
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
                        Multicentrická, randomizovaná, vůči hodnotiteli
                        zaslepená studie s paralelními skupinami, v níž byla
                        porovnávána účinnost, bezpečnost a imunogenicita
                        přípravku TERROSA<sup>®</sup> (n = 125) a originálního
                        teriparatidu (n = 125) u japonských mužů a
                        postmenopauzálních žen s primární osteoporózou spojenou
                        s vysokým rizikem zlomeniny.
                      </strong>
                      <br />
                      <br />
                      <strong className="temnaModra">
                        - Primární výsledný ukazatel účinnosti
                      </strong>
                      : procentní změna výchozí BMD bederní páteře (L2–L4) po 52
                      týdnech <br />
                      <strong className="temnaModra">
                        - Další výsledné ukazatele
                      </strong>
                      : bezpečnost (včetně AE) a imunogenicita (protilátky proti
                      léku; neutralizační protilátky)
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row" style={{ padding: "0px 20px" }}>
                  <p>&nbsp;</p>
                  <br />
                  <p style={{ fontSize: "10px", maxWidth: "80%" }}>
                    AE – nežádoucí účinky (adverse events); BMD – kostní
                    minerální hustota (bone mineral density). <br />
                    1. hagino H et al. Oral presentation at the World Congress
                    on Osteoporosis, Osteoarghritis and Musculoskletea lDiseases
                    (WCO-IOF-ESCEO). Paris, France. April 4-7, 2019. 2. Data on
                    file. Additional data on study presented at the World
                    Congress on Osteoporosis, Osteoarthirtis and Musculoskelatal
                    Diseases (WCO-IOF-ESCEO). Paris, France. April 4-7, 2019
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
