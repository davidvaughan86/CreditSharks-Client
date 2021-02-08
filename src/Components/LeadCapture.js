import React from 'react'
import {Input} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {MenuItem} from '@material-ui/core'
import {useHistory} from 'react-router-dom'   
import logo from './CSlogo.png'    



export default function LeadCapture() {
    const history = useHistory()
   
    return (
        
        <div className='leadPageContainer' max-width = '80%'>
            <div className="leadFrame">
                <div className="inputContainer">
                    
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
                    value={""}
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
                    value={""}
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
                    value={""}
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
                    value={""}
                    />
                    
                    </div>

                    <br/>
                    <br/>

                    <Link to={'/products'} variant="contained" style={{backgroundColor: 'transparent', color: '#9F0000'}}>
                       {/* <MenuItem style={{padding:'20px', border:'2px solid', borderRadius:'60px'}}>
                       
                           Submit
                        </MenuItem>  */}
                        <div className='submit' max-width ='100%'>
                            <img src ={logo} width='200px' onClick={(e) => {
                            history.push('/products')
                            }}/>
                            
                        </div>
                    </Link>
                                


            </div>
        </div>
    )
}