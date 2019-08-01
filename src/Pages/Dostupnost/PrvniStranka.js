import React, { Component } from "react";
import Layout from "../../Components/Layout";
import group from "../../Images/group.png";
import { Link } from "react-router-dom";
import hands from "../../Images/hand_florist.png";
import hands2 from "../../Images/hand_florist2.png";
import florist from "../../Images/1.png";

export default class PrvniStranka extends Component {
  state = {
    terrosaPrice:
      localStorage.getItem("terossaCena") === null
        ? "153.766,08"
        : localStorage.getItem("terossaCena"),
    originalniPrice:
      localStorage.getItem("originalniCena") === null
        ? "212.332,32"
        : localStorage.getItem("originalniCena")
  };
  componentDidMount() {
    this.menuItem = document.getElementById("dostupnost");
    this.menuItem.classList.add("bg-gradient-dostupnost");
    this.menuItem.children[0].style.color = "#fff";
    this.tPrice = document.getElementById("tPrice");
    this.origPrice = document.getElementById("origPrice");
  }
  render() {
    return (
      <Layout>
        <img class="flImage" src={hands} alt="ahdf" />
        <img class="flImage2" src={hands2} alt="ahdf" />
        <img class="florist" src={florist} alt="ahdf" />

        <div className="container-fluid bg-gradient-dostupnost">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h1
                      className="op1"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        padding: "30px 0px 15px 0px"
                      }}
                    >
                      TERROSA<sup style={{ fontSize: "25px" }}>®</sup>: lepší
                      dostupnost anabolické <br /> terapie pro pacienty, kteří
                      ji potřebují<sup style={{ fontSize: "23px" }}>1–3</sup>{" "}
                    </h1>
                    <h2
                      className="op2"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        padding: "0px 0px 15px 0px",
                        fontSize: "24px"
                      }}
                    >
                      TERROSA umožňuje pacientům přístup k dříve nedostupné
                      léčbě<sup>*2,3</sup>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h3
                      className="op3"
                      style={{
                        fontWeight: "bold",
                        fontSize: "22px",
                        padding: "20px 0px",
                        color: "#3e79be"
                      }}
                    >
                      Co když místo každých tří pacientů léčených teriparatidem
                      teď mohou být čtyři?
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 op4">
                    <img src={group} alt="Meh" style={{ maxWidth: "100%" }} />
                    <p className="temnaModra">
                      <strong>
                        Originální teriparatid<sup>3</sup> <br />
                        <span id="origPrice">212.332,32</span>
                        Kč
                      </strong>
                      <br />
                      Cena 24měsíční léčby jednoho pacienta
                    </p>
                  </div>
                  <div className="col-lg-5 op5">
                    <img src={group} alt="Meh" style={{ maxWidth: "100%" }} />
                    <p className="svetlaZelena">
                      <strong>
                        TERROSA<sup>3</sup> <br />{" "}
                        <span id="tPrice">153.766,08</span>
                        Kč
                      </strong>{" "}
                      <br />
                      Cena 24měsíční léčby jednoho pacienta
                    </p>
                  </div>
                  <div className="div-lg-2 op6">
                    <Link
                      to="/dostupnost-cena-uhrada"
                      className="bg-gradient-dostupnost cenaUhrada"
                    >
                      Cena/úhrada
                    </Link>
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
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p style={{ fontSize: "12px", maxWidth: "80%" }}>
                *Vzhledem k tržní ceně přípravku TERROSA a originálního léku (v
                českých korunách (KČ)) poskytuje TERROSA proti originálnímu léku
                během 24měsíční léčby úsporu 27,58 %, což z hlediska nákladů
                umožňuje léčit o 42 % více pacientů. <br />
                1. TERROSA<sup>&reg;</sup>. Summary of Product Characteristics.
                2017. Available at
                www.ema.europa.eu/en/documents/product-information/terrosa-epar-product-information_en.pdf
                (last accessed: June 2019). 2. Kang H-N, Knezevice I. Bull World
                Health organ. 2018; 96(4): 281-285. 3.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
