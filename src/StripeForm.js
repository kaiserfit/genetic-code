import React, { useEffect, useState } from "react";
import { 
  useStripe,
  useElements,CardNumberElement, CardExpiryElement, CardCvcElement, CardElement, PaymentElement
} from "@stripe/react-stripe-js";
import $ from "jquery"
import {GoArrowRight} from "react-icons/go"
import Purchase from "./checkout/images/purchase-button.webp";

export default function StripeForm( {clientSecret, customerDetails, setPaymentMethod, setOrderNumber, setOrderBump, setAmount}) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [obCheck, setOb] = useState(true)
  const [paymentStatus, setPaymentStatus] = useState(true)
  useEffect(() => {
    if (!stripe) {
      return;
    }
    // setKey(JSON.stringify(cskey.clientSecret))
   
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

   
     

    if (!clientSecret) {
      return;
    } 
    // stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //   console.log(paymentIntent)
    //   switch (paymentIntent.status) {
    //     case "succeeded":
    //       setMessage("Payment succeeded!");
    //       break;
    //     case "processing":
    //       setMessage("Your payment is processing.");
    //       break;
    //     case "requires_payment_method":
    //       setMessage("Your payment was not successful, please try again.");
    //       break;
    //     default:
    //       setMessage("Something went wrong.");
    //       break;
    //   }
    // });
    
  }, [stripe]);
  useEffect(
  ()=>{
    var cb = $("#ob").is(':checked');
  
    setOrderBump(cb)

  }, [obCheck]   
  );

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    setMessage(null);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

  


 


     stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name: customerDetails[0].email,
      },
      
    },
    
    
      setup_future_usage: 'off_session',
      
    
  })
  .then(function(result) {
     
    // Handle result.error or result.paymentIntent
    console.log(result)
    if (result.error){
        setPaymentStatus(false)
        setMessage(result.error.message)
    }

    if (result.paymentIntent){
      setPaymentStatus(true)
          switch (result.paymentIntent.status) {
        case "succeeded":
          console.log(result.paymentIntent)
          setPaymentMethod(result.paymentIntent.payment_method)
          setOrderNumber(result.paymentIntent.id)
          setAmount(result.paymentIntent.amount)
          setMessage("Payment succeeded! Please wait while we setup your KaiserCoach Account");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          setIsLoading(false);
          break;
        default:
          setMessage("Something went wrong.");
          setIsLoading(false);
          break;
      }
    }
 
  

  });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
 
    // if (error.type === "card_error" || error.type === "validation_error") {
    //   console.log("sadf")
    //   setMessage(error.message);
    // } else {
    //   console.log("123123")
    //   setMessage("An unexpected error occurred.");
    // }

    
  };


  function OrderBump(){

    const BumpCheck=(e)=>{
      setOb(e.target.checked)
      
    
    }
    return (
      <div id="orderbump">
      <div id="orderbumpBanner" className="clearfix position-relative" style={{backgroundColor: "#1c2634", padding:"10px"}}>
        <input type="checkbox" onChange={BumpCheck} id="ob" name="ob" checked={obCheck} className="ms-2"/>
        <GoArrowRight className="blink position-absolute start-0 red-text" style={{top: "25%"}} /><label className="text-white" htmlFor="ob">Yes! Another Free Bonus!! </label>
        
        <input type="hidden" id="obId" name="obId" value="79" />
        <input type="hidden" id="page" name="page" value="checkout" />
        </div >
        <div className="p-2">
        <img src={require('./checkout/images/79.webp')} alt="crossed out price" className="img-fluid" />
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
  

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
 
      {/* <PaymentElement id="payment-element" className="mx-auto"/> */}
        <div className="mb-4">
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
      <OrderBump />
     <div id="payment-message" className={`text-center my-3 ${(message!==null) ? "" : "invisible"} ${(paymentStatus===true) ? "text-success":"text-danger"}`}>{message}</div>
      <div className="d-grid mt-3 fw-bold mx-auto" id="buttonHolder"> 
          <button disabled={isLoading || !stripe || !elements} className="btn btn-lg btn-link p-0 clearfix text-center fw-bolder">
            <img src={Purchase} alt="Checkout Button" className="img-fluid" />
          </button>
      </div>
      
    </form>
  );
}