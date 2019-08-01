import React, { Component } from "react";
import sd from "../Images/sdikona.jpg";
import sd2 from "../Images/sdikona_black.jpg";
import pi from "../Images/spc.jpg";

import logo from "../Images/logo_hlavni.png";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import spc from "../Assets/spc.pdf";

class Layout extends Component {
  componentDidMount() {
    this.bezVpredSakra = this.props.vpred;
    this.bezVzadSakra = this.props.zpet;
    this.url = this.props.history.location.pathname;
    console.log(this.url);
    this.kontrolaOdkazu();
  }
  state = {
    uvodniKlik: 0,
    prejizdim: 0,
    Bio: false,
    Bio2: false
  };
  kontrolaOdkazu = e => {
    const url = this.url;
    if (url === "/kvalita-bioekvivalence") {
      this.setState({
        Bio: true
      });
    } else if (url === "/kvalita-ucinnost-a-imunogenicita") {
      this.setState({
        Bio2: true
      });
    } else {
      this.setState({
        Bio: false
      });
    }
  };
  klik = e => {
    this.setState({
      uvodniKlik: e.touches[0].clientX
    });
  };
  prejezd = e => {
    const state = this.state.uvodniKlik;
    let mover = e.touches[0].clientX;
    if (state + 25 < mover) {
      if (this.jdiZpet !== "") {
        this.props.history.push(this.bezVzadSakra);
      } else {
      }
    } else if (state - 25 > mover) {
      if (this.jdiVpred !== "") {
        this.props.history.push(this.bezVpredSakra);
      } else {
        console.log("dál už nemohu pokračovat");
      }
    } else {
      console.log("tohle nedokáži identifikovat");
    }
  };
  pdfShow = e => {
    window.open(spc);
  };
  render() {
    return (
      <div
        className="layoutPage"
        onTouchStart={this.klik}
        onTouchMove={this.prejezd}
      >
        <div className="menuCast">
          <div className="container-fluid">
            <div className="row hlavniMenu">
              <div className="col col-256">&nbsp;</div>
              <Link to="/uvod" className="col col-128" id="uvodMenuItem">
                <div>Úvod</div>
              </Link>
              <Link
                to="/kvalita-uvod"
                className="col col-128"
                id="kvalitaMenuItem"
              >
                <div>Kvalita</div>
              </Link>
              <Link
                to="/pouziti-pero"
                className="col col-128"
                id="kvalitaMenuPouziti"
              >
                <div>Použití</div>
              </Link>

              <Link to="/dostupnost" className="col col-128" id="dostupnost">
                <div>Dostupnost</div>
              </Link>
              <Link to="/souhrn" className="col col-128" id="Souhrn">
                <div>Souhrn</div>
              </Link>
              <span className="col col-128" id="spolecnostMenu">
                <div>&nbsp;</div>
              </span>
              <div className="col col-256">
                <Link
                  to={
                    this.state.Bio
                      ? "/kvalita-design-studie"
                      : this.state.Bio2
                      ? "/kvalita-design-studie-faze-3"
                      : this.url
                  }
                >
                  <img
                    src={this.state.Bio ? sd2 : this.state.Bio2 ? sd2 : sd}
                    alt="some img"
                    style={
                      this.state.Bio
                        ? displayBlock
                        : this.state.Bio2
                        ? displayBlock
                        : displayNone
                    }
                  />
                </Link>
                <img onClick={this.pdfShow} src={pi} alt="" />
              </div>
            </div>
            <div className="row">
              <hr />
            </div>
          </div>
        </div>
        <div className="zbytekCast">{this.props.children}</div>
        <Link to="/">
          <img style={logoHlavni} src={logo} alt="asdf" />
        </Link>
      </div>
    );
  }
}
export default withRouter(Layout);
const logoHlavni = {
  position: "absolute",
  display: "block",
  bottom: 0,
  right: 0,
  width: "21vw",
  padding: "20px"
};
const displayBlock = {
  display: "inline-block",
  marginRight: "20px"
};
const displayNone = {
  display: "none"
};
