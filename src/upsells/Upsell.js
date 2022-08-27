import React from "react";
import { useLocation } from "react-router-dom";
import GetCookie from "../Cookie";
import UpsellBanner from "./UpsellBanner";
const Upsell = () => {
    const {state} = useLocation();
    const  price  = state.price;
    const bot = state.bot
    const product = state.product
    const cname = localStorage.getItem("customerName")
    return (
        <div className="container-fluid px-0 min-vh-100">
            <UpsellBanner />
            
            <h1>Upsell Page</h1>

        </div>
    )
}

export default Upsell