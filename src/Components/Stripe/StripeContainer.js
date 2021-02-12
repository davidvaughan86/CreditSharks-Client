import React from 'react'
import {loadStripe} from '@stripe/stripe-js'

import {Elements} from '@stripe/react-stripe-js'
import {CheckoutForm} from './CheckoutForm'

const PUBLIC_KEY = "pk_test_51IGFn2AqeHzkXuKGf9dQWsKmvh5LBub4xPBSrwfYDrfS30SlGrHerouKQjHff0XcS34fIMWkCxgpjjeMaSxs987q00wjAP9AkW"



export default function Stripe () {
    const stripeTestPromise= loadStripe('pk_test_51IGFn2AqeHzkXuKGf9dQWsKmvh5LBub4xPBSrwfYDrfS30SlGrHerouKQjHff0XcS34fIMWkCxgpjjeMaSxs987q00wjAP9AkW')
return(
    <Elements stripe={stripeTestPromise} >
        <CheckoutForm />
    </Elements>



)


}