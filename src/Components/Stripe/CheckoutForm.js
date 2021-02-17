import React from 'react'
import {
  CardElement, 
  

  useStripe, 
  useElements} from '@stripe/react-stripe-js'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import '../Component CSS/Receipt.css'

import PersonalInfo from './PersonalInfo';

export const CheckoutForm = () => {
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
          <PersonalInfo />
              <br/>
              
          <div >
        <form onSubmit={handleSubmit}>
        <CardElement
       
      />
        <button className="pay">PAY</button>
        </form>
        <br/>
              <br/>
        
        </div>
        </div>
    )

   }