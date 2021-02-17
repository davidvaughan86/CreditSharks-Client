
import React from 'react'
import man from './man.jpg'
import {Link} from 'react-router-dom'
import UserStore from './UserStore'

export default function MembersOnly () {
    
    
    const handleClick  = () => {
        <Link href = "www.identityIq.com"></Link>
    }
    return (

        <div className="membersContainer">
            <div>
            <h1>Hello {UserStore.username}</h1>
                <span>Import Your Credit Score from Indentity IQ</span>
            </div>
            <div className="userHome"style={{display:'flex', flexDirection:'column', maxWidth:'30%'}}>
                
                <button onClick ={() => {
                    handleClick()
                }}
                className="startHere">Start Here</button>
                <br/>
                <div style={{display:'flex', flexDirection:'row', margin:'5px'}}>
                <button className="orders">Orders</button>
                <button className="booking">Bookings</button>
                </div>
                <br/>
                <img src={man}style={{width:'300%', border:'2px solid #00bea6', borderRadius:'30px'}}/>
               
            </div>
        </div>
    )
}