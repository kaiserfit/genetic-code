import React from 'react';
import GetCookie from '../Cookie';
import Basic from "../vsl-components/images/Products/1-bottle.webp";
import Premium from "../vsl-components/images/Products/3-bottles.webp";
import Ultimate from "../vsl-components/images/Products/6-bottles.webp";
import AddtoCart from "../vsl-components/images/add-cart.webp";
import Cards from "../vsl-components/images/visa-mastercard-icon.webp";
import MoneyBackImage from "../vsl-components/images/moneyback-guarantee.webp"
const VslContent = ({vidWatched}) => {

    function Products(){
        const checkHandler = (e)=> {
            console.log(e.target.value);
        }
        return (
            <div className="product-wrap" id="wrap-1">
                <div className="container product-section text-center d-none d-sm-none d-md-block">
                    <div className="text-center text-capitalize display-4 mb-3 fw-light bundle-suggestion" >

                    </div>
                    <div className="list-head text-center">
                    Claim Your Savings Bundle<br />
                    While Stocks Last
                    </div>
                
                    <div className="row" id="wrap-2">
                    
                    <div className="col-12 col-sm-4 col-md-4 padding-2">
                        <div className="gray bordered padding-2 border-default product-pack lh-1 text-center">
                                <div className="bundle-name">BASIC</div>
                                <span className="bottle">1 BOTTLE</span><br />
                                <span className="day-supply mb-3">30 Day Supply</span><br />
                                <img src={Basic} className="img-fluid " alt="1 bottle queen formula" />

                            

                        

                                <ul className="list-unstyled text-start bonus-summary" >
                                <li className="bullets">
                                    <span className="be-3 red-text">&#x2718;</span> Shipping NOT Included
                                </li>
                                <li className="bullets">
                                    <span className="be-3 bright-green">&#10004;</span> Queen Formula
                                </li>
                                <li className="bullets">
                                    <span className="be-3 bright-green">&#10004;</span> Kaiser Coach
                                </li>
                                <li className="bullets">
                                    <span className="be-3 bright-green">&#10004;</span> Unlimited 1 on 1 Coaching
                                </li>
                                <li className="bullets">
                                    <span className="be-3 bright-green">&#10004;</span> Dream Body In 90 Program
                                </li>
                                <li className="bullets">
                                    <span className="be-3 bright-green">&#10004;</span> Custom Meal Planner
                                </li>
                                <li className="bullets">
                                    <span className="be-3 bright-green">&#10004;</span> KaiserFit CookBook
                                </li>
                                <li className="bullets">
                                    <span className="be-3 bright-green">&#10004;</span> Beach Body Blueprint
                                </li>
                                <li className="bullets">
                                    <span className="be-3 bright-green">&#10004;</span> Home Workouts For Rapid Fat Loss
                                </li>
                            
                                </ul>
                        
                            

                                <div className="text-center my-3 subscribe-plan" onChange={checkHandler}>
                                <input type="radio"  name="bronze-pack" id="bronze-saver" className="bronze-pack" value="bronze-saver"  />
                                <label htmlFor="bronze-saver" className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 15%)</small></label>
                                <br /><br />
                                <input type="radio" name="bronze-pack" id="bronze-basic" className="bronze-pack" value="bronze" />
                                <label htmlFor="bronze-basic" className="payment-plan ms-1">One-Time Purchase</label>
                                </div>

                                <div className="price-text">
                                
                        <p className="product-price">$59 <span className="per-bottle"> / bottle</span></p>
                                </div>
                            
                                <a href="#0" className="checkout-button">
                                <img src={AddtoCart} className="img-fluid " alt="cart button" />
                                </a>
                                <div style={{width: '90%', margin: 'auto'}}>
                                <img src={Cards} className="img-fluid " alt="stripe cards" />
                                </div>

                                <div className="bottom-strike gray d-none">
                                    <span >
                                    <span className="gray">$119</span> 
                                    </span><b>$69</b>
                                </div>
                        

                            
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 padding-2">
                        <div className="green bordered padding-2 border-green product-pack lh-1 text-center text-black">
                        <div className="bundle-name bundle-ultimate">ULTIMATE</div>
                            <span className="bottle">6 BOTTLES</span><br />
                            <span className="day-supply mb-3">180 Day Supply</span><br />
                            <img src={Ultimate} className="img-fluid " alt="6 bottles queen formula" />
                        


                            

                            <ul className="list-unstyled text-start bonus-summary text-black" >
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span><strong>BEST Bundle For Your Goal: <span className="wg-text">{GetCookie("goal")}</span></strong>
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Best Value & Most Popular
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Shipping Included
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Queen Formula
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Kaiser Coach
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Unlimited 1 on 1 Coaching
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Dream Body In 90 Program
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Custom Meal Planner
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> KaiserFit CookBook
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Beach Body Blueprint
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Home Workouts For Rapid Fat Loss
                                </li>
                            
                            </ul>

                            
                            <div className="text-center my-3 subscribe-plan" onChange={checkHandler}>
                                <input type="radio"  name="platinum-pack" id="platinum-saver" className="platinum-pack" value="platinum-saver"  />
                                <label htmlFor="platinum-saver" className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 20%)</small></label>
                                <br /><br />
                                <input type="radio" name="platinum-pack" id="platinum-basic" className="platinum-pack" value="platinum" />
                                <label htmlFor="platinum-basic" className="payment-plan ms-1">One-Time Purchase</label>
                            </div>

                            
                            <div className="price-text">
                                
                        <p className="product-price">$39 <span className="per-bottle"> / bottle</span></p>
                            </div>


                            <a href="#0" className="checkout-button">
                                <img src={AddtoCart} className="img-fluid " alt="cart button" />
                            </a>

                            <div style={{width: '90%', margin: 'auto'}}>
                                <img src={Cards} className="img-fluid " alt="stripe cards" />
                            </div>

                                <div className="bottom-strike d-none">
                                <span >
                                    <span>$1194</span> 
                                </span><b>$294</b>
                                </div>
                        
                        

                            
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 col-md-4 padding-2">
                    <div className="gray bordered padding-2 border-default product-pack lh-1 text-center">
                        <div className="bundle-name">PREMIUM</div>
                            <span className="bottle">3 BOTTLES</span><br />
                            <span className="day-supply mb-3">90 Day Supply</span><br />
                            <img src={Premium} className="img-fluid " alt="3 bottles queen formula" />
                        

                        
                            
                            
                        
                            <ul className="list-unstyled text-start bonus-summary text-black" >
                        
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Shipping Included
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Queen Formula
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Kaiser Coach
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Unlimited 1 on 1 Coaching
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Dream Body In 90 Program
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Custom Meal Planner
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> KaiserFit CookBook
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Beach Body Blueprint
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Home Workouts For Rapid Fat Loss
                            </li>
                        
                            </ul>
                    

                            <div className="text-center my-3 subscribe-plan" onChange={checkHandler}>
                            <input type="radio"  name="gold-pack" id="gold-saver" className="gold-pack" value="gold-saver"  />
                            <label htmlFor="gold-saver" className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 17%)</small></label>
                            <br /><br />
                            <input type="radio" name="gold-pack" id="gold-basic" className="gold-pack" value="gold" />
                            <label htmlFor="gold-basic" className="payment-plan ms-1">One-Time Purchase</label>
                            </div>

                            <div className="price-text">
                            
                        <p className="product-price">$49 <span className="per-bottle"> / bottle</span></p>
                            </div>

                            <a href="#0" className="checkout-button">
                            <img src={AddtoCart} className="img-fluid " alt="cart button" />
                            </a>

                            <div style={{width: '90%', margin: 'auto'}}>
                            <img src={Cards} className="img-fluid " alt="stripe cards" />
                            </div>

                            <div className="bottom-strike gray d-none">
                                <span >
                                <span className="gray">$797</span> 
                                </span><b>$177</b>
                            </div>
                        

                    
                        
                    </div>
                </div>


                    </div>

                </div>


                <div className="container product-section text-center d-block d-sm-block d-md-none">
                    <div className="text-center text-capitalize display-4 mb-3 fw-light bundle-suggestion" >

                    </div>
                    <div className="list-head text-center">
                    Claim Your Saving Bundle<br />
                    While Stocks Last
                    </div>
                

                    <div className="row">
                    
                    
                    <div className="col-12 col-sm-8 col-sm-offset-2 col-md-4 padding-2">
                        <div className="green bordered padding-2 border-green product-pack lh-1 text-center text-black">
                        <div className="bundle-name bundle-ultimate">ULTIMATE</div>
                            <span className="bottle">6 BOTTLES</span><br />
                            <span className=" day-supply mb-3">180 Day Supply</span><br />
                            <img src={Ultimate} className="img-fluid " alt="6 bottles with apps" />
                        
                            

                            <ul className="list-unstyled text-start bonus-summary text-black" >
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> <strong>BEST Bundle For Your Goal: <span className="wg-text">{GetCookie("goal")}</span></strong>
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Best Value & Most Popular
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Shipping Included
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Queen Formula
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Kaiser Coach
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Unlimited 1 on 1 Coaching
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Dream Body In 90 Program
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Custom Meal Planner
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> KaiserFit CookBook
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Beach Body Blueprint
                                </li>
                                <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Home Workouts For Rapid Fat Loss
                                </li>
                            
                            </ul>

                        

                            <div className="text-center my-3 subscribe-plan" onChange={checkHandler}>
                                <input type="radio"  name="platinum-pack2" id="platinum-saver2" className="platinum-pack" value="platinum-saver"  />
                                <label htmlFor="platinum-saver2" className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 20%)</small></label>
                                <br /><br />
                                <input type="radio" name="platinum-pack2" id="platinum-basic2" className="platinum-pack" value="platinum" />
                                <label htmlFor="platinum-basic2" className="payment-plan ms-1">One-Time Purchase</label>
                            </div>

                            <div className="price-text">
                                
                        <p className="product-price">$39 <span className="per-bottle"> / bottle</span></p>
                            </div>
                            <a href="#0" className="checkout-button">
                                <img src={AddtoCart} className="img-fluid " alt="cart button" />
                            </a>

                            <div style={{width: '90%', margin: 'auto'}}>
                                <img src={Cards} className="img-fluid " alt="stripe cards" />
                            </div>

                                <div className="bottom-strike d-none">
                                <span >
                                    <span>$1194</span> 
                                </span><b>$294</b>
                                </div>
                        
                        

                            
                        </div> 
                    </div>

                    <div className="col-12 col-sm-8 col-sm-offset-2 col-md-4 padding-2">
                    <div className="gray bordered padding-2 border-default product-pack lh-1 text-center">
                        <div className="bundle-name">PREMIUM</div>
                            <span className="bottle">3 BOTTLES</span><br />
                            <span className="day-supply mb-3">90 Day Supply</span><br />
                            <img src={Premium} className="img-fluid " alt="3 bottles queen formula" />
                        

                        
                        
                            
                
                            <ul className="list-unstyled text-start bonus-summary text-black" >
                        
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Shipping Included
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Queen Formula
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Kaiser Coach
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Unlimited 1 on 1 Coaching
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Dream Body In 90 Program
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Custom Meal Planner
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> KaiserFit CookBook
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Beach Body Blueprint
                            </li>
                            <li className="bullets">
                                <span className="be-3 bright-green">&#10004;</span> Home Workouts For Rapid Fat Loss
                            </li>
                        
                            </ul>


                            <div className="text-center my-3 subscribe-plan" onChange={checkHandler}>
                            <input type="radio"  name="gold-pack2" id="gold-saver2" className="gold-pack" value="gold-saver"  />
                            <label htmlFor="gold-saver2" className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 17%)</small></label>
                            <br /><br />
                            <input type="radio" name="gold-pack2" id="gold-basic2" className="gold-pack" value="gold" />
                            <label htmlFor="gold-basic2" className="payment-plan ms-1">One-Time Purchase</label>
                            </div>

                            <div className="price-text">
                            
                        <p className="product-price">$49 <span className="per-bottle"> / bottle</span></p>
                            </div>
                            <a href="#0" className="checkout-button">
                            <img src={AddtoCart} className="img-fluid " alt="cart button" />
                            </a>

                            <div style={{width: '90%', margin: 'auto'}}>
                            <img src={Cards} className="img-fluid " alt="stripe cards" />
                            </div>

                            <div className="bottom-strike gray d-none">
                                <span >
                                <span className="gray">$797</span> 
                                </span><b>$177</b>
                            </div>
                        

                    
                        
                    </div>
                </div>


                <div className="col-12 col-sm-8 col-sm-offset-2 col-md-4 padding-2">
                    <div className="gray bordered padding-2 border-default product-pack lh-1 text-center">
                    <div className="bundle-name">BASIC</div>
                        <span className="bottle">1 BOTTLE</span><br />
                        <span className="day-supply mb-3">30 Day Supply</span><br />
                        <img src={Basic} className="img-fluid " alt="1 bottle queen formula" />

                    

                    
                        

                        <ul className="list-unstyled text-start bonus-summary" >
                            <li className="bullets">
                            <span className="be-3 red-text">&#x2718;</span> Shipping NOT Included
                            </li>
                            <li className="bullets">
                            <span className="be-3 bright-green">&#10004;</span> Queen Formula
                            </li>
                            <li className="bullets">
                            <span className="be-3 bright-green">&#10004;</span> Kaiser Coach
                            </li>
                            <li className="bullets">
                            <span className="be-3 bright-green">&#10004;</span> Unlimited 1 on 1 Coaching
                            </li>
                            <li className="bullets">
                            <span className="be-3 bright-green">&#10004;</span> Dream Body In 90 Program
                            </li>
                            <li className="bullets">
                            <span className="be-3 bright-green">&#10004;</span> Custom Meal Planner
                            </li>
                            <li className="bullets">
                            <span className="be-3 bright-green">&#10004;</span> KaiserFit CookBook
                            </li>
                            <li className="bullets">
                            <span className="be-3 bright-green">&#10004;</span> Beach Body Blueprint
                            </li>
                            <li className="bullets">
                            <span className="be-3 bright-green">&#10004;</span> Home Workouts For Rapid Fat Loss
                            </li>
                        
                        </ul>


                        <div className="text-center my-3 subscribe-plan" onChange={checkHandler}>
                            <input type="radio"  name="bronze-pack2" id="bronze-saver2" className="bronze-pack" value="bronze-saver"  />
                            <label htmlFor="bronze-saver2" className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 15%)</small></label>
                            <br /><br />
                            <input type="radio" name="bronze-pack2" id="bronze-basic2" className="bronze-pack" value="bronze"/>
                            <label htmlFor="bronze-basic2" className="payment-plan ms-1">One-Time Purchase</label>
                        </div>
                        
                        <div className="price-text">
                            
                        <p className="product-price">$59 <span className="per-bottle"> / bottle</span></p>
                        </div>
                        <a href="#0" className="checkout-button">
                            <img src={AddtoCart} className="img-fluid " alt="cart button" />
                        </a>

                        <div style={{width: '90%', margin: 'auto'}}>
                            <img src={Cards} className="img-fluid " alt="stripe cards" />
                        </div>

                            <div className="bottom-strike gray d-none">
                            <span >
                                <span className="gray">$119</span> 
                            </span><b>$69</b>
                            </div>
                    

                    
                    </div> 
                </div>

                    </div>

                </div>


            </div>
        )
    }


    function MoneyBackGuarantee(){
        return(
            <div className="container-fluid text-center product-wrap">
            <h1 className="text-black mb-2" id="lifetime-text">LIFETIME MONEYBACK GUARANTEE</h1>
            <img src={MoneyBackImage} alt="moneyback guarantee" className="img-fluid rounded" />
        </div>
        )
    }



    
    return (
        <div className="container-fluid" id="co-box">

           {(vidWatched===true) && (
            
                <>
            <Products />
           <MoneyBackGuarantee />
                </>
           )} 

     
           
        </div>
    )
}

export default VslContent






