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
            <br/>
            <br/>
            <br/>
        {/* <div className="Stripeframe"> */}
        <form onSubmit={handleSubmit} style={{maxWidth:400}}> 
        <div className="frame">
        <CardNumberElement options={{style:{base:{fontSize:'20px'}}}}/>
        <CardExpiryElement options={{style:{base:{fontSize:'20px'}}}}/>
        <CardCvcElement options={{style:{base:{fontSize:'20px'}}}}/>
        <button>PAY</button>
        
        </div>
       
        


        
        {/* <CardElement options={{style:{base:{fontSize:'20px', height:'50px'}}}}/>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
       
        </div> */}

        </form>
        {/* </div> */}
        </div>
    )

    }