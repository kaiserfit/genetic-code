import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import WebHook from "../WebHook";
import TiktokPixel from 'tiktok-pixel';
import ReactPixel from 'react-facebook-pixel'

import Cards from "../vsl-components/images/visa-mastercard-icon.webp";
import Collagen1 from "../collagen-matrix/Collagen-1.webp"
import Collagen3 from "../collagen-matrix/Collagen-3.webp"
import Collagen6 from "../collagen-matrix/Collagen-6.webp"

import MoneyBack from "../vsl-components/images/moneyback-guarantee.webp"
import CollagenBasic from "../collagen-matrix/CollagenBasic";
import CollagenPremium from "../collagen-matrix/CollagenPremium";
import CollagenUltimate from "../collagen-matrix/CollagenUltimate";
import UpsellBanner from "./UpsellBanner";
import GetCookie from "../Cookie";
import $ from "jquery"
import {useNavigate} from "react-router-dom";
const CollagenMatrix = () => {
    document.title="Collagen Matrix"
    const navigate = useNavigate();
    // const {state} = useLocation();
    // const  price  = state.price;
    // const bot = state.bot
    // const product = state.product

    TiktokPixel.init('CBSRIBJC77U6QAIGVM3G');
    TiktokPixel.pageView();

    ReactPixel.init('334082198751683')
    ReactPixel.pageView();

    
    useEffect(()=>{
        $('html, body').animate({
            scrollTop: $("html, body").offset().top
        }, "fast");

    
    }, []);
    const skip = (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("html, body").offset().top
        }, "slow");

        var s = parseInt(localStorage.getItem('skipCount'))
        s++
      
        if (s===2){
            setTimeout(() => {
                navigate("/thankyou", { push: true });
            }, 500);
        } else {
            setTimeout(() => {
                navigate("/inner-restore", { push: true });
            }, 500);
        }


        
       
    }
    function Product({num}){
        return (
            <div className="container">

            
            <div className="row">
               
            <div className="col-12 col-sm-12 col-md-4 p-3  p-lg-4 order-3 order-sm-3 order-md-1">
                <div className="gray bordered p-3  p-lg-4 border-default product-pack lh-1 text-center">
                        <div className="bundle-name">BASIC</div>
                        <span className="bottle">1 BOTTLE</span><br />
                        <span className="day-supply mb-3">30 Day Supply</span><br />
                        <img src={Collagen1} className="img-fluid my-3" alt="1 bottle Collagen Matrix" />

                    

                

                        <ul className="list-unstyled bonus-summary" >
                        <li className="bullets">
                            <span className="be-3 red-text">&#x2718;</span> Shipping NOT Included
                        </li>
                        <li className="bullets">
                        <span className="be-3 bright-green">&#10004;</span> Collagen Matrix
                        </li>
                       
                    
                        </ul>
                
                    

                        <CollagenBasic num={num}/>
                        <div style={{width: '90%', margin: 'auto'}}>
                        <img src={Cards} className="img-fluid " alt="stripe cards" />
                        </div>

                        <div className="bottom-strike gray d-none">
                            <span >
                            <span className="gray">$119</span> 
                            </span><b>$69</b>
                        </div>
                

                    
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 p-3 p-lg-4 order-1 order-sm-1 order-md-2">
                <div className="green bordered p-3 p-lg-4 border-green product-pack lh-1 text-center text-black">
                <div className="bundle-name bundle-ultimate">ULTIMATE</div>
                    <span className="bottle">6 BOTTLES</span><br />
                    <span className="day-supply mb-3">180 Day Supply</span><br />
                    <img src={Collagen6} className="img-fluid my-3" alt="6 bottles Collagen Matrix" />
                


                    

                    <ul className="list-unstyled bonus-summary text-black" >
                        <li className="bullets">
                        <span className="be-3 bright-green">&#10004;</span><strong>BEST Bundle For Your Goal: <span className="wg-text">{GetCookie("goal")}</span></strong>
                        </li>
                        <li className="bullets">
                        <span className="be-3 bright-green">&#10004;</span> Best Value & Most Popular
                        </li>
                        <li className="bullets">
                        <span className="be-3 bright-green">&#10004;</span> Shipping Included
                        </li>
                        <li className="bullets">
                        <span className="be-3 bright-green">&#10004;</span> Collagen Matrix
                        </li>
                        
                    
                    </ul>

                    
                  <CollagenUltimate num={num} />

                    
               

                    <div style={{width: '90%', margin: 'auto'}}>
                        <img src={Cards} className="img-fluid " alt="stripe cards" />
                    </div>

                        <div className="bottom-strike d-none">
                        <span >
                            <span>$1194</span> 
                        </span><b>$294</b>
                        </div>
                
                

                    
                </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 p-3  p-lg-4 order-2 order-sm-2 order-md-3">
            <div className="gray bordered p-3  p-lg-4 border-default product-pack lh-1 text-center">
                <div className="bundle-name">PREMIUM</div>
                    <span className="bottle">3 BOTTLES</span><br />
                    <span className="day-supply mb-3">90 Day Supply</span><br />
                    <img src={Collagen3} className="img-fluid my-3" alt="3 bottles Collagen Matrix" />
                

                
                    
                    
                
                    <ul className="list-unstyled bonus-summary text-black" >
                
                    <li className="bullets">
                        <span className="be-3 bright-green">&#10004;</span> Shipping Included
                    </li>
                    <li className="bullets">
                        <span className="be-3 bright-green">&#10004;</span> Collagen Matrix
                    </li>
                    
                
                    </ul>
            
                    <CollagenPremium num={num} />
                    

                    <div style={{width: '90%', margin: 'auto'}}>
                    <img src={Cards} className="img-fluid " alt="stripe cards" />
                    </div>

                    <div className="bottom-strike gray d-none">
                        <span >
                        <span className="gray">$797</span> 
                        </span><b>$177</b>
                    </div>
                

            
                
            </div>
            </div>


            </div>

            </div>
        )
    }
    return (
        <>
        <UpsellBanner />
        <div className="container mw-100">
        <div className="w-75 mx-auto">
                <h3 className="text-center my-3 fw-bold">
                ...PREVENT Loose Skin & TIGHTEN Your Skin
                    While You Lose Fat 
                 </h3>
            </div>
            <Product num={1} />
            <div className="w-100 d-block text-center my-3">
                <img src={MoneyBack} alt="money back guarantee" className="img-fluid"></img>
            </div>
            <Product num={2} />
            <div className="container my-3 text-center">
            <a href="#0" onClick={skip} className="text-center text-muted">No thanks, I don't want to take advantage of this one-time offer</a>
        </div>
        </div>

        </>
    )
}

export default CollagenMatrix