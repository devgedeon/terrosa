import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

export default class BiosimilarniLeciva extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("uvodMenuItem");
    this.menuItem.classList.add("sedyBackgroundProUvod");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col sedyBackgroundProUvod" style={leve}>
              <span>Více o biosimilárních léčivech</span>
            </div>
            <div
              className="col"
              style={{ textAlign: "right", marginTop: "15px" }}
            >
              <Link id="sakraTohlA" to="/uvod-terrosa" style={zavri}>
                x
              </Link>
            </div>
          </div>
          <div className="pokus">
            <div className="row">
              <h1 className="op1" style={nadpis}>
                Biosimilární léčiva musejí splňovat stejné vysoké standardy
                farmaceutické kvality, bezpečnosti a účinnosti jako všechna
                biologická léčiva schválená v EU<sup>1</sup>
              </h1>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <p className="leftGradientBlock op2">
                  <strong>
                    Biosimilární léčiva jsou založena na zjištěných vědeckých
                    důkazech týkajících se biologických léčiv<sup>1</sup>
                  </strong>{" "}
                  <br /> - Biosimilar vykazuje biologickou podobnost s
                  originálním biologickým léčivem, a to s ohledem na zkušenosti
                  s bezpečností a účinností získané s existujícím biologikem
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <p className="leftGradientBlock op3">
                  <strong>
                    Aby mohla být biosimilární léčiva schválena v EU, musejí být
                    podrobena spolehlivým studiím komparability a splňovat
                    přísné regulační požadavky<sup>1</sup>
                  </strong>{" "}
                  <br /> - Komparativní studie kvality (analytické a funkční
                  parametry) <br /> - Komparativní klinické studie
                  (farmakokinetická/farmakodynamická [FK/FD] odpověď,
                  účinnost/bezpečnost včetně imunogenicity)
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <p className="leftGradientBlock op4">
                  <strong>
                    Biosimilární léčiva jsou v EU v klinické praxi běžně
                    používány již více než 10 let, přičemž se vyznačují
                    srovnatelným proﬁ lem bezpečnosti a účinnosti ve všech
                    schválených indikacích jako ostatní biologická léčiva
                    <sup>1</sup>
                  </strong>
                  <br />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <p style={{ fontSize: "10px", maxWidth: "75%" }}>
                  1. European Medicines Agency (EMA), Biosimilar in the EU:
                  information guide for healthcare professionals. 2017.
                  Available at:
                  www.ema.europa.e/en/documents/leaflet/biosimilars-eu-information-guide-healthcare-proffesionals_en.pdf
                  (last accessed: June 2019).
                </p>
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
const leve = {
  textAlign: "center",
  maxWidth: "25%",
  borderBottomRightRadius: "12px"
};
const nadpis = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  padding: "20px",
  color: "#14335a"
};
