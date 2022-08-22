import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import $ from "jquery"
import StripeForm from "./StripeForm";
import "./App.css"
import GetCookie from "./Cookie";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_laGA1Jl4I44TUJFzQJI8DNuD");

export default function Gorm({priceId, price}) {
  const [clientSecret, setClientSecret] = useState("");
  console.log(priceId, price)
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
          <StripeForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}