import React, { Component } from 'react'
import './Portfolio.scss'

export class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="quote">
                    <h1 className="font-weight-bold">Find a job you enjoy doing, and you will never have to work a day in your life.”</h1>
                    <p>― Mark Twain</p>
                </div>
                <div className="container-fluid project-container">
                    <h1>{''}</h1>
                    <div className="project">
                        <div>
                            <h5 >eStore</h5>    
                        </div>                        
                        <div className='d-flex align-items-center w'>
                            <h1>E-commerce build with <br/> reactJs</h1>
                        </div>
                        <div className='d-flex align-items-end preview'>
                            <a href="https://store-project.netlify.com/"><h5>Preview</h5></a>
                        </div>                       
                    </div>

                    <div className="project">
                        <div>
                            <h5 >mymoviedb</h5>    
                        </div>                        
                        <div className='d-flex align-items-center w'>
                            <h1>Movie database build with <br/> omdB API</h1>
                        </div>
                        <div className='d-flex align-items-end preview'>
                            <a href="https://mymoviedb.netlify.com/"><h5>Preview</h5></a>
                        </div>  
                    </div>

                    <div className="project">
                        <div>
                            <h5 >well weather</h5>    
                        </div>                        
                        <div className='d-flex align-items-center w'>
                            <h1>Weather app build with <br/> openWeather API</h1>
                        </div>
                        <div className='d-flex align-items-end preview'>
                            <a href="https://well-weather.netlify.com/"><h5>Preview</h5></a>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
