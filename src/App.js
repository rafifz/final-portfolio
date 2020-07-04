import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path ='/about' component={About}/>
            <Route path ='/portfolio' component={Portfolio} />
            <Route path ='/contact' component={Contact}/>
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
