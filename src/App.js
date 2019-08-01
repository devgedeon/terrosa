import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Uvod
import Uvod from "./Pages/Uvod/Uvod";
import Terrosa from "./Pages/Uvod/Terossa";
import SouhrnneUdaje from "./Pages/Uvod/SouhrnneUdaje";
import BiosimilarniLeciva from "./Pages/Uvod/BiosimilarniLeciva";

//Kvalita
import KvalitaHlavniStrana from "./Pages/Kvalita/KvalitaHlavniStrana";
import SouhrnneUdajeKvalita from "./Pages/Kvalita/SouhrnneUdajeKvalita";
import Bioekvivalence from "./Pages/Kvalita/Bioekvivalence";
import Bezpecnost from "./Pages/Kvalita/Bezpecnost";
import UcinnostAImunogenicita from "./Pages/Kvalita/UcinnostAImunogenicita";
import DesignStudie from "./Pages/Kvalita/DesignStudie";
import DesignStudieFaze3 from "./Pages/Kvalita/DesignStudieFaze3";

//pouziti
import Pero from "./Pages/Pouziti/Pero";
import Pokyny from "./Pages/Pouziti/Pokyny";
import PodporaPacientu from "./Pages/Pouziti/PodporaPacientu";

//Spolecnost
import SpolecnostGedeonRichter from "./Pages/Spolecnost/SpolecnostGedegonRichter";
import SpolecnostPodporaHCP from "./Pages/Spolecnost/PodporaHCP";

//Dostupnost
import PrvniStranka from "./Pages/Dostupnost/PrvniStranka";
import CenaUhrada from "./Pages/Dostupnost/CenaUhrada";

//Souhrn
import Souhrn from "./Pages/Souhrn/Souhrn";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />

          <Route exact path="/uvod" component={Uvod} />
          <Route exact path="/uvod-terrosa" component={Terrosa} />
          <Route exact path="/uvod-souhrnne-udaje" component={SouhrnneUdaje} />
          <Route
            exact
            path="/uvod-biosimilarni-leciva"
            component={BiosimilarniLeciva}
          />

          <Route exact path="/kvalita-uvod" component={KvalitaHlavniStrana} />
          <Route
            exact
            path="/kvalita-souhrnne-udaje"
            component={SouhrnneUdajeKvalita}
          />

          <Route
            exact
            path="/kvalita-bioekvivalence"
            component={Bioekvivalence}
          />
          <Route exact path="/kvalita-bezpecnost" component={Bezpecnost} />
          <Route
            exact
            path="/kvalita-ucinnost-a-imunogenicita"
            component={UcinnostAImunogenicita}
          />
          <Route exact path="/kvalita-design-studie" component={DesignStudie} />
          <Route
            exact
            path="/kvalita-design-studie-faze-3"
            component={DesignStudieFaze3}
          />

          <Route exact path="/pouziti-pero" component={Pero} />
          <Route exact path="/pouziti-pokyny" component={Pokyny} />
          <Route
            exact
            path="/pouziti-podpora-pacientu"
            component={PodporaPacientu}
          />
          <Route
            exact
            path="/spolecnost-gedeon-richter"
            component={SpolecnostGedeonRichter}
          />
          <Route
            exact
            path="/spolecnost-podpora-hcp"
            component={SpolecnostPodporaHCP}
          />
          <Route exact path="/dostupnost" component={PrvniStranka} />
          <Route exact path="/dostupnost-cena-uhrada" component={CenaUhrada} />
          <Route exact path="/souhrn" component={Souhrn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
