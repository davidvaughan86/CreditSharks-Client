import React from 'react'
import {useState} from 'react'
import {Input} from '@material-ui/core'
import {useHistory} from 'react-router-dom'   
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_sa7Oug4IuHerMJnhC6CCX");


export default function LeadCapture() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    // const handleClick=() => {
    //     props.registerLead(props)
    //     history.push('/products')
    // }
    const handleClick =() => {
        
        history.push('/products')
    }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ejl5309', 'template_leadcapture', e.target, 'user_sa7Oug4IuHerMJnhC6CCX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    

    return (
        
        <div className='leadPageContainer' max-width = '30%'>
            
                <form className="frame" onSubmit={sendEmail, resetForm()}>
                    <h4>We need just a little info</h4>
                    <span>How should we address you?</span>
                    <br/>
                    <br/>
                    <br/>
            <Input 
  
                    backgroundColor={"#EBEBEB"}
                    border={"rgba(0,0,0,0)"}
                    borderWidth={1}
                    focusColor={"#09F"}
                    focused={false}
                    font={false}
                    fontFamily={""}
                    fontSize={16}
                    keyboard={""}
                    multiLine={false}
                    onBlur={undefined}
                    onChange={undefined}
                    onFocus={undefined}
                    onSubmit={undefined}
                    padding={15}
                    password={false}
                    placeholder={"First Name"}
                    placeholderColor={"#aaa"}
                    radius={8}
                    textColor={"#333"}
                    name="name"
                    value={name}
                    onChange={(e) =>{
                    setName(e.target.value)
                    }}
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Input
                    
                    backgroundColor={"#EBEBEB"}
                    border={"rgba(0,0,0,0)"}
                    borderWidth={1}
                    focusColor={"#09F"}
                    focused={false}
                    font={false}
                    fontFamily={""}
                    fontSize={16}
                    keyboard={""}
                    multiLine={false}
                    onBlur={undefined}
                    onChange={undefined}
                    onFocus={undefined}
                    onSubmit={undefined}
                    padding={15}
                    password={false}
                    placeholder={"Last Name"}
                    placeholderColor={"#aaa"}
                    radius={8}
                    textColor={"#333"}
                    name="lastName"
                    value={lastName}
                    onChange = {(e) => {
                        setLastName(e.target.value)
                    }}
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Input
                    
                    backgroundColor={"#EBEBEB"}
                    border={"rgba(0,0,0,0)"}
                    borderWidth={1}
                    focusColor={"#09F"}
                    focused={false}
                    font={false}
                    fontFamily={""}
                    fontSize={16}
                    keyboard={""}
                    multiLine={false}
                    onBlur={undefined}
                    onChange={undefined}
                    onFocus={undefined}
                    onSubmit={undefined}
                    padding={15}
                    password={false}
                    placeholder={"Email"}
                    placeholderColor={"#aaa"}
                    radius={8}
                    textColor={"#333"}
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Input
                    
                    backgroundColor={"#EBEBEB"}
                    border={"rgba(0,0,0,0)"}
                    borderWidth={1}
                    focusColor={"#09F"}
                    focused={false}
                    font={false}
                    fontFamily={""}
                    fontSize={16}
                    keyboard={""}
                    multiLine={false}
                    onBlur={undefined}
                    onChange={undefined}
                    onFocus={undefined}
                    onSubmit={undefined}
                    padding={15}
                    password={false}
                    placeholder={"Phone(Optional)"}
                    placeholderColor={"#aaa"}
                    radius={8}
                    textColor={"#333"}
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}

                    />
                    <br/>
                    <div style={{display:'flex', flexDirection:'row', marginLeft:'12%'}}>
                            <button className="submit"type="submit">Submit</button>
                            <button onClick={(e) => {
                                handleClick()}} className="paying">Next</button>
                            
                        </div>
                    
                </form>

                    <br/>
                    <br/>

                    {/* <Link to={'/products'} variant="contained" style={{backgroundColor: 'transparent', color: '#9F0000'}}>
                       
                        
                    </Link> */}
                                


            </div>
       
    )
}