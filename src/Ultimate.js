import React, {useState} from "react";
import AddtoCart from "./vsl-components/images/add-cart.webp";

function UltimatePack({num}) {
    const [platinumPack, setPlatinum] = useState("")
    const ultimateClick = event => {
      setPlatinum(event.target.value);
    }


    const checkoutClick = () => {
      console.log(platinumPack);
    }
  
  
    return (
      <>
      <div className="text-center my-3 subscribe-plan" onChange={ultimateClick}>
      <input type="radio"  name="platinum-pack" id={`platinum-saver${num}`}  className="platinum-pack" value="platinum-saver" />
      <label htmlFor={`platinum-saver${num}`} className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 20%)</small></label>
      <br /><br />
      <input type="radio" name="platinum-pack" id={`platinum-basic${num}`}  className="platinum-pack" value="platinum" />
      <label htmlFor={`platinum-basic${num}`} className="payment-plan ms-1">One-Time Purchase</label>
    </div>
            <div className="price-text">
                {platinumPack === "platinum-saver" && (<p className="product-price">$39 <span className="per-bottle"> / bottle</span></p>)}   
                {platinumPack === "platinum" && (<p className="product-price">$49 <span className="per-bottle"> / bottle</span></p>)}   
                
            </div>
                            <a href="#0" className="checkout-button"  onClick={checkoutClick} >
                                <img src={AddtoCart} className="img-fluid "  alt="cart button" />
                            </a>
      </>
    ) 
  }

  export default UltimatePack