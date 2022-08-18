import React, {useState, useEffect} from "react";
import Cards from "./vsl-components/images/visa-mastercard-icon.webp";
import Next from "./checkout/images/next-step.webp";
import Final from "./checkout/images/final-step.webp";
import Purchase from "./checkout/images/purchase-button.webp";

import {countries} from "./countries.js";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import {GoArrowRight} from "react-icons/go"
import Select from 'react-select'
import $ from "jquery"
import {Prices} from "./prices"
import { BsFileBreakFill } from "react-icons/bs";
const CheckoutForm = ({dba, productType}) => {
    const [hasErrors, setErrorFlag] = useState(false);
    const [hasNameError, setNameError] = useState(false);
    const [hasEmailError, setEmailError] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState(null);
    const [hasNumError, setNumError] = useState(false);
 
    const [checkoutStep, setStep] = useState(1);
    const [validPhone, setValidPhone] = useState(true);
    const [phone, setPhone] = useState();
    const [formattedPhone, formatPhone] = useState()
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();
    const ProductArr = Prices.filter((i)=>{
        return (i.id===dba && i.product===productType);
      });

    

      const producTotal = ((dba==="bronze" || dba==="bronze-saver")) ? parseFloat(ProductArr[0].price) + 9.95 : parseFloat(ProductArr[0].price).toFixed(2) 

      const shippingFeeVisible = ((dba==="bronze" || dba==="bronze-saver")) ? true:false;
      console.log(shippingFeeVisible)
      function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        return regex.test(email);
        }

    const nameCheck = (name) => {
        if (name===""){
            setNameError(true);
            setErrorFlag(true);
            return false;
        } else {
            setNameError(false);
            return true
        }
    }

    const emailCheck= (email)=> {
        if (email===""){
            setErrorFlag(true);
            setEmailError(true);
            setEmailErrorMsg(<p>Email is Required</p>)
            return false
        } else if (isEmail(email) === false){
            setErrorFlag(true);
            setEmailError(true);
            setEmailErrorMsg(<p>Email is Invalid</p>)
            return false
        } else {
            setEmail(email);
            return true
        }
    }

    const CountryClick = (e) => {
        setCountry(e.value)
    }

    function Step1() {
        setErrorFlag(false);
        setNameError(false);
        setEmailError(false);
        setEmailErrorMsg(null)
        setNumError(false)
        setValidPhone(true)
        var valid = true;
        const f = $("#fname").val();
        const em = $("#c-email").val();
        var nameChk = nameCheck(f);
        var emailChk = emailCheck(em);
        if (nameChk===false){
            valid = false;
        }

        if (emailChk===false){
            valid = false;
        }
        
        if (phone==="" || phone===null || phone===undefined || phone.length < 5){
            valid = false;
            setNumError(true)
            setErrorFlag(true);
            setValidPhone(false)
        }

        if (valid){
            setStep(checkoutStep=>checkoutStep+1)
            $('html, body').animate({
                scrollTop: $("#payment-form").offset().top
            }, "fast");
         
        } else {
            $('html, body').animate({
                scrollTop: $("#form_errors").offset().top
            }, "fast");
        }
    }


    function Step2() {
        const s = $("#sname"); //street
        const t = $("#ctown"); //town
        const p = $("#postCode"); //postcode
        const c = $("#cState"); //state
        var valid = true;

        var inputArrs = [s, t, p, c];
        
        $.each(inputArrs, function(key, val){    
            if (val[0].value===""){
                val[0].classList.add('is-invalid');
                valid=false
            }
        })

        if(country==="" || country===null || country===undefined) {
            valid=false;
        }

        if (valid){
            setStep(checkoutStep=>checkoutStep+1)
            $('html, body').animate({
                scrollTop: $("#payment-form").offset().top
            }, "fast");
         
        } else {
            $('html, body').animate({
                scrollTop: $("#form_errors").offset().top
            }, "fast");
        }
    }
    const CheckoutStepCheck = (e) => {
        e.preventDefault();

        switch(checkoutStep) {
            case 1:
                Step1();
                break;
            case 2:
                Step2();
                break;
            case 3:

                break;
            default: break;
        }
       
      
    }


   
    return (
        <div className="container py-4" id="co-Container">
  <div className="checkoutForm">
    <div id="form-title" style={{backgroundColor: "#007ace",padding: "2px"}}>
      <h1 className="text-white"><b>Complete Secure Order Now</b></h1>
      </div>
     
  <div className="tab" id="tabgroup">
    <button className={`tablinks ${(checkoutStep===1) ? "active": ""}`} id="firstStep" data-idx="1" data-targetx = "2ndStep" ><span>1</span><br />Enter Details</button>
    <button className={`tablinks ${(checkoutStep===2) ? "active": ""}`} id="2ndStep" data-idx="2" data-targetx = "3rdStep"><span>2</span><br />Confirm Order</button>
    <button className={`tablinks ${(checkoutStep===3) ? "active": ""}`} id="3rdStep" data-idx="3" data-targetx = "4"><span>3</span><br />Payment</button>
  </div>
  <form id="payment-form" name="payment-form" acceptCharset='UTF-8'>
  <div id="form_errors" className={`tabcontent ${(hasErrors===true) ? "": "invisible"}`}>
        {(hasNameError===true) && (
            <p>Name is required</p>
        )}

        {emailErrorMsg} 

        {(hasNumError===true) && (
            <p>Phone is required</p>
        )}

  </div>
  <div id="step1" className={`tabcontent ${(checkoutStep===1) ? "d-block": "d-none"}`}>

  
     <div className="form-floating mb-3 ">
        <input type="text" className={`form-control  ${(hasNameError === true) ? "is-invalid" : ""}`} id="fname" name="fname" placeholder="First Name*" />
        <label htmlFor="fname" className={`${(hasNameError === true) ? "red-text" : "text-dark"}`}>Full Name *</label>
        </div>
   
      <div className="form-floating mb-3">
      
      <input type="email" className={`form-control  deets ${(hasEmailError === true) ? "is-invalid" : ""}`} id="c-email"  name="c-email" placeholder="Email *" />
      <label htmlFor="c-email" className={`${(hasEmailError === true) ? "red-text" : "text-dark"}`}>Email *</label>
    </div>


            <PhoneInput
            placeholder="Enter Phone Number"
            value={phone}
            onChange={setPhone}
            className="react-phone"
                    isValid={validPhone}
            />


      
  </div>
  
  
  
  <div id="step2" className={`tabcontent ${(checkoutStep===2) ? "d-block": "d-none"}`}>
   <ul className="list-group">
    <li className="list-group-item" ><span className="formLabel">Email:&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="li-email" className="formVal emails">{email}</span><a href="#" data-dx="email" className="changeOpt">Change</a></li>
    <li className="list-group-item" ><span className="formLabel">Phone:&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="li-num" className="formVal nums">{phone}</span><a href="#" data-dx="num" className="changeOpt">Change</a></li>
    </ul>
    
    <h4><b>Order Summary</b></h4>
    <div className="my-order">
    <table id="orderTable" >
      <tbody>
    <tr>
      
      <td className="orderItem"><span className="orderImage"><img id="tubol" src={require('./checkout/images/dreambody-bundle.webp')} alt="Dream Body Academy" width="200" height="80" /></span><span id="suppName">{ProductArr[0].name}</span></td>
      <td className="orderPrice">${ProductArr[0].price}</td>
      
    </tr>
    {(shippingFeeVisible===true) && (
          <tr >
          <td className="orderItem"><span className="ms-2">Shipping Fee</span></td>
          <td className="text-end orderPrice">$9.95</td>
            </tr>
    )}

    
  
      </tbody>
    <tfoot>
    <tr className="rowTotals">
    
        <th className="priceTotals">Subtotal</th>
        <td className="orderTots">${producTotal}</td>
      </tr>
    <tr className="rowTotals">
  
        <th className="priceTotals">Total</th>
        <td className="orderTots">${producTotal}</td>
      </tr>
    </tfoot>
    </table>
    <h4><b>Shipping Address</b></h4>
      <input type="hidden" id="price_id" name="price_id" value="" />
      <input type="hidden" id="bundle_price" name="bundle_price" value="" />
    <div className="form-group mb-3">
    
      <input type="text" className="form-control input-lg" id="sname" name="sname" placeholder="Street Name *" />
    
    </div>
    <div className="row">
    <div className="col-md-6">
     <div className="form-group mb-3">
    <input type="text" className="form-control input-lg" id="ctown" name="ctown" placeholder="Town/City *" />
    </div>
    </div>
    <div className="col-md-6">
     <div className="form-group mb-3">
    <input type="text" className="form-control input-lg" id="postCode" name="postCode" placeholder="Postcode *" />
    </div>
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
     <div className="form-group mb-3">
     <Select options={countries} id="cCountry" placeholder="Select Country *" onChange={CountryClick} />
    
      </div>
    </div>
    <div className="col-md-6">
     <div className="form-group mb-3">
    <input type="text" className="form-control input-lg" id="cState" name="cState" placeholder="State/Country *" />
    </div>
    </div>
    </div>
    </div>
    
  </div>
  
  <div id="step3" className={`tabcontent ${(checkoutStep===3) ? "d-block": "d-none"}`}>
  
  <ul className="list-group">
    <li className="list-group-item" ><span className="formLabel">Email:&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="li-emails" className="formVal emails"></span><a href="#" data-dx="email" className="changeOpt">Change</a></li>
    <li className="list-group-item" ><span className="formLabel">Phone:&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="li-nums" className="formVal nums"></span><a href="#" data-dx="num" className="changeOpt">Change</a></li>
   
    </ul>
    <h4><b>Payment Method</b></h4>
    <p>All transactions are secure and encrypted. Credit card information is never stored on our servers.</p>
    <div id="card-errors" role="alert"></div>
   
    <div className="clearfix text-start">
      Pay with your credit card via Stripe. <img src={Cards} id="step-3-card"  alt="Stripe Cards" />
    </div>


    <div className="form-group mb-3">
      <label htmlFor="stripecn" >Card Number *</label>
      
            <div id="stripecn" className="d-block mw-100 w-100">
           
            </div>
    
    </div>
    <div className="row">
        <div className="col-6">
                  <label htmlFor="stripexpd" >
                    Expiry Date
                  </label>
                  <div id="stripexpd">
               
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="stripecc" >
                    Card Code (CVC)
                  </label>
                  <div id="stripecc">
                
                  </div>
          </div>
      </div>
      <div id="error" className="red-text p-1"></div>
      <div id="card-errors" role="alert"></div>
    <div className="input-group w-100" id="scard" >
     
        
        
         

    </div>
    <div id="orderbump">
    <div id="orderbumpBanner" style={{backgroundColor: "#1c2634", padding:"10px"}}>
      <input type="checkbox" id="ob" name="ob" />
      <GoArrowRight className="blink float-start red-text" /><label htmlhtmlFor="ob">Yes! Another Free Bonus!! </label>
      
      <input type="hidden" id="obId" name="obId" value="79" />
      <input type="hidden" id="page" name="page" value="checkout" />
      </div >
      <div className="pt-1">
      <img src={require('./checkout/images/79.webp')} className="img-fluid" />
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
     
  </div>
  

  <div className="d-grid w-75 fw-bold mx-auto" id="buttonHolder" onClick={CheckoutStepCheck}>
  <button className="btn btn-lg btn-warning display-1 position-relative p-0 clearfix text-center fw-bolder">
    {(checkoutStep===1) && ( <img src={Next} className="img-fluid" /> )}
    {(checkoutStep===2) && ( <img src={Final} className="img-fluid" /> )}
    {(checkoutStep===3) && ( <img src={Purchase} className="img-fluid" /> )}
  </button>
  
    
    </div>
   </form>		
    <div id="token"></div>
  
  <div className="footers">
  <p>Secure Order Form – 100% Protected & Safe​</p>
  
  <img src={Cards} id="payment-cards" alt="credit cards" />
   
  <footer>
    <h3><b>KaiserFit</b> – All Rights Reserved – Terms Of Service</h3>
  </footer>
  
      </div>
      </div>
  
  </div>
    )
}

export default CheckoutForm