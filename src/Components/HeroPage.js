import React from 'react'
import logo from './CSlogo.png'
import ReactPlayer from 'react-player'

import {Link} from 'react-router-dom'

export default function HeroPage () {
    return (
        <div className='heroPageContainer' max-width = '80%'>
            <div className="frame">
                <br/>
                <div className="logo" max-with ='60%'>
                    <img src = {logo} width='108%' />
                    <br/>
                    <Link to={'/leadcapture'} style={{ textDecoration: 'none' }}>
                        <span class="freedom" 
                                align="center" 
                                
                            >
                            YES I WANT FINANCIAL FREEDOM 
                        </span> 
                        <br/>                                                       
                    </Link>
                </div>
               
                   

                <div className="frameVideo">
                
                <ReactPlayer
                        url = 'https://www.youtube.com/watch?v=54ynZ6p8nR4&feature=youtu.be' 
                        className="react-player"
                        play={"true"}
                        width="102%"
                        height="100%"
                        controls={false}
                        mute={true}
                        >
                        
                </ReactPlayer>
                </div>


            </div>
        </div>
    )
}