import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import GetCookie from "../Cookie";
import UpsellBanner from "./UpsellBanner";
import Stop from "../stop.webp"
import DreamyLean from "./DreamyLean";
const Upsell = () => {
    const [upStep, setUpsellStep] = useState(1)
    const {state} = useLocation();
    const  price  = state.price;
    const bot = state.bot
    const product = state.product
    
    return (
        <>
            <UpsellBanner />
            {(bot===1 && upStep===1) && (
                <DreamyLean />
            )}
        </>
    )
}

export default Upsell