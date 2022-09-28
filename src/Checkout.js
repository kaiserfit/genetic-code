import React, {useState, useEffect} from "react";

import GetCookie from "./Cookie";
import "./checkout/css/checkout1.css";
import "./checkout/css/checkout-xxl.css";
import "./checkout/css/checkout-md.css";
import "./checkout/css/checkout-sm.css";
import "./checkout/css/checkout-mobile.css";
import { BsStopwatchFill} from "react-icons/bs"


import {Prices} from "./prices"
import MoneyBackImage from "./vsl-components/images/moneyback-guarantee.webp"
import $ from "jquery";
import {ImQuotesLeft} from "react-icons/im";
import CheckoutForm from "./CheckoutForm";

const Checkout = ({setRoute}) => {
    document.title = "Checkout"
    const [productType, setProduct] = useState("kb");
    const dba=GetCookie("product");
    // useEffect(()=>{
    //   $('html, body').animate({
    //     scrollTop: $("#timerBanner").offset().top
    // }, "fast");
    // },[])
   
function DivTimer() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = monthNames[today.getMonth()];
    var yyyy = today.getFullYear();
  function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
            }
  var ee = ordinal_suffix_of(dd);
const today1 = ee + ' ' + mm + ' ' + yyyy;

    var timeInSecs;
    var ticker;
    
    function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval(tick, 1000); 
    }
    
    function tick() {

    var secs = timeInSecs;
  
    if (secs > 0) {
    timeInSecs--; 
    }
    else {
 
    var p = parseInt($("#kpass").text());
    p--;
    $("#kpass").text(p);
 
    clearInterval(ticker);
    startTimer(25*60); // 15 minutes in seconds
    }
    

    secs %= 86400;
   
    secs %= 3600;
    var mins = Math.floor(secs/60);
    secs %= 60;
    
    var xmins = ( (mins < 10) ? "0" : "" ) + mins;
      var xsec = ( (secs < 10) ? "0" : "" ) + secs;
     
    
      $("#counter").text("00:"+xmins+":"+xsec);

    }
    
    startTimer(25*60);
    return (
        <div className="my-3 p-1" id="timerBanner">
        <div  className="container-fluid text-dark py-4 " style={{border: "2px dashed red"}} >
          <div  className="text-center">       
              <p className="fs-4"><span className="label label-danger p-1 rounded text-white"><strong>Warning</strong></span>: Due to unexpected demand, we cannot guarantee The Dream Body Bundle after <br /><span className="label label-danger p-1 rounded text-white" id="curdate">{today1}</span>. Sign up immediately to secure your spot before Membership is FULL</p>
          </div>
          
         
        <div className="text-center pt-1">
                  <div className="row">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                         
                          <p className="fs-5">Kaiser Burner Stock: <span className="label label-danger p-1 rounded text-white">LOW</span></p>
                      </div>
          
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                     
                          <p className="fs-5">Sell Out Risk: <span className="label label-danger p-1 rounded text-white">HIGH</span></p>
                      </div>
                  </div>
          
                  <div className="row mt-2">
                      <div className="col-12 col-sm-6">
                       <p className="fs-5">Kaiser Coach Passes Remaining- <span className="label label-danger p-1 rounded text-white" id="kpass">13</span></p>
                      </div>
          
                      <div className="col-12 col-sm-6">
                          <div className="fs-5">Your Spot Is Being Held For: <span id="countdown-timer" className="label label-danger p-1 rounded text-white"><span id="counter"></span></span>&nbsp;<BsStopwatchFill className="red-text"/></div>  
                      </div>
                  </div>
         
             
          </div>


        </div> 
      </div>
    )
}


