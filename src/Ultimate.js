import React, {useState} from "react";
import AddtoCart from "./vsl-components/images/add-cart.webp";
import {useNavigate} from "react-router-dom";
function UltimatePack({num, setRoute}) {
    const [platinumPack, setPlatinum] = useState("platinum-saver")
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
      navigate("/checkout", { push: true });
    }
  
  
    return (
      <>
      <div className="text-center my-3 subscribe-plan"  >
        {/* <p className={`text-info ${(platinumPack==="") ? "" : "invisible"}`}>Please Choose Your Purchase Plan</p> */}
      <input type="radio"  name={`platinum-pack${num}`} id={`platinum-saver${num}`} onChange={ultimateClick} className="platinum-pack" value="platinum-saver" checked={platinumPack==="platinum-saver"}  />
      <label htmlFor={`platinum-saver${num}`} className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 20%)</small></label>
      <br /><br />
      <input type="radio" name={`platinum-pack${num}`} id={`platinum-basic${num}`} onChange={ultimateClick} className="platinum-pack" value="platinum" checked={platinumPack==="platinum"} />
      <label htmlFor={`platinum-basic${num}`} className="payment-plan ms-1">One-Time Purchase</label>
    </div>
            <div className="price-text">
                {platinumPack === "platinum-saver" && (<p className="product-price">$39 <span className="per-bottle"> / bottle</span></p>)}   
                {platinumPack === "platinum" && (<p className="product-price">$49 <span className="per-bottle"> / bottle</span></p>)}   
                
            </div>
                            <button className="btn btn-link checkout-button"  onClick={checkoutClick} >
                                <img src={AddtoCart} className="img-fluid "  alt="cart button" />
                            </button>
      </>
    ) 
  }

  export default UltimatePack