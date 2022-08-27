import React from "react";
import WebHook from "../WebHook";
import TiktokPixel from 'tiktok-pixel';
import ReactPixel from 'react-facebook-pixel'
import FaShippingFast from "react-icons/fa";
import Stop from "../stop.webp"
const DreamyLean = () => {
    document.title="Dreamy Lean"
    const cname = localStorage.getItem("customerName")

    return (
        <div className="container-fluid px-0 min-vh-100">
            
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-3 text-center">
                <h1 className="fw-bolder text-info mb-3">{cname}</h1>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 "><img src={Stop} alt="stop sign" className="img-fluid" /></div>
                    <div className="col-12 col-sm-12 col-md-8 text-capitalize">
                        <h4 style={{transform: "translate(0, 70%)"}}>your order is not yet complete</h4>
                        {/* <hr></hr>
                        <h5 className="fw-light">Please Watch The Important Message Below.</h5>     */}
                    </div>
                </div>
            </div>
            

            

        </div>
    )
}

export default DreamyLean