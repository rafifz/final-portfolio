import React, { Component } from "react";
import "./Navbar.scss";
import {  NavLink } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPopUP: false
    };
  }
  x = window.matchMedia("(max-width:600px)");
  open = () => {
    if (this.x.matches) {
      document.getElementById("popup").style.width = "100vw";
      this.setState({ itemPopUP: true });
    } else {
      document.getElementById("popup").style.width = "40vw";
      this.setState({ itemPopUP: true });
    }
  };
  close = () => {
    document.getElementById("popup").style.width = "0vw";
    this.setState({ itemPopUP: false });
  };
  render() {
    return (
      <div className="navbar-container container-fluid">
        <div className="row align-items-center p-3">
          <div className="col-9">
            <p>
              i'm <b>Rafif Muhammad</b>
            </p>
            <p className="mt-n3">front end developer and student</p>
          </div>

          <div
            className={
              this.state.itemPopUP
                ? "d-none"
                : "col-3 d-flex justify-content-end openButton"
            }
          >
            <h1 onClick={this.open}>
              <i className="fas fa-grip-lines"></i>
            </h1>
          </div>
        </div>

        {/* PopUp */}
        <div className="container-fluid Popup d-flex flex-row-reverse">
          <div
            className={this.state.itemPopUP ? "d-block popup p-4" : "popup"}
            id="popup"
          >
            <div className="closeButton container d-flex justify-content-end">
              <h1 onClick={this.close}>
                X
              </h1>
            </div>

            <div className="text-left d-flex h-100 align-items-center mt-n5">
              <ul className="list-group p-4">
                <li>
                  <NavLink to="/" onClick={this.close} exact activeStyle={{color:'yellow'}}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={this.close} activeStyle={{color:'yellow'}}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" onClick={this.close} activeStyle={{color:'yellow'}}>
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={this.close} activeStyle={{color:'yellow'}}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
