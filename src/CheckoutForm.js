import React, {useState, useEffect} from "react";
import Cards from "./vsl-components/images/visa-mastercard-icon.webp";
import Next from "./checkout/images/next-step.webp";
import Final from "./checkout/images/final-step.webp";

import {countries} from "./countries.js";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


import Select from 'react-select'
import $ from "jquery"
import {Prices} from "./prices"

import Gorm from "./Gorm";


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

    const [streetError, setStreetError] = useState(false)
    const [townError, setTownError] = useState(false)
    const [zipError, setZipError] = useState(false)
    const [countryError, setCountryError] = useState(false)


    



      function ProductTable(){
        const ProductArr = Prices.filter((i)=>{
          return (i.id===dba && i.product===productType);
        });
        const producTotal = ((dba==="bronze" || dba==="bronze-saver")) ? parseFloat(ProductArr[0].price) + 9.95 : parseFloat(ProductArr[0].price).toFixed(2);
        const shippingFeeVisible = ((dba==="bronze" || dba==="bronze-saver")) ? true:false;
        return (
          <>
            <table id="orderTable" >
              <tbody>
                <tr>
                  <td className="orderItem">
                    <span className="orderImage">
                    <img id="tubol" src={require('./checkout/images/dreambody-bundle.webp')} alt="Dream Body Academy" width="200" height="80" />
                    </span>
                    <span id="suppName">{ProductArr[0].name}</span>
                    </td>
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
      <input type="hidden" id="price_id" name="price_id" value={ProductArr[0].price_id} />
      <input type="hidden" id="bundle_price" name="bundle_price" value="" />
          </>
        )
      }
 
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

        function Step2Reset() {
          setErrorFlag(false)
          $(".address-input").removeClass("is-invalid")
          $("#cCountry").removeClass("border border-danger")
          setStreetError(false);
          setTownError(false);
          setZipError(false);
          setCountryError(false);
        }
    function Step2() {
        
        Step2Reset();
        const s = $("#sname"); //street
        const t = $("#ctown"); //town
        const p = $("#postCode"); //postcode
        
        var valid = true;

        var inputArrs = [s, t, p];
        
        $.each(inputArrs, function(key, val){    
            if (val[0].value===""){
              console.log(key, val)
              switch(key){
                case 0:
                  setStreetError(true);
                  break;
                case 1:
                  setTownError(true);
                  break;
                case 2:
                  setZipError(true);
                  break;
               default: break;
              }
                val[0].classList.add('is-invalid');
                valid=false
            }
        })

        if(country==="" || country===null || country===undefined) {
          $("#cCountry").addClass("border border-danger")
          setCountryError(true);
            valid=false;
        }

        if (valid){
            setStep(checkoutStep=>checkoutStep+1)
            $('html, body').animate({
                scrollTop: $("#payment-form").offset().top
            }, "fast");
         
        } else {
          setErrorFlag(true);
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



   function FormVals(){
    const editStep1=(e)=>{
      e.preventDefault();
      setStep(1);
    }
    return(
      <ul className="list-group">
        <li className="list-group-item" ><span className="formLabel">Email:&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="li-email" className="formVal emails">{email}</span><a href="#" onClick={editStep1} data-dx="email" className="changeOpt">Change</a></li>
        <li className="list-group-item" ><span className="formLabel">Phone:&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="li-num" className="formVal nums">{phone}</span><a href="#" onClick={editStep1} data-dx="num" className="changeOpt">Change</a></li>
    </ul>
    )
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
  <div id="payment-form" name="payment-form">
  <div id="form_errors" className={`tabcontent ${(hasErrors===true) ? "": "invisible"}`}>
        {(hasNameError===true) && (
            <p>Name is required</p>
        )}

        {emailErrorMsg} 

        {(hasNumError===true) && (
            <p>Phone is required</p>
        )}

        {(streetError===true) && (
            <p>Street Name is Required</p>
        )}

        {(townError===true) && (
            <p>City/Town is Required</p>
        )}

        {(zipError===true) && (
            <p>Zip/Postal Code is Required</p>
        )}

        {(countryError===true) && (
            <p>Country is Required</p>
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
          <div className="d-grid w-75 fw-bold mx-auto" id="buttonHolder">
            <button className="btn btn-lg btn-warning display-1 position-relative p-0 mt-3 clearfix text-center fw-bolder" onClick={CheckoutStepCheck}>
           <img src={Next} className="img-fluid" />
           </button>
           </div>
      
  </div>
  
  
  
  <div id="step2" className={`tabcontent ${(checkoutStep===2) ? "d-block": "d-none"}`}>
   
    <FormVals />

    <h4><b>Order Summary</b></h4>
    <div className="my-order">

    <ProductTable />
    
    
    <div className="form-group mb-3">
    
      <input type="text" className="form-control input-lg address-input" id="sname" name="sname" placeholder="Street Name *" />
    
    </div>
    <div className="row">
    <div className="col-md-6">
     <div className="form-group mb-3">
    <input type="text" className="form-control input-lg address-input" id="ctown" name="ctown" placeholder="Town/City *" />
    </div>
    </div>
    <div className="col-md-6">
     <div className="form-group mb-3">
    <input type="text" className="form-control input-lg address-input" id="postCode" name="postCode" placeholder="Postcode *" />
    </div>
    </div>
    </div>
    <div className="row">
    <div className="col-md-6 ">
     <div className="form-group mb-3 ">
     <Select options={countries} id="cCountry" className="rounded address-input " placeholder="Select Country *" onChange={CountryClick} />
    
      </div>
    </div>
    <div className="col-md-6">
     <div className="form-group mb-3">
    <input type="text" className="form-control input-lg address-input" id="cState" name="cState" placeholder="State/Country *" />
    </div>
    </div>
    </div>
    </div>
    <div className="d-grid w-75 fw-bold mx-auto" id="buttonHolder">
            <button className="btn btn-lg btn-warning display-1 position-relative p-0 mt-3 clearfix text-center fw-bolder" onClick={CheckoutStepCheck}>
           <img src={Final} className="img-fluid" />
           </button>
           </div>
  </div>

  <div id="step3" className={`tabcontent ${(checkoutStep===3) ? "d-block": "d-none"}`}>
  
    <FormVals />
    <h4><b>Payment Method</b></h4>
    <p>All transactions are secure and encrypted. Credit card information is never stored on our servers.</p>
    <div id="card-errors" role="alert"></div>
   
    <div className="clearfix text-start">
      Pay with your credit card via Stripe. <img src={Cards} id="step-3-card"  alt="Stripe Cards" />
    </div>


      
      <Gorm />
       
 
     
  </div>

 



   </div>		
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