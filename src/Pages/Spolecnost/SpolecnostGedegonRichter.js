import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

export default class SpolecnostGedegonRichter extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("spolecnostMenu");
    this.menuItem.classList.add("bg-gradient-spolecnost");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout vpred="/spolecnost-podpora-hcp">
        <div className="container-fluid ">
          <div className="row alignCenter sekundarniMenu2">
            <span className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link
                to="/spolecnost-gedeon-richter"
                className="aktivniMenuitemSpolecnost"
              >
                <span>Gedeon Richter</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/spolecnost-podpora-hcp">
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
                      Gedeon Richter je hrdý výrobce přípravku <br /> TERROSA
                      <sup style={{ fontSize: "25px" }}>&reg;</sup>: od naší
                      společnosti k vaší
                    </h1>

                    <br />
                  </div>
                </div>

                <div className="row temnaModra">
                  <div className="col-lg-1">&nbsp;</div>
                  <div className="col-lg-5 leftGradientBlockSpolecnost op2">
                    <p>
                      <strong>Evropský výrobce</strong>
                    </p>
                    <p>
                      Gedeon Richter je maďarská farmaceutická <br /> společnost
                      s celosvětovým dosahem. <br /> TERROSA se vyrábí v našem
                      biotechnologickém výrobním podniku v Německu.
                    </p>
                  </div>
                  <div className="col-lg-5 leftGradientBlockSpolecnost op3">
                    <p>
                      <strong>Místní dodavatel</strong>
                    </p>
                    <p>
                      Gedeon Richter má zastoupení ve 100 zemích a bezpočet
                      komunit po celém světě. Sami řídíme dodavatelský řetězec,
                      abychom zajistili účelnou distribuci a aby pacienti
                      dostali svůj lék, kdykoli jej potřebují.
                    </p>
                  </div>
                  <div className="col-lg-1">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row temnaModra">
                  <div className="col-lg-1">&nbsp;</div>
                  <div className="col-lg-10 leftGradientBlockSpolecnost op4">
                    {" "}
                    <p>
                      <strong>Všichni jsme obyvatelé jedné planety</strong>{" "}
                      <br />
                      Udržitelnost bereme vážně<sup>1</sup>
                    </p>
                    <ul>
                      <li>
                        Dokladem jsou námi prosazované programy, jež přispívají
                        k ochraně prostředí, jako je vnitropodnikové zřízení
                        míst pro sběr papíru Let´s Collect Together v řadě
                        center společnosti.{" "}
                      </li>
                    </ul>
                    <p>
                      Vnější kryt pera TERROSA je kovový a všechny jeho části
                      jsou vyrobeny tak, aby vydržely 2 roky.<sup>2</sup>
                    </p>
                  </div>
                  <div className="col-lg-1">&nbsp;</div>
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
                1. Data on file. Ypsomed Selfcare Solutions. Marketing Claims.
                2019
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
