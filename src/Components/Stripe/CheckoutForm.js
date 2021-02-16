import React from 'react'
import {
  CardElement, 
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  PaymentRequestButtonElement,

  useStripe, 
  useElements} from '@stripe/react-stripe-js'

import axios from 'axios';
import '../Component CSS/Receipt.css'
import Receipt from './CheckoutPForm'
import PersonalInfo from './CheckoutPForm';

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();


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
              <br/>
              <br/>
          <div >
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button>PAY</button>
        </form>
        <br/>
              <br/>
        
        </div>
        </div>
    )

   }