import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import GetCookie from "../Cookie";

import WebHook from "../WebHook";
import TiktokPixel from 'tiktok-pixel';
import ReactPixel from 'react-facebook-pixel'


export default function CollagenUltimate({num}) {
    const [platinumPack, setPlatinum] = useState("platinum-saver")
    const [purchaseError, setError] = useState(null)
    const orderid = GetCookie('orderid');
    const navigate = useNavigate()



    const ultimateClick = event => {
      setPlatinum(event.target.value);
    }

    const cmData = [
      {id: "platinum-saver", itemid: "cms6", botCount: 6, desc: "cm-upsell"},
      {id: "platinum", itemid: "25267", botCount: 6, desc: "cm-upsell"}
    ]
    const checkoutClick = (e) => {
      if (platinumPack===""){
        e.preventDefault();
        return false
      }
   
      e.target.disabled = true;
      var x = cmData.filter(x=>x.id===platinumPack);
    
      fetch('https://queenformula.net/apiv4/index.php/upsell', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
'x-api-key':'4pX42OnC2TjR',
        },
        body: JSON.stringify({
          cid: GetCookie('cid'),
          orderid: orderid,
          itemid: x[0].itemid,
          desc: x[0].desc,
          bot: x[0].botCount,
          url: window.location.href
        })
      })
      .then((res) => res.json())
      .then((data)=>{
        console.log(data)
        if (data.result){
           

          const hashVal  = [...crypto.getRandomValues(new Uint8Array(8))]
          .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
          const timeStamp = Date.now();    
          const event_id = 'event-'+hashVal+'-'+timeStamp; //unique ID of event
         
        //tiktok
        TiktokPixel.track('CompletePayment',{
          content_id: 'Collagen Matrix',
          content_type: 'product',
          quantity: 1,
          price: data.price,
          value: data.price,
          currency: 'USD'});


      //facebook
      ReactPixel.track('Purchase', {
          value: data.price,
          currency: 'USD'
        }, {eventID:event_id} )


        WebHook('Purchase', event_id)

        
          e.target.innerText = "Purchase Successful!"
          e.target.classList.remove('btn-warning')
          e.target.classList.add('btn-success')
          e.target.classList.remove('btn-outline-dark')
          e.target.classList.add('btn-outline-success')
          setTimeout(() => {
            navigate("/inner-restore", { push: true});
          }, 1000);
        } else {
          setError(data.message)
          e.target.disabled = false
        }
      })
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
            <p className={`text-center text-danger ${(purchaseError!==null) ? "visible":"invisible"}`}>{purchaseError}</p>
              <div className="d-grid gap-2">
              <button className="btn btn-lg btn-warning btn-outline-dark text-capitalize fs-4 py-3 px-3 px-sm-4 py-sm-2 mb-3 fw-bolder"
            
              onClick={checkoutClick}
              
              >Yes! add this to my Order!</button>
              </div>
      </>
    ) 
  }

