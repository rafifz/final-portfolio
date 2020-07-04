import React, { Component } from 'react'
import './Footer.scss'

export class Footer extends Component {
    render() {
        return (
            <div className="footer p-2">
                <div className="container text-center">
                    <p>follow me on social media</p>
                    <div className='socialmedia'>
                        <h4>
                        <a href="https://github.com/rafifz"><i className="fab fa-github"> &nbsp;</i></a>
                        <a href="https://www.instagram.com/ra.fif_/?hl=id"><i className="fab fa-instagram">&nbsp;&nbsp;</i></a>
                        <a href="https://web.facebook.com/profile.php?id=100007786815332"><i className="fab fa-facebook"> &nbsp;</i></a>
                        <a href="https://www.twitter.com"><i className="fab fa-twitter"> &nbsp;</i></a>
                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"> &nbsp;</i></a>
                        </h4>
                    </div>
                    <small>some data is not based on my real story (what they said about me)</small>
                </div>
            </div>
        )
    }
}

export default Footer
