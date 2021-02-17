
import React from 'react'
import man from './man.jpg'


export default function MembersOnly () {
    return (

        <div className="membersContainer">
            <div className="userHome"style={{display:'flex', flexDirection:'column', maxWidth:'30%'}}>
                <h1>Hello David</h1>
                
                <a href='https://www.identityiq.com'>Get Started Here First</a>
                <button>Orders</button>
                <button>Bookings</button>
                <img src={man}style={{width:'300%', border:'2px solid #00bea6'}}/>
               
            </div>
        </div>
    )
}