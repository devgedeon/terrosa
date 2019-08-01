import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
export default class UcinnostAImunogenicita extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("kvalitaMenuItem");
    this.menuItem.classList.add("bg-gradient-kvalita");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout zpet="/kvalita-bezpecnost">
        <div className="container-fluid">
          <div className="row alignCenter sekundarniMenu2">
            <span className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link to="/kvalita-uvod">
                <span>Biosimilarita</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/kvalita-bioekvivalence">
                <span>Bioekvivalence</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/kvalita-bezpecnost">
                <span>Bezpečnost</span>
              </Link>
            </div>
            <div className="col-lg-3 my-2">
              <Link
                to="/kvalita-ucinnost-a-imunogenicita"
                className="aktivniMenuitem"
              >
                <span>Účinnost & imunogenicita</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {
                //main building
              }

              <div className="container temnaModra">
                <div className="row">
                  <div className="col bionadpisy">
                    <h1 className="op1">
                      TERROSA<sup style={{ fontSize: "25px" }}>®</sup> prokázala
                      ve studii fáze III účinnost s nízkou imunogenní odpovědí
                      <sup>1,2</sup>
                    </h1>
                    <h2 className="op2">
                      TERROSA měla ve studii fáze III u japonských pacientů v
                      porovnání s originálním lékem srovnatelnou účinnost a
                      nízkou imunogenicitu.<sup>1,2</sup>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container temnaModra">
          <div className="row temnaModra">
            <div className="col op5">
              <p style={{ maxWidth: "80%" }}>&nbsp;</p>
            </div>
          </div>
          <div className="row">
            <div className="col leftGradientBlock op3">
              <p>
                <strong>Výsledky po 52 týdnech:</strong>
              </p>
              <p>Účinnost: zvýšení BMD bederní páteře (L2–L4)1,2 </p>

              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col"
                    style={{ color: "#50c2b1", fontWeight: "bold" }}
                  >
                    TERROSA (n = 121) <br /> 8,94 % ± 6,19 %
                  </div>
                  <div className="col">
                    Originální lék (n = 124)
                    <br /> 9,65 % ± 6,22 %
                  </div>
                </div>
              </div>
              <br />
              <p style={{ fontSize: "10px" }}>
                Rozdíl mezi skupinami (95% CI): –0,65 % (–2,17 až 0,87 %) <br />{" "}
                Předem určená hranice ekvivalence: 2,8 %
              </p>
            </div>
            <div className="col leftGradientBlock op4">
              <p>&nbsp;</p>
              <br />
              <p>
                <strong>
                  Nízká imunogenicita<sup>1,2</sup>
                </strong>{" "}
                <br /> Při léčbě přípravkem TERROSA (n = 125) nebyly detekovány
                žádné neutralizační protilátky či ADA.
              </p>
            </div>
          </div>
          <div className="row temnaModra">
            <div className="col op5">
              <p style={{ maxWidth: "80%" }}>&nbsp;</p>
            </div>
          </div>
          <div className="row temnaModra">
            <div className="col op5">
              <p style={{ maxWidth: "80%" }}>&nbsp;</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>&nbsp;</p>
              <p style={{ fontSize: "10px", maxWidth: "85%" }}>
                ADA – protilátky proti léku (anti-drug antibody); BMD – kostní
                minerální hustota (bone mineral density); CI – interval
                spolehlivosti (conﬁ dence interval). <br />
                1. Hagino H et al. Oral presentation at the World Congress on
                Osteoporosis, Osteoarghritis and Musculoskeletal Diseases
                (CWO-IOF-ESCEO). Paris, France. April 4-7, 2019. 2. Data on
                file. Additional data on study presented at the World Congress
                on Osteoporosis, Osteoarthritis and Musculoskeletal Diseases
                (WCO-IOF-ESCEO). Paris, France. April 4-7, 2019.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
