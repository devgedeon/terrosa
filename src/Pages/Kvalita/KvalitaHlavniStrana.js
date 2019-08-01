import React, { Component } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
export default class KvalitaHlavniStrana extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("kvalitaMenuItem");
    this.menuItem.classList.add("bg-gradient-kvalita");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout vpred="/kvalita-bioekvivalence">
        <div className="container-fluid">
          <div className="row alignCenter sekundarniMenu2">
            <span className="pseudowidth">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="col-lg-2 my-2" id="nenaplnene">
              <Link className="aktivniMenuitem" to="/kvalita-uvod">
                <span>Biosimilarita</span>
              </Link>
            </div>
            <div className="col-lg-2 my-2">
              <Link to="/kvalita-bioekvivalence">
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
        <section className="bg-gradient-kvalita">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="container">
                  <div className="row">
                    <div className="col kvalita-nadpisy">
                      <h1 className="op1">
                        TERROSA<sup style={{ fontSize: "22px" }}>®</sup> je
                        teriparatid: biosimilar <br /> formou, biosimilar
                        chováním<sup style={{ fontSize: "22px" }}>1</sup>{" "}
                      </h1>
                      <h2 className="op2">
                        TERROSA je prokazatelně biosimilární s originálním
                        teriparatidem<sup style={{ fontSize: "17px" }}>1</sup>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid white-section">
            <div className="row">
              <div className="col">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-1">&nbsp;</div>
                    <div className="col-lg-5 temnaModra op3">
                      <p>
                        <strong>
                          Srovnatelná biologická aktivita (účinnost)
                        </strong>
                      </p>
                      <ul>
                        <li>
                          Srovnatelná vaznost k PTHR-1<sup>1</sup>
                          <ul>
                            <li>Přímé porovnání obou látek metodou ELISA</li>
                          </ul>
                        </li>
                        <li>
                          Srovnatelná signální aktivita <br /> (uvolnění cAMP
                          zprostředkované PTHR-1)<sup>1</sup>
                          <ul>
                            <li>
                              <strong>
                                2 buněčné biotesty (buněčná linie potkaního
                                osteosarkomu s použitím buněk UMR-1006; buněčná
                                linie lidského osteosarkomu s použitím buněk
                                Saos-2)
                              </strong>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-1">&nbsp;</div>
                    <div className="col-lg-5 temnaModra op4">
                      <p>
                        <strong>
                          Srovnatelné fyzikálně chemické parametry
                        </strong>
                      </p>
                      <p>
                        Podrobné charakterizační studie prokázaly, že se TERROSA
                        vyznačuje vysokým stupněm fyzikálně chemické podobnosti
                        s originálním teriparatidem:<sup>1</sup>
                      </p>
                      <ul>
                        <li>Molekulární hmotnost</li>
                        <li>Primární a sekundární struktura</li>
                        <li>Čistota</li>
                        <li>Stabilita</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="container" style={{ padding: "40px 0px" }}>
                  <div className="row">
                    <div className="col">
                      <div className="kvalita-btn">
                        <Link
                          to="/kvalita-souhrnne-udaje"
                          class="btn-gradient op5"
                        >
                          Souhrnné údaje o <br />
                          originálním léčivém přípravku
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="container" style={{ padding: "40px 0px" }}>
                <div className="row">
                  <div className="col">
                    <p style={{ fontSize: "10px", maxWidth: "70%" }}>
                      cAMP – cyklický 3´, 5´-adenosinmonofosfát; ELISA –
                      enzymová imunosorpční kvantitativní analýza (enzyme-linked
                      immunoabsorbent assay); PTHR-1 – receptor pro parathormon
                      1 (parathyroid hormone-receptor-1). <br />
                      1. European Medicines Agency (EMA). Assessment report.
                      2016. Available at:
                      www.ema.europa.eu/documents/assessment-report/TERROSA-epar-public-assesment-report__en.pdf
                      (last accessed: june 2019).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
