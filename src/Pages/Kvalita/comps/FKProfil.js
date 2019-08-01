import React, { useState } from "react";
import Tabulka from "../../../Images/tabulka_nejaka.jpg";
export default function FKProfil() {
  const [big, useBig] = useState(false);
  const Zoom = () => {
    useBig(!big);
    console.log(big);
  };
  const Kill = () => {
    useBig(false);
  };
  return (
    <div className="container-fluid pouzitiBGProKvalitu">
      <img
        onClick={Kill}
        src={Tabulka}
        alt="sdf"
        className={big ? "zoomIN" : "zoomOUT"}
      />
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row">
              <p>&nbsp;</p>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <img
                  onClick={Zoom}
                  src={Tabulka}
                  className="max-width"
                  alt="sdf"
                />
              </div>
              <div className="col-lg-4">
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  FK parametry byly srovnatelné, přičemž poměry geometrických
                  průměrů (GMR – geometric mean ratios) jsou
                  <strong> 91,66 %</strong> pro AUC <sub>0-tlast</sub> a{" "}
                  <strong>92,25 %</strong> pro C<sub>max</sub>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p style={{ fontSize: "10px", maxWidth: "80%" }}>
                  <br />
                  Farmakokinetické proﬁly po jediném podkožním podání 20 μg/80
                  μl přípravku TERROSA a originálního léčiva. AUC
                  <sub>0-tlast</sub> – plocha pod křivkou od času 0 k poslednímu
                  měření; C<sub>max</sub> – maximální koncentrace; FD –
                  farmakodynamika; FK – farmakokinetika; SC – podkožní
                  (subcutaneous). <br />
                  1. Takács I et. al. Osteoporosis International . 2018; 30(3);
                  675-683
                </p>
              </div>
            </div>
          </div>
          {
            //main ends
          }
        </div>
      </div>
    </div>
  );
}
