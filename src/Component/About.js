import React, { Component } from "react";
import "./About.scss";

export class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="container-fluid bio">
          <p className="mb-0">Junior Front End Web Developer</p>
          <h1 className="font-weight-bold">MUHAMMAD RAFIF</h1>
          <div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <th><p>Birth Date :</p></th>
                    <td><p> 13, January, 2001</p></td>
                  </tr>
                  <tr>
                    <th><p>Country :</p></th>
                    <td><p>Indonesia</p></td>
                  </tr>
                  <tr>
                    <th><p>City :</p></th>
                    <td><p>Salatiga</p></td>
                  </tr>
                  <tr>
                    <th><p>Languages : &nbsp;&nbsp;&nbsp;</p></th>
                    <td><p>English, Bahasa</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row rounded p-4 my-4">
              <div className="col-lg-4 d-flex justify-content-center mb-3">
                <img
                  src={require("../Images/rafif.png")}
                  alt=""
                  className="rounded-circle"
                />
              </div>
              <div className="col-lg-8 d-flex align-items-center">
                <p>
                  Hi my name is Rafif, I am a 19 years old teenager who has
                  interested in web development, and also I am an innovative,
                  highly motivated, organized and detail oriented person. I
                  believe that high quality and customer satisfaction is of most
                  importance. I'm interested in working with both companies and
                  individuals. Feel free to drop a message for discussing your
                  needs and objectives
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="skill">
          <div className="container-fluid">
            <h1 className="font-weight-bold">Some Of My Skills</h1>

            <div className="row skillCard">
              <div className="col-md-6 px-4 py-2">
                <div className="row rounded">
                  <div className="col-2">
                    <h1>
                      <i className="fab fa-html5"></i>
                    </h1>
                  </div>
                  <div className="col-10">
                    <h5>Html 5</h5>
                    <p>
                      HTML5 is a markup language used for structuring and
                      presenting content on the World Wide Web.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-4 py-2">
                <div className="row rounded">
                  <div className="col-2">
                    <h1>
                      <i className="fab fa-react"></i>
                    </h1>
                  </div>
                  <div className="col-10">
                    <h5>ReactJs</h5>
                    <p>
                      React (also known as React.js or ReactJS) is a JavaScript
                      library for building user interfaces. It is maintained by
                      Facebook and a community of individual developers and
                      companies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-4 py-2">
                <div className="row rounded">
                  <div className="col-2">
                    <h1>
                      <i className="fab fa-css3-alt"></i>
                    </h1>
                  </div>
                  <div className="col-10">
                    <h5>Css 3</h5>
                    <p>
                      Cascading Style Sheets (CSS) is a style sheet language
                      used for describing the presentation of a document written
                      in a markup language like HTML.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 px-4 py-2">
                <div className="row rounded">
                  <div className="col-2">
                    <h1>
                      <i className="fab fa-js-square"></i>
                    </h1>
                  </div>
                  <div className="col-10">
                    <h5>JavaScript</h5>
                    <p>
                      JS, is a programming language that conforms to the
                      ECMAScript specification. JavaScript is high-level, often
                      just-in-time compiled, and multi-paradigm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="findme">
          <div className="container-fluid p-5">
            <h1 className="font-weight-bold">Where You Can Find Me</h1>
            <div className="row site">
              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <a href="https://www.fiverr.com/rafifdev">
                      <img
                        src={require("../Images/fiver.png")}
                        alt=""
                        width="100%"
                        className="rounded"
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <h4>Fiverr</h4>
                    <p>
                      Fiverr is an Israeli online marketplace for freelance
                      services. The company provides a platform for freelancers
                      to offer services to customers worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <a href="https://www.freelancer.com/u/RafifDev">
                      <img
                        src={require("../Images/freelancer.png")}
                        alt=""
                        width="100%"
                        className="rounded"
                      />
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <h4>Freelancer.com</h4>
                    <p>
                      Freelancer is an Australian crowdsourcing marketplace
                      website, which allows potential employers to post jobs
                      that freelancers can then bid to complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