function Section2(){
    return(
        <div className="container-fluid text-center py-2 py-sm-4 mb-3" id="transformation-banner">
      
      <img src={require('./stars.webp')}  className="d-block mx-auto mt-3" height="55" width="270" alt="5 stars" />
      <h4 className="text-white mt-3">5 Star Reviews From Real People Who Achieved Awesome Transformations</h4>
      <div className="container w-75">

      
        <div className="row">
          <div className="col-12 col-md-4 p-1 p-md-3 mb-3">
            <div className="card" >
            <img src={require('./checkout/images/jeanna-checkout.webp')} className="card-img-top" alt="..." />
            <div className="card-body clearfix text-start"> 
              <div className="row mb-3">
                <div className="col-1 ">
                  <ImQuotesLeft />
                </div>
                <div className="col-10">
                  <p className="card-text fs-5"> I’m full of energy and living life again!</p>
                </div>
              </div>          
                  
            </div>
            <div className="card-footer text-start clearfix">
              <div className="d-inline float-start">
                <img src={require('./checkout/images/jeanna-head.webp')} height="100" width="100" className="rounded-circle" alt="" />
              </div>
              <div className="d-inline float-start lh-1 ps-4">   
                <p className="text-danger fw-bold mb-2 mt-4">JeAnna Bland</p>
                <img src={require('./stars.webp')} className="d-block" height="15" width="100" alt="5 stars" />  
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 p-1 p-md-3 mb-3">
          <div className="card">
            <img src={require('./checkout/images/marina-checkout.webp')} className="card-img-top" alt="..." />
            <div className="card-body clearfix text-start">
              <div className="row mb-3">
                <div className="col-1">
                <ImQuotesLeft />
                </div>
                <div className="col-10">
                  <p className="card-text fs-5">My husband and I have lost 240 pounds COMBINED. This program has changed our lives forever</p>
                </div>
              </div>          
                 
              
            </div>
            <div className="card-footer text-start clearfix">

              <div className="d-inline float-start">
                <img src={require('./checkout/images/marina-head.webp')} height="100" width="100" className="rounded-circle" alt="" />
              </div>
              <div className="d-inline float-start lh-1 ps-4">   
                <p className="text-danger fw-bold mb-2 mt-4">Marina</p>
                <img src={require('./stars.webp')} className="d-block" height="15" width="100" alt="5 stars" />  
              </div>
           

            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 p-1 p-md-3 mb-3">
          <div className="card">
            <img src={require('./checkout/images/shardai-checkout.webp')} className="card-img-top" alt="..." />
            <div className="card-body text-start">
              <div className="row mb-3">
                <div className="col-1">
                <ImQuotesLeft />
                </div>
                <div className="col-10">
                  <p className="card-text fs-5">I was ashamed and embarrassed of my body for years. Not anymore! I love myself inside and out. The Dream Body Academy has given me new life</p>
                </div>
              </div>          
                  
            </div>
            <div className="card-footer text-start clearfix">
              
              <div className="d-inline float-start">
                <img src={require('./checkout/images/shardai-head.webp')} height="100" width="100" className="rounded-circle" alt="" />
              </div>
              <div className="d-inline float-start lh-1 ps-4">   
                <p className="text-danger fw-bold mb-2 mt-4">Shardai</p>
                <img src={require('./stars.webp')} className="d-block" height="15" width="100" alt="5 stars" />  
              </div>
             

            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    )
}

function ProductSection(){
    const img = Prices.filter((i)=>{
        return (i.id===dba && i.product===productType);
      });
      const p = img[0].alias
      const d = img[0].img
    return (
        <div className="container w-75 my-3 text-center" id="guarantees">
        <h2 className="display-3">KaiserBody Bundle <span id="dba" className="text-capitalize">{p}</span> Pack</h2>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6 pt-1">
            <img src={d} id="img-bundle" alt="Dream Body in 90 bundle" className="img-fluid  mb-3 d-block mx-auto" />
          </div>
    
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6 fs-4 text-start">
            <ul id="bonus-desc">
              <li>Unlimited Lifetime Help And Support From World Class Coaches & Community Managers</li>
              <li>Step By Step Fat Loss Videos Showing You How To Melt Fat Easily</li>
              <li>Support & Accountability From Kaiserfit Women's Community</li>
              <li>Meal Plans, Recipe Guides & Workout Plans</li>
              <li>Secret Unadvertised Bonuses That Will Amaze You</li>
              <li>1 on 1 Coaching DAILY to help you lose fat Easily</li>
              <li>The EASIEST Transformation Of Your Life GUARANTEED</li>
            </ul>
           
        
          </div>
        </div>
        <hr />
    
        <img src={MoneyBackImage} className="img-fluid d-block mx-auto border-glow-blue" alt="100% money back guarantee" />
    
        
        
      </div>
    )
}
    return(
        <>
        {/* <DivTimer />
        <Section2 />
        <ProductSection /> */}
        <CheckoutForm dba={dba} productType={productType} setRoute={setRoute} />
        </>
    )
}


export default Checkout