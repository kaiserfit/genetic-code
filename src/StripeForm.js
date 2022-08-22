import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,CardNumberElement, CardExpiryElement, CardCvcElement, CardElement
} from "@stripe/react-stripe-js";
import $ from "jquery"
import {GoArrowRight} from "react-icons/go"
import Purchase from "./checkout/images/purchase-button.webp";

export default function StripeForm(cskey) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ckey, setKey] = useState("")
  useEffect(() => {
    if (!stripe) {
      return;
    }
    setKey(JSON.stringify(cskey.clientSecret))
   
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    console.log(clientSecret)
     

    if (!clientSecret) {
      return;
    } 
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        console.log(paymentIntent)
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    // console.log(elements)
    // var cardx = elements.getElement
    console.log(cskey.clientSecret)
    var piKey = cskey.clientSecret
    // var card = elements.getElement(CardNumberElement)
    // const { error } = await stripe.confirmPayment({
    //   card,
    //   confirmParams: {
       
    //     return_url: "http://localhost:3000",
    //   },
    // });


    const { error } = await  stripe
  .confirmCardPayment(piKey, {
    payment_method: {
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name: 'Jenny Rosen',
      },
    },
  })
  .then(function(result) {
    console.log(result)
    // Handle result.error or result.paymentIntent
  });
console.log(error);
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };


  function OrderBump(){
    setTimeout(() => {
      var cb = $("#ob").is(':checked');
      if (cb){
          return false
      } else {
          $("#ob").prop('checked', true);
          $("#ob").trigger("change");
          
      }
    }, 1000);
    return (
      <div id="orderbump">
      <div id="orderbumpBanner" className="clearfix position-relative" style={{backgroundColor: "#1c2634", padding:"10px"}}>
        <input type="checkbox" id="ob" name="ob" className="ms-2"/>
        <GoArrowRight className="blink position-absolute start-0 red-text" style={{top: "25%"}} /><label className="text-white" htmlFor="ob">Yes! Another Free Bonus!! </label>
        
        <input type="hidden" id="obId" name="obId" value="79" />
        <input type="hidden" id="page" name="page" value="checkout" />
        </div >
        <div className="p-2">
        <img src={require('./checkout/images/79.webp')} className="img-fluid" />
        <p><strong>One time Offer:</strong>
          Join our most successful members who lose
          the most weight <b>EFFORTLESSLY</b> in the <b>Kaiser Coach Platinum</b>
           absolutely <b>FREE</b> and Supercharge Your Fat Loss.
          <b>Get Monthly cooking videos, workout videos, cook books, 
          weight loss secrets & MUCH MORE! Get all of this for the first 30 days 100% FREE!</b>
          After that, you will be billed $79/Month and you can cancel anytime.
          <b>Plus, get the Divine Desserts Cookbook absolutely FREE (normally $29.95)</b>
          </p>
        <br />
        <img src={require('./checkout/images/ob79.webp')} className="img-fluid" alt="0" />
        <p className="red-text text-decoration-line-through text-center">Normally $79.00</p>
        </div>
          <br />
      </div>
    )
   }
   $("#Field-countryInput").hide()

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
 
      {/* <PaymentElement id="payment-element" className="mx-auto"/> */}
        <div>
          <label htmlFor="stripecn">Card Number *</label>
        
          <div id="stripecn" className="d-block mw-100 w-100">
            <CardNumberElement className="form-control input-lg border p-1" />
          </div>
            
    
          <div className="row p-1">
        <div className="col-6 p-1">
          <label htmlFor="stripexpd">
                    Expiry Date
                  </label>
                  <div id="stripexpd">
                  <CardExpiryElement className="input-lg border p-1" />
                  </div>
          </div>
        <div className="col-6 p-1">
            <label htmlFor="stripecc">
                  Card Code (CVC)
                  </label>
                  <div id="stripecc">
                  <CardCvcElement className="input-lg border p-1" />
                  </div>
          </div>
          </div>
        </div>
      <div className="d-grid w-75 mt-3 fw-bold mx-auto" id="buttonHolder"> 
          <button disabled={isLoading || !stripe || !elements} className="btn btn-lg btn-warning display-1 position-relative p-0 clearfix text-center fw-bolder">
          <img src={Purchase} className="img-fluid" />
          </button>
          </div>
          {message}
      <OrderBump />
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}