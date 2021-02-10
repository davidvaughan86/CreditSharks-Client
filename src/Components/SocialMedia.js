import React from 'react'
import ReactDom from 'react-dom'
import {SocialIcon} from 'react-social-icons'
import logo from './CSlogo.png'

export default function SocialMedia () {
    return (
        <div className="socialMediaContainer">

        <div className="frame">
            <h1>social media</h1>
            <div className="instagram">
                <SocialIcon url="http://twitter.com/creditsharks420" />, 

            </div>
            <br/>
            <br/>
            <div className="facebook">
                <SocialIcon url="http://facebook.com/creditsharks420" />, 

            </div>
            <br/>
            <br/>
            <div className="twitter">
            <SocialIcon url="http://instagram.com/creditsharks420" />, 

            </div>
            <br/>
            <br/>
            <div className="socialmedialogo" max-width='70%'>
                <img src={logo} width='100%'/>

            </div>
            




        </div>



        </div>







    )





}