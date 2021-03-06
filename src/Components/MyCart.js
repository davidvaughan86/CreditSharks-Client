import React from 'react'
import {BrowserRouter as Router, useHistory} from 'react-router-dom'

export default function MyCart (props) {
    const history = useHistory();

    
    
    return (
        
        <div className="checkOutContainer" >
                
                    <div className="frame">
                        <img src={props.cart[0].url} alt={props.cart[0].title} style={{width:'100%'}}/>
                        <div className="checkoutInfo">
                            
                            
                            <div>
                                <h4>{props.cart[0].title}</h4>
                                <br/>
                                <h3>{props.cart[0].price}</h3>
                                
                                
                            </div>
                            

                            <div className="stripe">
                                <button className="checkBtn"type="button" 
                                onClick={(e) => {
                                    history.push('/checkout')
                                }}
                                role="link" style={{
                                    border: '2px solid black',
                                    borderRadius: '20px'
                                }}
                                >
                                    Go To Check Out
                                </button>
                                <button className="backBtn"type="button" 
                                onClick={(e) => {
                                    history.push('/products')
                                }}
                                role="link" style={{
                                    border: '2px solid black',
                                    borderRadius: '20px'
                                }}
                                >
                                    BACK
                                </button>
                               
                                

                            </div>
                            <div className="pDescription">
                                <h4>{props.cart[0].description}
                                </h4>
                                </div>
                        </div>    
                    </div>

               

        </div>




    )



}