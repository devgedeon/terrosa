import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

export default class PodporaPacientu extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("kvalitaMenuPouziti");
    this.menuItem.classList.add("bg-gradient-pouziti");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout zpet="/pouziti-pokyny">
        <div className="container-fluid ">
          <div className="row alignCenter sekundarniMenu2">
            <span className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link to="/pouziti-pero">
                <span>Pero</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/pouziti-pokyny">
                <span>Pokyny</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link
                to="/pouziti-podpora-pacientu"
                className="aktivniMenuitemPouziti"
              >
                <span>Podpora pacientů</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid pouzitiBG">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col pouzitinadpisy">
                    <h1 className="op1">
                      TERROSA<sup style={{ fontSize: "25px" }}>®</sup> pacientům
                      poskytuje podporu od začátku do konce
                      <sup style={{ fontSize: "25px" }}>1</sup>
                    </h1>
                    <h2
                      className="op2"
                      style={{
                        fontWeight: "normal",
                        fontSize: "19px"
                      }}
                    >
                      S přípravkem TERROSA je pomoc stále na dosah ruky a je
                      vždy zdarma.<sup>1</sup>
                    </h2>
                    <br />
                    <h2
                      className="op3"
                      style={{ fontWeight: "bold", fontSize: "19px" }}
                    >
                      Co je k dispozici v České republice:
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div className="row temnaModra">
                  <div className="col-lg-1">&nbsp;</div>
                  <div className="col-lg-5 leftGradientBlockPouziti op4">
                    <p>
                      <strong>Profesionální pomoc</strong>
                    </p>
                    <ul>
                      <li>
                        {" "}
                        Pomoc kvalifikovaných <br /> zdravotních sester, online
                        <br /> a telefonicky
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5 leftGradientBlockPouziti op5">
                    <p>
                      <strong>Průběžné zdroje jistoty</strong>
                    </p>
                    <ul>
                      <li>Každodenní připomínka denní dávky</li>
                      <li>
                        Jednou měsíčně připomínka <br /> výměny náplně
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-1">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col">&nbsp;</div>
                </div>
                <div className="row temnaModra">
                  <div className="col-lg-1">&nbsp;</div>
                  <div className="col-lg-10 leftGradientBlockPouziti op6">
                    {" "}
                    <p>
                      <strong>Sebejistý začátek</strong> <br />
                      Osvěta, jež pacientům poskytne odpovědi na otázky…
                    </p>
                    <ul>
                      <li>Jak se toto zařízení používá?</li>
                      <li>
                        Jaký je rozdíl mezi přípravkem TERROSA a tabletami na
                        osteoporózu?
                      </li>
                      <li>
                        Jak (a proč) je třeba zařadit do stravy více vápníku a
                        vitaminu D?
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-1">&nbsp;</div>
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
