import React from 'react';
import {useState} from 'react'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_sa7Oug4IuHerMJnhC6CCX");


export default function ContactUs() {
  
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  

    

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_i8ydsjy', 'template_CSContact', e.target, 'user_sa7Oug4IuHerMJnhC6CCX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className='contactUsContainer' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <form className="frame" onSubmit={sendEmail}>
        <h1>Contact Us</h1>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'10%'}}>
            
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={(e) =>{
                    setName(e.target.value)
                    }}style={{width:'300px', height:'40px' ,fontSize:'18px', textAlign:'center'}} />
            <label>Phone</label>
            <input type="text" name="phone" value={phone} onChange={(e) =>{
                    setPhone(e.target.value)
                    }}style={{width:'300px', height:'40px' ,fontSize:'18px', textAlign:'center'}} />
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={(e) =>{
                    setEmail(e.target.value)
                    }}style={{width:'300px', height:'40px' ,fontSize:'18px', textAlign:'center'}} />
            <label>Message</label>  
            <textarea name="message"  maxLength='150' value={message} onChange={(e) =>{
                    setMessage(e.target.value)}} style={{width:'300px', height:'200px' ,fontSize:'18px', textAlign:'left'}} />
            <br/>
            <button className="submit"type='submit'value="Send">CONTACT US</button>
        </div>
                    
            
        </form>
    </div>
  );
}