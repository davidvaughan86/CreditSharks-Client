import React from 'react'
import {
  CardElement, 
  

  useStripe, 
  useElements} from '@stripe/react-stripe-js'
import {useHistory} from 'react-router-dom'
import axios from 'axios';

import Registration from './Registration'

// import PersonalInfo from './PersonalInfo';

export const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const history= useHistory()

    const handleSubmit = async(event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod  ({
            type:"card",
            card: elements.getElement(CardElement)
        });

        if(!error) {
            console.log("Stripe 23 | token generated!", paymentMethod)
        try {
            const { id } = paymentMethod;
            const response =await axios.post(
                "/api/stripe/charge",
          {
            amount: 999,
            id: id,
          }


            );
            console.log("Stripe 35 | data", response.data.success);
            if (response.data.success) {
              
              console.log("CheckoutForm.js 25 | payment successful!");
            }
            
          } catch (error) {
            console.log("CheckoutForm.js 28 | ", error);
          }
        } else {
          console.log(error.message);
        }
        }



    return (
        <div className="CheckoutFormContainer">
          <img className="shopping"src='./images/shopping.jpg'style={{border:'2px solid #00bea6', borderRadius: '30px', width:"80%"}}/>
          <Registration />
              <br/>
              
          <div >
            <h4>Confirm your selection below</h4>
        <form onSubmit={handleSubmit}>
        <CardElement
       
      />
      <br/>
        <button className="paying">Purchase</button>
        
        </form>
        
        <img src={props.cart[0].url} alt={props.cart[0].title}/>
        <p>{props.cart[0].title}</p>
        <p>{props.cart[0].price}</p>
        <p>{props.cart[0].description}</p>
        <button className="update" onClick={(e) => {
          history.push('/products')}}>
        Wait, go back!</button>
        <br/>
        
        </div>
        </div>
    )

   }