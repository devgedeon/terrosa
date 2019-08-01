import React, { useState } from "react";
import Tabulka from "../../../Images/tabulka_nejaka2.jpg";
export default function SDProfil() {
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
        src={Tabulka}
        className={big ? "zoomIN" : "zoomOUT"}
        alt="sdf"
        onClick={Kill}
      />
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row">
              <p>&nbsp;</p>
            </div>
            <div className="row">
              <div className="col-lg-8">
                {" "}
                <img
                  src={Tabulka}
                  onClick={Zoom}
                  className="max-width"
                  alt="sdf"
                />
              </div>
              <div className="col-lg-4">
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>
                  FD parametry kalcia byly v podstatě stejné, přičemž poměry
                  geometrických průměrů (GMR – geometric mean ratios) jsou{" "}
                  <strong>99,93 %</strong> pro AUC a <strong>99,87 %</strong>{" "}
                  pro C<sub>max</sub>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p style={{ fontSize: "10px", maxWidth: "80%" }}>
                  Sérové koncentrace kalcia a plazmatické koncentrace
                  teriparatidu po jediném podkožním podání 20 μg/80 μl přípravku
                  TERROSA a originálního léčiva. *Vzorec pro korekci koncentrace
                  kalcia: změřená hodnota kalcia (mmol/l) + [40 – ALB (g/l) ×
                  0,02]. Údaje jsou uvedeny jako průměr ± SE. †Výchozí vzorky
                  pro vyšetření sérového kalcia byly odebírány v průběhu 2,5
                  hodiny před podáním jedné podkožní injekce TERROSA v dávce 20
                  μg/80 μl a referenčního teriparatidu. AUC – plocha pod
                  křivkou; C<sup>max</sup> – maximální koncentrace; FD –
                  farmakodynamika; FK – farmakokinetika; SE – standardní chyba
                  (standard error).
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
