import './card.css'

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
  CardElement
} from '@stripe/react-stripe-js';



import React from 'react'

const Card = () => {
    const elements = useElements();
    const stripe = useStripe();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

        //Create payment intent on the server 
        const clientsecret = await fetch("http://localhost:5000/payment",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                currency:'usd',
            }),
        }).then(r => r.json());
        //confirm the payment on the client
        const client_secret= clientsecret.clientSecrete;
        
        const paymentIntent = await stripe.confirmCardPayment(
            client_secret,{
                payment_method:{
                    card:elements.getElement(CardNumberElement),
                    // billing_details: {
                    //     name: user.name,
                    //     email: user.email,
                    //     address: {
                    //       line1: shippingInfo.address,
                    //       city: shippingInfo.city,
                    //       state: shippingInfo.state,
                    //       postal_code: shippingInfo.pinCode,
                    //       country: shippingInfo.country,
                    //     },
                    //   },
                }

            }
        )
        console.log(`cardelement:${elements.getElement(CardNumberElement)}`);
        console.log(`PaymentIntent ${paymentIntent.id}: ${paymentIntent.status}`);
        console.log(`PaymentIntent ${paymentIntent}`);
    }
  return (

    <div className='pay'>
        Card
    <form className='pay' onSubmit={handleSubmit}>
        <label htmlFor="card-element"> Card</label>
        <CardNumberElement id='card-element'/>
        <div>
           
            <CardExpiryElement className="paymentInput" />
          </div>
          <CardCvcElement className="paymentInput" />

    <button className='payment' disabled={!stripe || !elements}> pay</button>
    </form>
    </div>
  )
}

export default Card