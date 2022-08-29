import React, {useState} from "react";
import AddtoCart from "./vsl-components/images/add-cart.webp";
import {useNavigate} from "react-router-dom";
function BasicPack({num, setRoute}) {
    const [basicPack, setBronze] = useState("bronze-saver")
    const navigate = useNavigate();

   
    const basicClick = (event) => {
      console.log(event.target)
      setBronze(event.target.value);
    }


    const checkoutClick= (e) => {
      if (basicPack===""){
        e.preventDefault();
        return false
      }
      document.cookie="product="+basicPack+";path=/";
      setRoute("checkout")
      navigate("/checkout", { push: true });
    }
  
  
    return (
      <>
      <div className="text-center my-3 subscribe-plan" >
        {/* <p className={`text-info ${(basicPack==="") ? "" : "invisible"}`}>Please Choose Your Purchase Plan</p> */}
      <input type="radio"  name={`bronze-pack${num}`} id={`bronze-saver${num}`} onChange={basicClick}  className="bronze-pack" value="bronze-saver" checked={basicPack==="bronze-saver"}  />
      <label htmlFor={`bronze-saver${num}`} className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 15%)</small></label>
      <br /><br />
      <input type="radio" name={`bronze-pack${num}`} id={`bronze-basic${num}`} onChange={basicClick} className="bronze-pack" value="bronze" checked={basicPack==="bronze"} />
      <label htmlFor={`bronze-basic${num}`}  className="payment-plan ms-1">One-Time Purchase</label>
    </div>
            <div className="price-text">
                {basicPack === "bronze-saver" && (<p className="product-price">$59 <span className="per-bottle"> / bottle</span></p>)}   
                {basicPack === "bronze" && (<p className="product-price">$69 <span className="per-bottle"> / bottle</span></p>)}   
                
            </div>
                            <button  className="btn btn-link p-0 checkout-button"  onClick={checkoutClick} >
                                <img src={AddtoCart} className="img-fluid "  alt="cart button" />
                            </button>


                  
      </>
    ) 
  }

  export default BasicPack