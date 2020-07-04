import React, { Component } from 'react'
import './Contact.scss'

export class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <h1 className='font-weight-bold'>Every act of communication is a miracle of translation .</h1>
                    <p>― Ken Liu</p>
                    <h4>{''}</h4>
                    <p>you can contact me at <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">@rafifz666@gmail.com</a></p>
                    <p>feel free to ask anything <span role="img" aria-label="sheep">(っ◔◡◔)っ ♥️</span></p>
                </div>
            </div>
        )
    }
}

export default Contact
