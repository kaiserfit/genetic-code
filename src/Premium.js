import React, {useState} from "react";
import AddtoCart from "./vsl-components/images/add-cart.webp";
import {useNavigate} from "react-router-dom";
function PremiumPack({num, setRoute}) {
    const [goldPack, setGold] = useState("")
    const navigate = useNavigate();
    const premiumClick = event => {
      setGold(event.target.value);
    }


    const checkoutClick = (e) => {
      if (goldPack===""){
        e.preventDefault();
        return false
      }
      document.cookie="product="+goldPack+";path=/";
      setRoute("checkout")
      navigate("/checkout", { replace: true });
      
    }
  
  
    return (
      <>
      <div className="text-center my-3 subscribe-plan" onChange={premiumClick} >
        <p className={`text-info ${(goldPack==="") ? "" : "invisible"}`}>Please Choose Your Purchase Plan</p>
      <input type="radio"  name="gold-pack" id={`gold-saver${num}`}  className="gold-pack" value="gold-saver"  />
      <label htmlFor={`gold-saver${num}`} className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 20%)</small></label>
      <br /><br />
      <input type="radio" name="gold-pack" id={`gold-basic${num}`} className="gold-pack" value="gold" />
      <label htmlFor={`gold-basic${num}`} className="payment-plan ms-1">One-Time Purchase</label>
    </div>
            <div className="price-text">
                {goldPack === "gold-saver" && (<p className="product-price">$49 <span className="per-bottle"> / bottle</span></p>)}   
                {goldPack === "gold" && (<p className="product-price">$59 <span className="per-bottle"> / bottle</span></p>)}   
                
            </div>
                            <a href="#" className="checkout-button"  onClick={checkoutClick} >
                                <img src={AddtoCart} className="img-fluid "  alt="cart button" />
                            </a>


                  
      </>
    ) 
  }

  export default PremiumPack