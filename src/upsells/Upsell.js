import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";


import DreamyLean from "./DreamyLean";
import $ from "jquery"
const Upsell = () => {
    const [upStep, setUpsellStep] = useState(1)
    const {state} = useLocation();
    const  price  = state.price;
    const bot = state.bot
    const product = state.product
    const xroutes = {
        id: 1, route: "Dreamy Lean"
    }
    useEffect(() => {
        $('html, body').animate({
            scrollTop: $("#pricing-warning").offset().top
        }, "slow");
    }, [])
    const skip = (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#pricing-warning").offset().top
        }, "slow");
        setUpsellStep(upStep=>upStep+1);
    }
    return (
        <>
        
            {(upStep===1) && (
                <DreamyLean setUpsellStep={setUpsellStep} />
            )}
    <div className="container text-center">
        <a href="#0" onClick={skip} className="text-center text-muted">No thanks, I don't want to take advantage of this one-time offer</a>
    </div>
        </>
    )
}

export default Upsell