import React from "react";
import Stop from "../stop.webp"
import Ribbon from "../ribbon.webp"
export default function UpsellBanner() {
    
    const cname = localStorage.getItem("customerName")

    return (
        <>
        <div className="container-fluid py-2 bg-warning">
            <h4 className="red-text text-center"><b>IMPORTANT! Do NOT Close This Window Or Click The “Back” Button.</b><br/>
                Clicking your “back” button can result in your card being double-billed</h4>
        </div>
        <div className="container">
            
            <div className="col-12 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3 my-3 text-center">
                <h1 className="fw-bolder text-info mb-3">{cname}</h1>
                <div className="row w-100">
                    <div className="col-12 col-sm-12 col-md-4 "><img src={Stop} alt="stop sign" className="img-fluid" /></div>
                    <div className="col-12 col-sm-12 col-md-8 text-capitalize">
                        <h4 style={{transform: "translate(0, 30%)"}}>your order is not yet complete</h4>
                        {/* <hr></hr>
                        <h5 className="fw-light">Please Watch The Important Message Below.</h5>     */}
                    </div>
                </div>
                <img src={Ribbon} alt="Limited Time Offer Banner" className="img-fluid my-3"></img>

                <div className="d-block w-100 bg-danger text-white text-capitalize p-2 p-sm-3 fs-4" id="pricing-warning">
                *Special pricing not guaranteed past today!
                </div>
            </div>
            

            

        </div>
        </>
    )
}