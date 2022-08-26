import React from "react";
import {BsEnvelope, BsTelephoneFill} from "react-icons/bs"
import logo from './kwhite.webp';
import guarantee from './Guarantee.webp';

const HeaderCheckout=()=> {
 
    return (
        <>
        <div className="container-fluid bg-dark py-2">
      
        <div className="row">
          
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 text-center">
                <img src={logo} id="klogo" alt="KaizerFit" />
       
            </div>
         <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-center">
          <img src={guarantee} className="img-fluid" alt="trust-banner" />
         </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 text-white mt-3 mt-lg-0 text-center text-lg-start">
            <p className="mt-3 mt-lg-0 lh-1 d-inline fs-6"><small>Need Help With Your Order? Contact Us: </small></p>
       
            <div className="d-lg-flex flex-row bd-highlight mb-3">
              <div className="p-1 bd-highlight" style={{fontSize: "14px"}}><BsEnvelope className="position-relative me-1 " />service@kaiserfit.net</div>
              <div className="p-1 bd-highlight" style={{fontSize: "14px"}}><BsTelephoneFill className="position-relative me-1 " />+1 833 692 0371</div>
              
            </div>
            
    
            </div>
            </div>
    
        </div>

        </>
    )
}

export default HeaderCheckout