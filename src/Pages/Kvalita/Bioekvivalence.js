import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import FKProfil from "./comps/FKProfil";
import SDProfil from "./comps/SDProfil";
export default class Bioekvivalence extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("kvalitaMenuItem");
    this.menuItem.classList.add("bg-gradient-kvalita");
    this.menuItem.children[0].style.color = "#fff";
  }
  state = {
    component: true
  };

  handleThis = e => {
    const res = e.target.innerHTML;
    if (res === "Srovnatelný FK profil") {
      this.setState({
        component: true
      });
    } else {
      this.setState({
        component: false
      });
    }
  };
  render() {
    return (
      <Layout zpet="/kvalita-uvod" vpred="/kvalita-bezpecnost">
        <div className="container-fluid">
          <div className="row alignCenter sekundarniMenu2">
            <span className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link to="/kvalita-uvod">
                <span>Biosimilarita</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/kvalita-bioekvivalence" className="aktivniMenuitem">
                <span>Bioekvivalence</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/kvalita-bezpecnost">
                <span>Bezpečnost</span>
              </Link>
            </div>
            <div className="col-lg-3 my-2">
              <Link to="/kvalita-ucinnost-a-imunogenicita">
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

              <div className="container">
                <div className="row">
                  <div className="col bionadpisy">
                    <h1 className="op1">
                      TERROSA<sup style={{ fontSize: "22px" }}>®</sup> má
                      prokázanou FK/FD <br /> ekvivalenci s originálním
                      teriparatidem<sup style={{ fontSize: "22px" }}>1</sup>
                    </h1>
                    <h2 className="op2">
                      Data z dvojitě zaslepené, randomizované, zkřížené
                      komparativní studie 54 zdravých žen
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid preklikavaciMenu ">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 op2">
                    <span
                      onClick={this.handleThis}
                      className={
                        this.state.component ? "aktivniMenuitem thisItem" : ""
                      }
                    >
                      Srovnatelný FK profil
                    </span>
                  </div>
                  <div className="col-lg-6 op3">
                    <span
                      className={
                        this.state.component ? "" : "aktivniMenuitem thisItem"
                      }
                      onClick={this.handleThis}
                    >
                      Srovnatelný FD profil
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          // Graf a kecy k tomu
        }
        {this.state.component ? <FKProfil /> : <SDProfil />}
      </Layout>
    );
  }
}
