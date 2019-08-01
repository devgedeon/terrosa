import React, { Component } from "react";
import Layout from "../../Components/Layout";

export default class Souhrn extends Component {
  componentDidMount() {
    this.menuItem = document.getElementById("Souhrn");
    this.menuItem.classList.add("sedyBackgroundProUvod");
    this.menuItem.children[0].style.color = "#fff";
  }
  render() {
    return (
      <Layout>
        <div className="container-fluid temnaModra final-bg">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <div className="col">
                    &nbsp;
                    <p className="op1">
                      Anabolická léčba pacientů s osteoporózou<sup>1</sup>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h1 style={{ fontSize: "28px" }} className="op2">
                      <strong>
                        TERROSA<sup style={{ fontSize: "18px" }}>&reg;</sup>
                      </strong>{" "}
                      Pojďme společně stavět
                    </h1>
                  </div>
                </div>
                <div className="row" style={{ maxWidth: "70%" }}>
                  <div className="col leftGradientBlockKvalita2 op3">
                    <p>
                      <strong>Kvalita</strong>
                    </p>
                    <p>
                      Povolené biosimilar<sup>1–3</sup> se stejným anabolickým
                      účinkem jako originální přípravek.<sup>4</sup> Klinické
                      studie dokládají profil účinnosti a bezpečnosti
                      srovnatelný s originálním přípravkem4,5 s podobně nízkým
                      rizikem imunogenicity.<sup>5</sup>
                    </p>
                  </div>
                </div>
                <div className="row" style={{ maxWidth: "70%" }}>
                  <div className="col leftGradientBlockPouziti op4">
                    <p>
                      <strong>Použití</strong>
                    </p>
                    <p>
                      Podává se jednoduchým, opakovaně použitelným perem6 s
                      plnou pacientskou podporou.
                    </p>
                  </div>
                </div>
                <div className="row" style={{ maxWidth: "70%" }}>
                  <div className="col leftGradientBlockSpolecnost op5">
                    <p>
                      <strong>Společnost</strong>
                    </p>
                    <p>
                      Léčivý přípravek je navržen, vyráběn a dodáván společností
                      Gedeon Richter, <br /> dodavatelem s celosvětovým dosahem.{" "}
                      <br />
                    </p>
                  </div>
                </div>
                <div className="row" style={{ maxWidth: "70%" }}>
                  <div className="col leftGradientBlockDostupnost op6">
                    <p>
                      <strong>Dostupnost</strong>
                    </p>
                    <p>
                      Pacienti, kteří potřebují anabolickou léčbu, ji mohou díky{" "}
                      <br /> tomuto přípravku dostat.<sup>1,7</sup>
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
            </div>
          </div>
          <div className="row">
            <div className="col temnaModra">
              <p style={{ fontSize: "10px", maxWidth: "80%" }}>
                HCP, healthcare professional. <br />
                1. TERROSA<sup>&reg;</sup>. Summary of Product Characteristics.
                2017. Available at
                www.ema.europa.eu/en/documents/product-information/terrosa-epar-product-information_en.pdf
                (last accessed: June 2019). 2. European Medicines Agency (EMA).
                Assessment report. 2016. Available at:
                www.ema.europa.eu/documents/assessment-report/TERROSA-epar-public-assessment-report_en.pdf
                (last accessed: June 2019) 3. European Medicines Agency (EMA).
                EPAR summary for the public. 2017. Available at:
                www.ema.europa.eu./en/medicines/human/EPAR/TERROA last accessed:
                June 2019). 4. Takács I et al. Osteoporosis International. 2018;
                30(3); 675-683. 5. Hagino H et al. Oral presentation at the
                World Congress on Osteoporosis, Osteoarthritis and
                Musculoskeletal Diseases (WCO-IOF-ESCEO). Paris, France. April
                4-7, 2019. 6. TERROSA<sup>&reg;</sup> Pen. Patient Instruction
                Leaflet (PIL). 2019. Labelling number: K-22234-1.9.7.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
