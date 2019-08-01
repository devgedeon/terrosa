import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import image from "../../Images/florist_full.png";

export default class SpolecnostPodporaHCP extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("spolecnostMenu");
    this.menuItem.classList.add("bg-gradient-spolecnost");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout zpet="/spolecnost-gedeon-richter">
        <div className="container-fluid ">
          <div className="row alignCenter sekundarniMenu2">
            <span className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link to="/spolecnost-gedeon-richter">
                <span>Gedeon Richter</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link
                to="/spolecnost-podpora-hcp"
                className="aktivniMenuitemSpolecnost"
              >
                <span>Podpora HCP</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid pouzitiBGProSpolecnost">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col pouzitinadpisy">
                    <h1 className="op1" style={{ fontSize: "34px" }}>
                      Využijte podpory, kterou poskytujeme <br /> zdravotnickým
                      odborníkům ve vašem regionu
                    </h1>
                    <h2
                      className="op2"
                      style={{ color: "#3e79be", fontWeight: "normal" }}
                    >
                      Jsme stále v terénu, kde pomáháme zdravotnickým odborníkům
                      zasvěcovat <br /> pacienty do optimální injekční techniky.
                    </h2>
                    <br />
                  </div>
                </div>

                <div className="row temnaModra">
                  <div className="col-lg-1">&nbsp;</div>
                  <div className="col-lg-5 leftGradientBlockSpolecnost op3">
                    <p>
                      <strong> Osobní a názorná</strong> demonstrace používání
                      pera TERROSA<sup>&reg;</sup>
                    </p>
                    <p>
                      <strong>Audiovizuální detailní prezentace</strong> použití
                      pera TERROSA<sup>&reg;</sup>
                    </p>
                    <p>
                      <strong>Demonstrační balíček</strong> určený pro
                      zdravotnické pracoviště, který obsahuje pero, polštářek
                      pro nácvik injekce, zásobní vložky plněné <br /> vodou,
                      jehly a návod na použití
                    </p>
                  </div>
                  <div className="col-lg-5 op4">
                    <img
                      src={image}
                      alt="florist"
                      style={{ maxWidth: "85%" }}
                    />
                  </div>
                  <div className="col-lg-1">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col-lg-1" />
                  <div className="col-lg-6 leftGradientBlockSpolecnost op5">
                    <p>Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h2 style={{ fontWeight: "normal", fontSize: "19px" }}>
                    &nbsp;
                  </h2>
                  <br />
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
              <p style={{ fontSize: "10px" }}>
                HCP - zdravotnický odborník (healthcare proessional); IFU -
                návod na použití (instructions for use). <br />
                1. Dependent on local tactics - to be updated at localistaion
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
