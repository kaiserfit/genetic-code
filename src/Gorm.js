import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import $ from "jquery"
import StripeForm from "./StripeForm";
import "./App.css"
import GetCookie from "./Cookie";
import {useNavigate} from "react-router-dom";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_laGA1Jl4I44TUJFzQJI8DNuD");

export default function Gorm({priceId, price, customerDetails}) {
  const [clientSecret, setClientSecret] = useState("");
  const [customerOrderNumber, setOrderNumber] = useState("");
  const [orderBump, setOrderBump] = useState(true)
  const [customerPaymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://pay.kaiserfitapp.com/stripe/createPm.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: priceId, price: price })
      
      })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));



     
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
          document.cookie="cid="+data.customerid+";path=/";
          document.cookie="hash="+data.hash+";path=/";
          document.cookie="cEmail="+customerDetails[0].email+";path=/";
          navigate("/thankyou", { replace: true });
        })
      }
    
    
  }, [customerPaymentMethod])

  useEffect(()=>{
    console.log(orderBump)
  }, [orderBump]);

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