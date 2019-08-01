import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import image from "../../Images/pero.png";
export default class Pero extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("kvalitaMenuPouziti");
    this.menuItem.classList.add("bg-gradient-pouziti");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout vpred="/pouziti-pokyny">
        <div className="container-fluid">
          <div className="row alignCenter sekundarniMenu2">
            <span className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link to="/pouziti-pero" className="aktivniMenuitemPouziti">
                <span>Pero</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/pouziti-pokyny">
                <span>Pokyny</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid tenpodelanyroh2">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col pouzitinadpisy">
                    <h1 className="op1">
                      Injekční pero TERROSA
                      <sup style={{ fontSize: "25px" }}>®</sup>
                    </h1>
                    <h2 className="op2">
                      TERROSA se podává injekčním perem, jež je použitelné{" "}
                      <br /> po celou dobu léčby.<sup>1</sup>
                    </h2>
                  </div>
                </div>
                <div className="row op3">
                  <div className="col">
                    <img
                      id="floatImage"
                      style={{
                        maxWidth: "45%",
                        marginLeft: "200px",
                        marginTop: "65px"
                      }}
                      src={image}
                      alt="pero"
                    />
                    <p id="prvniText" className="absolutniPozice temnaModra">
                      <strong>Pohodlné pro pacienta:</strong> otáčivým pohybem
                      se <br /> neklouzavým otočným uzávěrem nastaví dávka
                      <sup>1</sup>
                    </p>
                    <p id="druhyText" className="absolutniPozice temnaModra">
                      <strong>
                        Koncept intuitivní a osvědčené manipulace:
                        <br />
                      </strong>
                      inovativní automatické podávání aktivované <br />{" "}
                      tlačítkem<sup>1</sup>
                    </p>
                    <p id="tretiText" className="absolutniPozice temnaModra">
                      <strong>
                        {" "}
                        Navrženo a vyrobeno <br /> ve Švýcarsku
                      </strong>
                    </p>
                    <p id="ctvrtyText" className="absolutniPozice temnaModra">
                      <strong> Ekologicky udržitelné:</strong> každé pero vydrží
                      2 roky <br /> a každá náplň 28 dní<sup>1</sup>
                    </p>
                    <p id="patyText" className="absolutniPozice temnaModra">
                      <strong>Dodává uživateli jistotu:</strong> sluchová a
                      hmatová zpětná vazba
                      <br />
                      během přípravy a při aplikaci<sup>1</sup>
                    </p>
                    <p id="sestyText" className="absolutniPozice temnaModra">
                      <strong>Jednoduché:</strong> jedním otočením dojde k
                      rozpojení, což umožňuje <br /> rychlou výměnu náplně
                      <sup>1</sup>
                    </p>
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
                1. TERROSA<sup>&reg;</sup> Pen. Patient Instruction Leaflet
                (PIL). 2019. Labellig number: K-22234-1.9.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
