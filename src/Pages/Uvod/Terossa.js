import React, { Component } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import BG from "../../Images/uvodBG.jpg";
import kolo from "../../Images/kolo.png";

export default class Terossa extends Component {
  componentDidMount() {
    this.menuItem = document
      .getElementById("terrosauvod")
      .classList.add("class", "border-bottom-half");
    this.menIcko = document.getElementById("uvodMenuItem");
    this.menIcko.classList.add("sedyBackgroundProUvod");
    this.menIcko.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout zpet="/uvod">
        <div className="container-fluid" style={pozadi}>
          <div className="row alignCenter sekundarniMenu">
            <div className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link to="/uvod">
                <span>
                  Nenaplněné
                  <br />
                  potřeby
                </span>
              </Link>
            </div>
            <div className="col-lg-2 my-2" id="terrosauvod">
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
                <div className="col op1" style={padding}>
                  <br />
                  <h1>
                    &nbsp;
                    <br />
                    <strong style={terrNadpis}>
                      TERROSA<sup style={{ fontSize: "37px" }}>&reg;</sup>
                    </strong>
                  </h1>
                  <p>&nbsp;</p>
                  <p>
                    TERROSA je biosimilar teriparatidu schváleného v EU v roce
                    2017 pro léčbu osteoporózy<sup>1,4</sup>
                  </p>

                  <ul>
                    <li>
                      Podává se jednou denně v podkožní injekci po dobu trvání
                      léčby až 24 měsíců.<sup>1</sup>
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <Link
                    className="tlacitko op2"
                    style={tlacitko}
                    to="/uvod-souhrnne-udaje"
                  >
                    Souhrnné údaje <br /> o originálním přípravku
                  </Link>

                  <Link
                    className="tlacitko op3"
                    style={tlacitko2}
                    to="/uvod-biosimilarni-leciva"
                  >
                    Více o biosimilárních léčivech
                  </Link>
                </div>
                <div className="col" style={padding2}>
                  <br />
                  <br />
                  <img
                    className="rotujObrazku"
                    style={{ maxWidth: "100%" }}
                    src={kolo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col">
              <p style={(padding, regerence)}>
                1. TERROSA<sup>&reg;</sup>. Summary of Product haracteristics.
                2017. Available at
                www.ema.europa.eu/en/documents/product-information_en.pdf (last
                accessed: June 2019). 2. Hernlund E et al. Arch Osteoporos.
                2013; 8:136. 3. Eriksen EF et al. Bone. 2014; 67:246-256. 4.
                European Medicines Agency (EMA). EPAR sumary for the public.
                2017. Available at:
                www.ema.europa.eu/en/medicines/human/EPAR/TERROSA (last
                accessed: June 2019).
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const tlacitko = {
  textAlign: "center",
  display: "block",
  padding: "5px 0px",
  color: "grey"
};
const tlacitko2 = {
  textAlign: "center",
  display: "block",
  padding: "15px 0px",
  color: "grey"
};
const terrNadpis = {
  fontSize: "4rem"
};

const padding = {
  marginLeft: "100px",
  color: "#23355f",
  borderRight: "1px solid"
};
const padding2 = {
  marginLeft: "100px",
  color: "#23355f"
};
const pozadi = {
  backgroundImage: `url(${BG})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  height: "93vh"
};
const regerence = {
  fontSize: "11px",
  marginLeft: "130px",
  maxWidth: "60vw"
};
