import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import image from "../../Images/tablka_nejaka3.jpg";
export default class Bezpecnost extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("kvalitaMenuItem");
    this.menuItem.classList.add("bg-gradient-kvalita");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout
        zpet="/kvalita-bioekvivalence"
        vpred="/kvalita-ucinnost-a-imunogenicita"
      >
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
              <Link to="/kvalita-bezpecnost" className="aktivniMenuitem">
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
        <div className="container-fluid pouzitiBGProKvalitu">
          <div className="row">
            <div className="col">
              {
                //main building
              }

              <div className="container ">
                <div className="row">
                  <div className="col bionadpisy">
                    <h1 className="op1">
                      TERROSA<sup style={{ fontSize: "24px" }}>®</sup> má
                      srovnatelný proﬁl bezpečnosti jako originální léčivo
                      <sup style={{ fontSize: "22px" }}>1</sup>
                    </h1>
                    <h2 className="op2">
                      TERROSA byla v 4denní, zkřížené, komparativní studii 54
                      zdravých žen v porovnání s originálním lékem dobře
                      tolerována.<sup style={{ fontSize: "14px" }}>1</sup>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col op3">
                    <img style={{ maxWidth: "78%" }} src={image} alt="lkasdf" />
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
              <p style={{ fontSize: "10px" }}>
                Nežádoucí účinky vyžadující neodkladnou léčbu se vyskytly u ≥ 10
                % všech účastnic. Ve studii nebyly zaznamenány žádné nové
                projevy ohrožující bezpečnost.<sup>1</sup>
                <br />
                Takács I et al. Osteoporosis International. 2018; 303):675-683
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
