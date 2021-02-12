import React from 'react'
import logo from './CSlogo.png'
import ReactPlayer from 'react-player'
import noMoney from '../NoMoney.webp'
import depressed from '../depressed.webp'
import happy from '../happy.webp'

import {Link} from 'react-router-dom'

export default function HeroPage () {
    return (
        <div className='heroPageContainer' max-width = '80%'>
            <div className="frame" >
                <br/>
                <div className="logo" max-with ='60%'>
                    <img src = {logo} width='100%' />
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
                
               
                
                <div className="webPics">
                    <div className="noMoney" max-width="80%">
                        <img src ={noMoney}/>
                        <div>
                        <h1 >Never too Much. </h1>
                        <p >
                            Bankruptcies, negative accounts, repossessions, education loans and hard inquiries. We Attack low credit scores and challenge all inaccurate items on your credit.</p>
                        </div>
                    </div>
                <br/>
               
                    <div className="depressed">
                    <img src ={depressed}/>
                    <div>
                        <h1 >No Credit!</h1>
                        <p >At Credit Sharks we also work with people with no credit, we teach you how to start building credit and how to maintain a healthy credit score</p>
                    </div>                      
                        
                    </div>
                    <br/>
                   
                    <div className="happy">
                        <img src ={happy}/>
                        <div>
                        <h1 >Be Proud.</h1>
                        <p >We are excited to help you be proud about your successful credit achievements with us.</p>
                        </div>
                    </div>
                </div>
                <Link to={'/leadcapture'} style={{ textDecoration: 'none' }}>
                        <span class="freedom" 
                                align="center" 
                                
                            >
                            YES I WANT FINANCIAL FREEDOM 
                        </span> 
                        <br/>                                                       
                    </Link>
                
                   

                {/* <div className="frameVideo">
                
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
                </div> */}


            </div>
        </div>
    )
}