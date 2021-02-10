import React from 'react'
import ReactDom from 'react-dom'
import {SocialIcon} from 'react-social-icons'
import logob from '../SocialMediapic.jpg'

export default function SocialMedia () {
    return (
        <div className="socialMediaContainer">

        <div className="frame">
        <br/>
        
        <div className="socialmedialogo" max-width='70%'>
                <img src={logob} width='100%' style={{border:'2px solid #00bea6', borderRadius:'40px'}}/>

            </div>
            <br/>
            <br/>
            <br/>
            <div style={{backGroundColor:'black', border:'5px solid #00bea6', borderRadius:'60px', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className="instagram">
                <SocialIcon url="http://twitter.com/creditsharks420" />

            </div>
            </div>
            
            <br/>
            <br/>
            <div style={{backGroundColor:'black', border:'5px solid #00bea6', borderRadius:'60px', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className="facebook">
                <SocialIcon url="http://facebook.com/creditsharks420" />

            </div>
            </div>
            <br/>
            <br/>
            <div style={{backGroundColor:'black', border:'5px solid #00bea6', borderRadius:'60px', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className="twitter">
            <SocialIcon url="http://instagram.com/creditsharks420" />

            </div>
            </div>
            
            <br/>
            <br/>
            
            




        </div>



        </div>







    )





}