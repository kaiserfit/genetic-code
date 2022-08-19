import React, {useState} from "react";
import AddtoCart from "./vsl-components/images/add-cart.webp";
import {useNavigate} from "react-router-dom";
function UltimatePack({num, setRoute}) {
    const [platinumPack, setPlatinum] = useState("")
    const navigate = useNavigate();
    const ultimateClick = event => {
      setPlatinum(event.target.value);
    }


    const checkoutClick = (e) => {
      if (platinumPack===""){
        e.preventDefault();
        return false
      }
      document.cookie="product="+platinumPack+";path=/";
      setRoute("checkout")
      navigate("/checkout", { replace: true });
    }
  
  
    return (
      <>
      <div className="text-center my-3 subscribe-plan" onChange={ultimateClick} >
        <p className={`text-info ${(platinumPack==="") ? "" : "invisible"}`}>Please Choose Your Purchase Plan</p>
      <input type="radio"  name="platinum-pack" id={`platinum-saver${num}`}  className="platinum-pack" value="platinum-saver"  />
      <label htmlFor={`platinum-saver${num}`} className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 20%)</small></label>
      <br /><br />
      <input type="radio" name="platinum-pack" id={`platinum-basic${num}`} className="platinum-pack" value="platinum" />
      <label htmlFor={`platinum-basic${num}`} className="payment-plan ms-1">One-Time Purchase</label>
    </div>
            <div className="price-text">
                {platinumPack === "platinum-saver" && (<p className="product-price">$39 <span className="per-bottle"> / bottle</span></p>)}   
                {platinumPack === "platinum" && (<p className="product-price">$49 <span className="per-bottle"> / bottle</span></p>)}   
                
            </div>
                            <a href="#" className="checkout-button"  onClick={checkoutClick} >
                                <img src={AddtoCart} className="img-fluid "  alt="cart button" />
                            </a>
      </>
    ) 
  }

  export default UltimatePack