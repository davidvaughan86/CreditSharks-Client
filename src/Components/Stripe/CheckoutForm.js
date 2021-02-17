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
          <Registration />
              <br/>
              
          <div >
            <h4>Purchase your Package</h4>
        <form onSubmit={handleSubmit}>
        <CardElement
       
      />
        <button className="pay">PAY</button>
        
        </form>
        
        <img src={props.cart[0].url} alt={props.cart[0].title}/>
        <p>{props.cart[0].title}</p>
        <p>{props.cart[0].description}</p>
        <button onClick={(e) => {
          history.push('/products')}}>
        Select a different Package</button>
        <br/>
        
        </div>
        </div>
    )

   }