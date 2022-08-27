import React, {useState, useEffect} from "react";
import GetCookie from "./Cookie";
import Step3 from "./step3.webp"
import KaiserBurner from "./thankyou/Kaiser-Burner.webp"
import DreamyLean from "./thankyou/Dreamy-Lean.webp"
import NeuroDrive from "./thankyou/Neuro-Drive.webp"
import CollagenMatrix from "./thankyou/Collagen-Matrix.webp"
import appleStore from "./thankyou/applestore.webp"
import playstore from "./thankyou/playstore.webp"
import $ from "jquery"
import TiktokPixel from 'tiktok-pixel';
import ReactPixel from 'react-facebook-pixel';
import { useLocation } from "react-router-dom";
import WebHook from "./WebHook";
const ThankYou =() =>{
    const url = window.location.href;
    const botCount = 3;
    const orderid=GetCookie('orderid');
    document.title = "Thank You!"
    
    const [loading, isLoading] = useState(false)
    const [neuro, setNeuro] = useState(1)
    const [burner, setBurner] = useState(1)
    const [lean, setLean] = useState(1)
    const [collagen, setCollagen] = useState(1)
    const {state} = useLocation();
    const { price } = state;
    console.log(price);
   
    useEffect(()=>{
        $('html, body').animate({
            scrollTop: $("#topBanner").offset().top
        }, "fast");

        const hashVal  = [...crypto.getRandomValues(new Uint8Array(8))]
      .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
      const timeStamp = Date.now();    
      const event_id = 'event-'+hashVal+'-'+timeStamp; //unique ID of event
    TiktokPixel.init('CBSRIBJC77U6QAIGVM3G');
    TiktokPixel.pageView();
          
    TiktokPixel.track('CompletePayment',{
        content_id: 'Kaiser Burner',
        content_type: 'product',
        quantity: 1,
        price:price,
        value: price,
        currency: 'USD'});




    ReactPixel.init('334082198751683')
    ReactPixel.pageView();
    ReactPixel.track('Purchase', {
        value: price,
        currency: 'USD'
      }, {eventID:event_id} )

      WebHook('Purchase', event_id)
    }, [])

    function YellowTops(){

        return (
        <>
            <div className="container text-center py-2 py-sm-4 my-4" style={{backgroundColor: "#fcffa6"}} id="topBanner">
                <h1 className="mb-1 text-decoration-underline" style={{color: '#b10000', fontWeight:"900"}}>
                Congratulations, Your Order Is Complete!
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

    function PurchaseSuccess(){
        return(
            <span className="text-success">Payment Successful!</span>
        )
    }

    function PurchaseFail(){
        return(
            <span className="text-danger">Something went wrong, Please Check your card or contact us for assistance with this purchase</span>
        )
    }
    const handleClick=(e)=>{
        e.target.disabled = true;
        console.log(e.target.dataset);
       var set = e.target.dataset
        fetch('https://pay.kaiserfitapp.com/stripe/upsell.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cid: GetCookie('cid'),
            orderid: orderid,
            itemid: set.id,
            desc: set.desc,
            bot: botCount,
            url: url
          })
        })
        .then((res) => res.json())
        .then((data)=>{
          if (data.result){
              const hashVal  = [...crypto.getRandomValues(new Uint8Array(8))]
              .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
              const timeStamp = Date.now();    
              const event_id = 'event-'+hashVal+'-'+timeStamp; //unique ID of event
              console.log(data)
            //tiktok
                TiktokPixel.track('CompletePayment',{
                content_id: set.content,
                content_type: 'product',
                quantity: 1,
                price: 97.00,
                value: 97.00,
                currency: 'USD'});


            //facebook
            ReactPixel.track('Purchase', {
                value: 97.00,
                currency: 'USD'
              }, {eventID:event_id} )


              WebHook('Purchase', event_id)
              // 2 is code for successful purchase
                switch(set.id){
                    case "25201":
                        setNeuro(2)
                        break;
                    case "25181":
                        setLean(2);
                    break;
                    case "25174":
                        setBurner(2);
                    break;
                    case "25266":
                        setCollagen(2);
                    break;
                    default: break;
                }
          } else {
            switch(set.id){
                // 3 is code for failed purchase
                case "25201":
                    setNeuro(3)
                    break;
                case "25181":
                    setLean(3);
                break;
                case "25174":
                    setBurner(3);
                break;
                case "25266":
                    setCollagen(3);
                break;
                default: break;
            }
          }

          e.target.disabled = false
        })
    }
    function StepColumn() {
        return (
            <div className="col-12 col-sm-8 offset-sm-4 col-md-6 offset-md-3 p-2 p-sm-4 border border-dark" >
                <section className="step mb-3 py-3 border-bottom">
                    <h4 className="red-text mb-3 fw-bolder">Step 1 – Check Your Email For Account Details & Tracking Number</h4>
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
                </section>

                <section className="step mb-3 py-3 border-bottom">
                    <h4 className="red-text mb-3 fw-bolder">
                    Step 2 – Hear from the AMAZING ladies who lost UNBELIEVABLE amounts of fat before you to unlock their own dream body with the KaiserBody Bundle
                    </h4>

                    <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/581982944?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}} title="Customer Success"></iframe></div>
                </section>

                <section className="step mb-3 py-3 border-bottom">
                    <h4 className="red-text mb-2 fw-bolder">
                    Step 3 – Take Advantage Of These Last Chance Offers:
                    </h4>

                    <h4 className="red-text text-center mb-3 fw-bolder">
                    TODAY ONLY- Exclusive Offer For KaiserBody Bundle Customers
                    </h4>

                    <div className="text-center">
                        <div className="product-wrap py-2 border-bottom border-dark">
                            <img src={NeuroDrive} alt="3 bottles Neuro Drive" className="img-fluid w-75 mb-1" />
                            <h2 className="red-text mb-2 fw-bolder">
                                $97.00
                            </h2>
                            <h4>3 Bottles of Neuro Drive</h4>
                            <h2 className="red-text mb-2 fw-bolder">
                                FREE SHIPPING
                            </h2>
                            <p className="fs-5 mb-3">
                            Neuro Drive is a super nutrient for the brain. That promises Laser-like focus. Super productivity. Less brain fog. Enhanced memory. Boundless mental and physical energy.
                            </p>

                            <p>
                                {neuro===2 && (<PurchaseSuccess />)}
                                {neuro===3 && (<PurchaseFail />)}
                            </p>
                            <button className="btn btn-lg btn-warning text-capitalize fs-3 py-3 px-3 px-sm-4 py-sm-2 fw-bolder"
                            data-desc="ty-NeuroDrive"
                            data-id="25201"
                            onClick={handleClick}
                            data-content="Neuro Drive"
                            >
                                YES! Add This to my order
                            </button>
                        </div>

                        <div className="product-wrap py-2 border-bottom border-dark">
                        <img src={DreamyLean} alt="3 bottles Dreamy Lean" className="img-fluid w-75 mb-1" />
                            <h2 className="red-text mb-2 fw-bolder">
                                $97.00
                            </h2>
                            <h4>3 Bottles of Dreamy Lean</h4>
                            <h2 className="red-text mb-2 fw-bolder">
                                FREE SHIPPING
                            </h2>
                            <p className="fs-5 mb-3">
                            Burn Fat While Sleeping & Supercharge Your Night Time Fat Loss. Achieve AMAZING Quality Sleep (Best Sleep Of Your Life Guaranteed) and Supercharge Night Time Fat Loss
                            </p>

                            <p>
                                {lean===2 && (<PurchaseSuccess />)}
                                {lean===3 && (<PurchaseFail />)}
                            </p>
                            <button className="btn btn-lg btn-warning text-capitalize fs-3 py-3 px-3 px-sm-4 py-sm-2 fw-bolder"
                            data-desc="ty-DreamyLean"
                            data-id="25181"
                            onClick={handleClick}
                            data-content="Dreamy Lean"
                            >
                                YES! Add This to my order
                            </button>
                        </div>


                        <div className="product-wrap py-2 border-bottom border-dark">
                        <img src={KaiserBurner} alt="3 bottles Kaiser Burner" className="img-fluid w-75 mb-1" />
                            <h2 className="red-text mb-2 fw-bolder">
                                $97.00
                            </h2>
                            <h4>3 Bottles of Kaiser Burner</h4>
                            <h2 className="red-text mb-2 fw-bolder">
                                FREE SHIPPING
                            </h2>
                            <p className="fs-5 mb-3">
                            Burn fat, destroy cravings and feel full while achieving your Dream Body.
      
                            Stock up on the most powerful fat burning formula ever created and make sure you never run out of stock when you need it best.
                            </p>

                            <p>
                                {burner===2 && (<PurchaseSuccess />)}
                                {burner===3 && (<PurchaseFail />)}
                            </p>
                            <button className="btn btn-lg btn-warning text-capitalize fs-3 py-3 px-3 px-sm-4 py-sm-2 fw-bolder"
                            data-desc="ty-KaiserBurner"
                            data-id="25174"
                            onClick={handleClick}
                            data-content="Kaiser Burner"
                            >
                                YES! Add This to my order
                            </button>
                        </div>


                        <div className="product-wrap py-2 border-bottom border-dark">
                        <img src={CollagenMatrix} alt="3 bottles Collagen Matrix" className="img-fluid w-75 mb-1" />
                            <h2 className="red-text mb-2 fw-bolder">
                                $97.00
                            </h2>
                            <h4>3 Bottles of Collagen Matrix</h4>
                            <h2 className="red-text mb-2 fw-bolder">
                                FREE SHIPPING
                            </h2>
                            <p className="fs-5 mb-3">
                            PREVENT LOOSE SKIN, Reverse aging and look 10+years younger Imagine looking and feeling 10+ years younger by REVITALIZING your skin and Preventing Loose Skin by tightening your skin to perfection… 
                            </p>

                            <p>
                                {collagen===2 && (<PurchaseSuccess />)}
                                {collagen===3 && (<PurchaseFail />)}
                            </p>
                            <button className="btn btn-lg btn-warning text-capitalize fs-3 py-3 px-3 px-sm-4 py-sm-2 fw-bolder"
                            data-desc="ty-CollagenMatrix"
                            data-id="25266"
                            onClick={handleClick}
                            data-content="Collagen Matrix"
                            >
                                YES! Add This to my order
                            </button>
                        </div>


                    </div>


                </section>


                <section className="step mb-3 py-3 border-bottom">
                    <h4 className="red-text mb-3 fw-bolder">
                        Step 4- Important Details About Your Order (Please Read)
                    </h4>

                <ol>
                    <li className="mb-3">
                        If you have any questions or you need to contact us for any reason, please email us at service@kaiserfit.net OR call us directly at 1-833-692-0371. We’d be glad to help you with anything you need.
                    </li>
                    <li className="mb-3">
                        Your order will be shipped out right away and will arrive at your house within 2-5 business days (for U.S. and Canadian locations).
                    </li>
                    <li className="mb-3">
                        Your order will show up on your credit card as Kaiserfit (not kaiserbody).
                    </li>
                    <li className="mb-3">
                    As a reminder, your order is backed by both of our 100% and 200% lifetime money back guarantees, so you have nothing to lose. Feel free to take your time and try Queen Formula for as long as you’d like. Both guarantees are still valid even if you're down to your last capsule of Queen Formula. 
                    </li>
                    <li className="mb-3">
                        As a <strong>FREE bonus, <u>Coach Shane</u></strong> will send you <u>VERY IMPORTANT EMAILS</u> daily to
                        help keep you motivated, share Secrets with you only shared with his
                        private clients and give you FREE gifts to help you on this journey.
                        <strong><u>Please read them daily to achieve all your Dream Body Goals</u></strong>. 
                    </li>
                </ol>
                </section>


                <section className="step mb-3 py-3 border-bottom">
                    <h4 className="red-text mb-3 fw-bolder">
                    Step 5 – Download The App For EASY Access Of Your Programs (Please Use Details Above To Login)
                    </h4>

                    <div className="row mb-3">
                        <div className="col-12 col-sm-4 offset-sm-2 mb-3">
                        <a href="https://play.google.com/store/apps/details?id=com.app.kaiserfitqueens">
                            <img src={playstore} alt="playstore button" className="img-fluid storelinks" />
                        </a>
                        </div>
                        <div className="col-12 col-sm-4">
                        <a href="https://apps.apple.com/ph/app/kaiserfit/id1527051183">
                            <img src={appleStore} alt="applestore button" className="img-fluid storelinks" />
                        </a>
                        </div>
                    </div>
                    <h6 className="text-primary ">KaiserFit Club can be found under the 'My Stuff' Section of the App <span className="badge bg-info">Info</span></h6>
                </section>


                <section className="step mb-3 py-3 border-bottom">
                    <h4 className="red-text mb-3 fw-bolder">
                        Step 6 – Join The VIP Group for access to AMAZING bonuses and FREE Bonus Gifts
                    </h4>
                    <div className="text-center w-75 mx-auto mt-3">
                      
                        <div className="d-grid gap-2">
                          <a role="button" target="_blank" without rel="noreferrer" href="https://www.facebook.com/groups/510393336135512" type="button" name="" id="gold" className="btn text-decoration-none fw-bolder fs-3">
                            Join VIP Group
                            </a>
                        </div>
                        </div>
                
                  
                </section>

                <section className="step mb-3 py-3">
                    <h4 className="red-text mb-3 fw-bolder">
                        Step 7 – How To Contact Us
                    </h4>

                    <h4>If you need to contact us for any reason, you can do so by phone or email. We have a special VIP phone line set up just for customers like you.</h4>
        
                    <h2><b><a href="mailto:service@kaiserfit.net">service@kaiserfit.net</a></b></h2>
                    <h4>
                    Or call us on:
                </h4>
                    <h3>1-833-692-0371</h3>

                </section>
            </div>
        )
    }
    return (
        <div className="container-fluid">
            <div className="text-center">
                <img src={Step3} alt="steps banner" style={{height: "30px", width: "610px", maxWidth: "100%"}}></img>
            </div>
            <YellowTops />
            <StepColumn />
            <h4></h4>
        </div>

    )
}

export default ThankYou