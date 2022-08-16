import React, {useState} from "react";
import AddtoCart from "./vsl-components/images/add-cart.webp";

function BasicPack({num}) {
    const [basicPack, setBronze] = useState("")
    
    const basicClick = event => {
      setBronze(event.target.value);
    }


    const checkoutClick = () => {
      console.log(basicPack);
    }
  
  
    return (
      <>
      <div className="text-center my-3 subscribe-plan" onChange={basicClick} >
        <p className={`text-info ${(basicPack==="") ? "" : "invisible"}`}>Please Choose Your Purchase Plan</p>
      <input type="radio"  name="bronze-pack" id={`bronze-saver${num}`}  className="bronze-pack" value="bronze-saver"  />
      <label htmlFor={`bronze-saver${num}`} className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 20%)</small></label>
      <br /><br />
      <input type="radio" name="bronze-pack" id={`bronze-basic${num}`} className="bronze-pack" value="bronze" />
      <label htmlFor={`bronze-basic${num}`} className="payment-plan ms-1">One-Time Purchase</label>
    </div>
            <div className="price-text">
                {basicPack === "bronze-saver" && (<p className="product-price">$59 <span className="per-bottle"> / bottle</span></p>)}   
                {basicPack === "bronze" && (<p className="product-price">$69 <span className="per-bottle"> / bottle</span></p>)}   
                
            </div>
                            <a href="#0" className="checkout-button"  onClick={checkoutClick} >
                                <img src={AddtoCart} className="img-fluid "  alt="cart button" />
                            </a>


                  
      </>
    ) 
  }

  export default BasicPack