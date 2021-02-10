import React from 'react';
import emailjs from 'emailjs-com';
import {useHistory} from 'react-router-dom'
import logo from './CSlogo.png'
import {useState} from 'react'


export default function ContactUs() {
  const history = useHistory()
  

    const handleClick=() => {
        
        history.push('/products')
    }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ppysl3c', 'template_r8pfzqm', e.target, 'user_sa7Oug4IuHerMJnhC6CCX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='contactUsContainer' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <form className="frame" onSubmit={sendEmail}>
        <h1>Contact Us</h1>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'10%'}}>
            
            <label>Name</label>
            <input type="text" name="user_name" style={{width:'300px', height:'40px' ,fontSize:'18px', textAlign:'center'}} />
            <label>Phone</label>
            <input type="text" name="contact_number" style={{width:'300px', height:'40px' ,fontSize:'18px', textAlign:'center'}} />
            <label>Email</label>
            <input type="email" name="user_email" style={{width:'300px', height:'40px' ,fontSize:'18px', textAlign:'center'}} />
            <label>Message</label>  
            <textarea name="message"  maxLength='150' style={{width:'300px', height:'200px' ,fontSize:'18px', textAlign:'left'}} />
            <input type='image' src={logo} width= '50%' value="Send" onClick={(e) => {
                
              handleClick()
            }}>

            </input>
        </div>
                    
            
        </form>
    </div>
  );
}