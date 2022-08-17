import React from "react";
import { useLocation } from 'react-router-dom'
import GetCookie from "./Cookie";
import "./checkout/css/checkout1.css";
import "./checkout/css/checkout-xxl.css";
import "./checkout/css/checkout-md.css";
import "./checkout/css/checkout-sm.css";
import "./checkout/css/checkout-mobile.css";
const Checkout = () => {
    const location = useLocation();
 
    return(
        <h1>{GetCookie("product")}</h1>
    )
}


export default Checkout