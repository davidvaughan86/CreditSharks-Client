import React from 'react'
import {Input} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {MenuItem} from '@material-ui/core'
import {useHistory} from 'react-router-dom'   
import logo from './CSlogo.png'    
import {useState} from 'react'


export default function LeadCapture(props) {
    const history = useHistory()
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleClick=() => {
        props.registerLead(props)
        history.push('/products')
    }
    

    return (
        
        <div className='leadPageContainer' max-width = '30%'>
            
                <div className="frame">
                    
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
                    // textColor={"#333"}
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
                    // textColor={"#333"}
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
                    placeholder={"Phone"}
                    placeholderColor={"#aaa"}
                    radius={8}
                    // textColor={"#333"}
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}

                    />
                    <div className='submit' max-width ='100%'>
                            <img src ={logo} width='200px' onClick={(e) => {
                            handleClick()
                            }}/>
                            
                        </div>
                    
                    </div>

                    <br/>
                    <br/>

                    {/* <Link to={'/products'} variant="contained" style={{backgroundColor: 'transparent', color: '#9F0000'}}>
                       
                        
                    </Link> */}
                                


            </div>
       
    )
}