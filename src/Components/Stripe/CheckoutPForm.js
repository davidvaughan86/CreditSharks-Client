import React from 'react'




export default function PersonalInfo () {
    return (

        <div className="PIContainer">
        <div className="frame">
            <form className="form">
                <lable>
                    <input className="personal" type= "text" name="name" placeholder="First Name"/>                                   
                </lable>
                <lable>
                    <input  className="personal" type= "text" name="name" placeholder="Last Name"/>                                   
                </lable>
                <lable>
                    <input className="personal" type= "text" name="name" placeholder="Username(email)"/>                                   
                </lable>
                <lable>
                    <input  className="personal" type= "password" name="name" placeholder="Password"/>                                   
                </lable>
                
            </form>
        </div>
        </div>
    )
}