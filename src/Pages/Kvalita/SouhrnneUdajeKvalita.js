import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import tabulka from "../../Images/tabulka.JPG";
export default class SouhrnneUdajeKvalita extends Component {
  state = {
    big: false
  };

  componentDidMount() {
    this.menuItem = document.getElementById("kvalitaMenuItem");
    this.menuItem.classList.add("bg-gradient-kvalita");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    const Zoom = () => {
      this.setState({
        big: !this.state.big
      });
    };
    const Kill = () => {
      this.setState({ big: false });
    };
    return (
      <Layout>
        <div className="container-fluid">
          <img
            onClick={Kill}
            className={this.state.big ? "zoomIN2" : "zoomOUT"}
            src={tabulka}
            alt="afefe"
          />
          <div className="row">
            <div className="col bg-gradient-kvalita" style={leve}>
              <span style={{ color: "#fff" }}>
                Souhrnné údaje <br />o originálním léčivu
              </span>
            </div>
            <div
              className="col"
              style={{ textAlign: "right", marginTop: "15px" }}
            >
              <Link id="sakraTohlA" to="/kvalita-uvod" style={zavri}>
                x
              </Link>
            </div>
          </div>
          <div className="pokus">
            <div className="row">
              <h1 className="op1" style={nadpis}>
                Teriparatid se používá na celém světě již 17 let<sup>1,2</sup> a
                jenom v klinických studiích <br /> pomohl tisícům pacientů s
                tvorbou nové kosti a snížením rizika zlomenin.<sup>3–6</sup>
              </h1>
            </div>
            <div className="row">
              <div className="col" style={levySloupec}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12 leftGradientBlock op2">
                      <p>
                        <strong>
                          Prokázaný anabolický mechanismus účinku<sup>2,3</sup>
                        </strong>
                      </p>
                      <p>
                        - Teriparatid stimuluje tvorbu nové‘ trabekulární
                        (spongiózní) a vnější kortikální kosti včetně kyčle:
                        <sup>2,3</sup> zvyšuje objem a hustotu kostní tkáně a
                        zlepšuje architekturu a pevnost kosti.<sup>3</sup>
                      </p>
                    </div>
                    <div className="col-lg-12 leftGradientBlock op3">
                      <p>
                        <strong>
                          Výsledné ukazatele bezpečnosti: <br />
                          nejčastěji uváděné nežádoucí účinky3{" "}
                        </strong>{" "}
                      </p>
                      <p>
                        - Ve studiích originálního léčiva uvádělo 82,8 %
                        pacientů léčených teriparatidem nejméně 1 nežádoucí
                        účinek (proti 84,5 % u placeba).<sup>3</sup>
                        <br />- Vertigo, nauzea, bolesti končetin, závratě,
                        deprese a dušnost byly uváděny s četností o ≥ 1 % vyšší
                        než u placeba.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col op4" style={pravySloupec}>
                <p>
                  <strong>
                    Výsledné ukazatele účinnosti v hlavních klinických studiích
                    <sup>3</sup>
                  </strong>
                </p>
                <img
                  onClick={Zoom}
                  className="max-width-90"
                  src={tabulka}
                  alt="afefe"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>&nbsp;</p>

                <p style={{ fontSize: "10px", maxWidth: "75%" }}>
                  <strong> GIO – glukokortikoidy indukovaná osteoporóza</strong>{" "}
                  <br />
                  1. Eli Lilly. Forsteo<sup>&reg;</sup> Product Monograph. 2010.
                  Available at: http://pi.lilly.com/ca/forteo-ca-pm.pdf (last
                  accessed: June 2019). 2. Blick SK et al. Drugs. 2008;
                  68(18):2709-2737. 3. TERROSA<sup>&reg;</sup>. Summary of
                  Product Characteristics. 2017. Available at
                  www.ema.europa.eu/en/documents/product-information/terrosa-epar-product-information_en.pdf
                  (last accessed. June 2019). 4. Eriksen EF et al. Bone. 2014;
                  67:246-256. 6. Liu CL et al. Clin Ivest Med. 2017;
                  40:E146-E157. 6. Diez-Pérez A et al. Bone. 2019; 120: 1-8
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
const levySloupec = {
  maxWidth: "40%"
};
const pravySloupec = {};
