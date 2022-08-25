import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import StripeForm from "./StripeForm";
import "./App.css"
import GetCookie from "./Cookie";
import {useNavigate} from "react-router-dom";
import TiktokPixel from 'tiktok-pixel';
import ReactPixel from 'react-facebook-pixel'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_live_DIH0BmB1obyjQvuimdsJI9MH");
// const stripePromise = loadStripe("pk_test_laGA1Jl4I44TUJFzQJI8DNuD");

export default function Gorm({priceId, price, customerDetails, setRoute}) {
  const [clientSecret, setClientSecret] = useState("");
  const [customerOrderNumber, setOrderNumber] = useState("");
  const [orderBump, setOrderBump] = useState(true)
  const [customerPaymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const hashVal  = [...crypto.getRandomValues(new Uint8Array(10))]
  .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
  const timeStamp = Date.now();    
  const event_id = 'event-'+hashVal+'-'+timeStamp; //unique ID of visitor
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://pay.kaiserfitapp.com/stripe/createPm.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: priceId, price: price })
      
      })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

      TiktokPixel.init('CBSRIBJC77U6QAIGVM3G');
      TiktokPixel.pageView();
      TiktokPixel.track('AddPaymentInfo');
  
      ReactPixel.init('334082198751683')
      ReactPixel.pageView();
      ReactPixel.track('AddPaymentInfo')

     
  }, []);

  useEffect(()=> {
    console.log("checkout complete")
    console.log(customerPaymentMethod)
    if (customerPaymentMethod !== ""){
        var ob = (orderBump) ? "true" : "false"
        fetch('https://pay.kaiserfitapp.com/stripe/createCustomer.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: customerDetails[0].name,
            payment_method: customerPaymentMethod,
            email: customerDetails[0].email,
            phone: customerDetails[0].phone,
            street: customerDetails[0].shippingDetails.street,
            city: customerDetails[0].shippingDetails.city,
            country: customerDetails[0].shippingDetails.country,
            zip: customerDetails[0].shippingDetails.zip,
            state: customerDetails[0].shippingDetails.state,
            fbclid: GetCookie('_fbc'),
            urlsite: window.location.href,
            orderNumber: customerOrderNumber,
            price: priceId,
            ob:ob,
          })
        })
        .then((res) => res.json())
        .then((data)=>{
          document.cookie="orderid="+customerOrderNumber+";path=/";
          document.cookie="cid="+data.customerid+";path=/";
          document.cookie="hash="+data.hash+";path=/";
          document.cookie="cEmail="+customerDetails[0].email+";path=/";
            
      
          setTimeout(() => {
            setRoute("thankyou");
            navigate("/thankyou", { replace: true, state: { price: parseFloat(price) } });
          }, 1000);
        })
      }
    
    
  }, [customerPaymentMethod])



  const appearance = {
    theme: 'stripe',
    rules: {
      '.p-Select-select': {
        display: 'none'
      }
    }
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeForm clientSecret={clientSecret} customerDetails={customerDetails} setPaymentMethod={setPaymentMethod} setOrderNumber={setOrderNumber} setOrderBump={setOrderBump}/>
        </Elements>
      )}
    </div>
  );
}