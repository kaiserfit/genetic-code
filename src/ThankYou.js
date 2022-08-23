import React from "react";
import GetCookie from "./Cookie";
import Step3 from "./step3.webp"
const ThankYou =() =>{

    document.title = "Thank You!"
    function YellowTops(){
        return (
        <>
            <div className="container text-center py-2 py-sm-4 my-4" style={{backgroundColor: "#fcffa6"}}>
                <h1 className="mb-1" style={{color: '#b10000', fontWeight:"900"}}>
                <u>Congratulations, Your Order Is Complete!</u>
                </h1>
            </div>

            <div className="container mt-4">
                <h3 className="p-2 text-center rounded" style={{color: "#b10000",fontWeight: "bold",backgroundColor: "yellow"}}>
                    NOTE: There are important details about your order on this page so please read every
                    word of this page.
                </h3>
            </div>
        </>
        )
    }


    function StepColumn() {
        return (
            <div className="col-12 col-sm-8 offset-sm-4 col-md-6 offset-md-3 p-2 p-sm-4 border border-dark">
                <h4 className="red-text mb-3">Step 1 – Check Your Email For Account Details & Tracking Number</h4>
                <div className="my-3 my-sm-4">
                <h5>Access Your KaiserCoach account with your details below</h5>
                <h5 className="text-primary">Email: {GetCookie('cEmail')}</h5>
                <h5 className="text-primary">Password: {GetCookie('hash')}</h5>
                </div>
                <div className="alert alert-warning fw-bold" role="alert">
                Please check your Junk and Spam folder for your login details to your Dream Body In 90 Program & all your FREE Bonuses. 
                <br/><br/>
                Your tracking number will be sent to you in 1-2 Business Days.
                </div>
            </div>
        )
    }
    return (
        <div className="container-fluid">
            <div className="text-center">
                <img src={Step3} style={{height: "30px", width: "610px", maxWidth: "100%"}}></img>
            </div>
            <YellowTops />
            <StepColumn />
            <h4></h4>
        </div>

    )
}

export default ThankYou