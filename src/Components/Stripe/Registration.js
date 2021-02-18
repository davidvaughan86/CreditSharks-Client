import React from 'react'
import {useState} from 'react'
import axios from 'axios'

// import axios
export default function Registration (props) {
    const [userName ,setUserName] = useState('')
    const [password ,setPassword] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')

// define onsubmit fn
// axios.post on submut fn. /login/new
// try/catch { axios post} .status(200) .status(400)
// catch setmessage
const [message, setMessage] = useState('')
const onSubmit = async (e) => {
    e.preventDefault()
    
    try {
        const res = await axios.post('/api/login/new' , {
        userName,
        password,
        lastName,
        firstName
    });
    
    console.log(res)
    props.doRegistration()
    setMessage('Successfully Registered! You can now log in to membership services. Please continue with your purchse below.')
}
catch(e) {
    
    setMessage('Hmm, something didnt quite work. Try again.')
}
}



return (

    <section className="registration">
        <div>
            <form onSubmit={onSubmit}className="registerForm">
                <h1>Great choice! Lets get you registered</h1>
                {message && <h3>{message}</h3>}
                <label>
                    <input 
                    className="personal" type= "text" name="fName" placeholder="First Name"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value)}}
                    />                                   
                </label>
                <label>
                    <input  className="personal" type= "text" name="lName" placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value)}}
                    />                                   
                </label>
                <label>
                    <input className="personal" type= "text" name="email" placeholder="Username(email)"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)}}
                        />                         
                </label>
                <label>
                    <input  className="personal" type= "password" name="pwd" placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)}}/>
                <button className="submit" type="submit">Submit</button>         
                </label>
                
            </form>
        </div>
        </section>
)
}