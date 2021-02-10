import React from 'react'
import {Input} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {MenuItem} from '@material-ui/core'
import {useHistory} from 'react-router-dom'   
import logo from './CSlogo.png'    
import {useState} from 'react'
import emailjs from 'emailjs-com'


export default function LeadCapture() {
    const history = useHistory()
    // const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')

    // const handleClick=() => {
    //     props.registerLead(props)
    //     history.push('/products')
    // }
    const handleClick=() => {
        
        history.push('/products')
    }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ppysl3c', 'template_x3lq2mf', e.target, 'user_sa7Oug4IuHerMJnhC6CCX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
    

    return (
        
        <div className='leadPageContainer' max-width = '30%'>
            
                <form className="frame" onSubmit={sendEmail}>
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
                    // textColor={"#333"}
                    // value={name}
                    // onChange={(e) =>{
                    // setName(e.target.value)
                    // }}
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
                    // textColor={"#333"}
                    // value={lastName}
                    // onChange = {(e) => {
                    //     setLastName(e.target.value)
                    // }}
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
                    // textColor={"#333"}
                    // value={email}
                    // onChange={(e) => {
                    //     setEmail(e.target.value)
                    // }}
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
                    placeholder={"Phone"}
                    placeholderColor={"#aaa"}
                    radius={8}
                    // textColor={"#333"}
                    // value={phone}
                    // onChange={(e) => {
                    //     setPhone(e.target.value)
                    // }}

                    />
                    <div className='submit' max-width ='100%'>
                            <img src ={logo} width='200px' onClick={(e) => {
                            handleClick()
                            }}/>
                            
                        </div>
                    
                </form>

                    <br/>
                    <br/>

                    {/* <Link to={'/products'} variant="contained" style={{backgroundColor: 'transparent', color: '#9F0000'}}>
                       
                        
                    </Link> */}
                                


            </div>
       
    )
}