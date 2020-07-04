import React, { Component } from "react";
import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="quote d-flex flex-column">
          <h1 className="text-left font-weight-bold">
            The ability to observe without evaluating is the highest form of
            intelligence .
          </h1>
          <p>― J. Krishnamurti</p>
          <section className="scroll">
            <a href="#preview">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </section>
        </div>

        {/* paralax */}

        <div className="container-fluid parallax"></div>

        {/* preview work */}

        <div className="container-fluid preview p-4" id="preview">
          <div className="experience">
            <h1 className="font-weight-bold">Work Experience</h1>
            <h4>(0 year and 6 months)</h4>
            <hr />
          </div>

          <div className="work-preview">
            <div className="row">
              <div className="col-md-8 col-sm-6">
                <div className="row">
                  <div className="col-md-6">
                    <h5>
                      <a href="/portfolio">React-store</a>
                    </h5>
                    <small>February, 2020</small>
                    <p className="mb-4">Front end Developer</p>
                  </div>
                  <div className="col-md-6">
                    <p>Responsibility:</p>
                    <p> – frontend development</p>
                    <br />

                    <p>Technology Stacks:</p>
                    <p> – ReactJs, Scss, Bootsrap, Font awesome</p>
                    <p> – Html, Css, JavaScript</p>
                    <p> – npm</p>
                    <br />

                    <p>Project / Version Management System:</p>
                    <p> – Github</p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <p>My duties included:</p>
                <p> – build all from the scracth</p>
                <p> – routing</p>
                <p> – state management</p>
                <p> – development of web application components</p>
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-md-8 col-sm-6">
                <div className="row">
                  <div className="col-md-6">
                    <h5>
                      <a href="/portfolio">My movie db</a>
                    </h5>
                    <small>March, 2020</small>
                    <p className="mb-4">Front end Developer</p>
                  </div>
                  <div className="col-md-6">
                    <p>Responsibility:</p>
                    <p> – frontend development</p>
                    <br />

                    <p>Technology Stacks:</p>
                    <p> – ReactJs, Scss, Bootsrap, Font awesome</p>
                    <p> – Html, Css, JavaScript</p>
                    <p> – npm</p>
                    <br />

                    <p>Project / Version Management System:</p>
                    <p> – Github</p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <p>My duties included:</p>
                <p> – build all from the scracth</p>
                <p> – sending requests to the server</p>
                <p> – processing responses</p>
                <p> – state management</p>
                <p> – data visualization</p>
                <p> – development of web application components</p>
              </div>
            </div>
          </div>
        </div>
        {/* what they said */}
        <div className="container-fluid feedback ">
          <div style={{ position: "absolute" }}>
            <h1 className="font-weight-bold">What they said about me</h1>
          </div>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide d-flex align-items-center"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="5000">
                <div className="carousel-caption">
                  <img
                    src={require("../Images/ivan.jpg")}
                    alt=".."
                    className="rounded-circle"
                    
                  />
                  <p className="mb-n1">Ivan Maskilov</p>
                  <small>ANATOLY Tech, CEO</small>
                  <p className="mt-2">
                    "worked with Rafif the past 4 years. Rafif is a brilliant
                    developer with very large skills in frontend. i'll
                    definitely work with him in the future."
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-interval="5000">
                <div className="carousel-caption">
                  <img
                    src={require("../Images/dimitry.jpg")}
                    alt=".."
                    className="rounded-circle"
                    
                  />
                  <p className="mb-n1">Dimitry Stolenov</p>
                  <small>STOLEN corp, CEO</small>
                  <p className="mt-2">
                    "Rafif is a top notch web designer, he is creative, punctual
                    and communicates extremely well. I can only give him the
                    highest recommendation to any future employers."
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-interval="5000">
                <div className="carousel-caption">
                  <img
                    src={require("../Images/boris.jpg")}
                    alt=".."
                    className="rounded-circle"
                    
                  />
                  <p className="mb-n1">Boris Retardinov</p>
                  <small>RETARD.inc, founder</small>
                  <p className="mt-2">
                    "Рафиф был отличным разработчиком. Может взять немного
                    информации и бежать с ней. Он всегда выполнял задачи с
                    опережением графика."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
