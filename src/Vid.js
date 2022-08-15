import React, { useState, useEffect, useRef } from 'react';

import {commentsArray} from "./vsl-components/Comments";
// This imports the functional component from the previous sample.
import VideoJS from './VideoJS';
import videojs from 'video.js';
import Loading from "./vsl-components/images/loading.webp"
import Play from "./vsl-components/images/customplay.webp"
import {BsPlayBtnFill, BsHandThumbsUp, BsHandThumbsDown} from "react-icons/bs"
import GetCookie from './Cookie';
import Basic from "./vsl-components/images/Products/1-bottle.webp";
import Premium from "./vsl-components/images/Products/3-bottles.webp";
import Ultimate from "./vsl-components/images/Products/6-bottles.webp";
import AddtoCart from "./vsl-components/images/add-cart.webp";
import Cards from "./vsl-components/images/visa-mastercard-icon.webp";
import MoneyBackImage from "./vsl-components/images/moneyback-guarantee.webp"
import $ from "jquery";
import UltimatePack from './Ultimate';

function Products({num}){
  const [bronzePack, setBronze] = useState("bronze-saver")
    const [goldPack, setGold] = useState("gold-saver")
    
    
  const checkHandler = (e)=> {
      console.log(e.target.value);
  }

  const bronzeClick = event => {
    console.log(event.target.value);
    // setBronze(event.target.value);
  }



  const goldClick = event => {
    console.log(event.target.value);
    // setGold(event.target.value);
  }

  

 
  return (
      <div className="product-wrap" id="wrap-1">
          <div className="container product-section text-center">
              <div className="text-center text-capitalize display-4 mb-3 fw-light bundle-suggestion" >

              </div>
              <div className="list-head text-center">
              Claim Your Savings Bundle<br />
              While Stocks Last
              </div>
          
              <div className="row">
              
              <div className="col-12 col-sm-4 col-md-4 padding-2 order-3 order-sm-1">
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
                  
                      

                          <div className="text-center my-3 subscribe-plan" onClick={checkHandler}>
                          <input type="radio"  name="bronze-pack" id={`bronze-saver${num}`} onChange={bronzeClick} className="bronze-pack" value="bronze-saver" />
                          <label htmlFor={`bronze-saver${num}`} className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 15%)</small></label>
                          <br /><br />
                          <input type="radio" name="bronze-pack" id={`bronze-basic${num}`} onChange={bronzeClick} className="bronze-pack" value="bronze" />
                          <label htmlFor={`bronze-basic${num}`} className="payment-plan ms-1">One-Time Purchase</label>
                          </div>

                          <div className="price-text">
                          
                  <p className="product-price">$59 <span className="per-bottle"> / bottle</span></p>
                          </div>
                      
                          <a href="#0" className="checkout-button" id='basic-button' data-sku={bronzePack}>
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
              <div className="col-12 col-sm-4 col-md-4 padding-2 order-1 order-sm-2">
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

                      
                    <UltimatePack num={num} />

                      
                 

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

              <div className="col-12 col-sm-4 col-md-4 padding-2 order-2 order-sm-3">
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
              

                      <div className="text-center my-3 subscribe-plan" >
                      <input type="radio"  name="gold-pack" id={`gold-saver${num}`} onChange={goldClick} className="gold-pack" value="gold-saver" checked={goldPack === 'gold-saver'}/>
                      <label htmlFor={`gold-saver${num}`} className="payment-plan ms-1">Subscribe & Save <small className="fw-light">(Save 17%)</small></label>
                      <br /><br />
                      <input type="radio" name="gold-pack" id={`gold-basic${num}`} onChange={goldClick} className="gold-pack" value="gold" checked={goldPack === 'gold'} />
                      <label htmlFor={`gold-basic${num}`} className="payment-plan ms-1">One-Time Purchase</label>
                      </div>

                      <div className="price-text">
                      
                  <p className="product-price">$49 <span className="per-bottle"> / bottle</span></p>
                      </div>

                      <a href="#0" className="checkout-button" data-sku={goldPack}>
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


         


      </div>
  )
}
const Vid = () => {
    const [videoReady, setState] = useState(false);
    const [userPlay, setUserPlay] = useState(false);
    const [paused, setPaused] = useState(false);
    const [vslWatched, setWatch] = useState(false);
    const [hook6, setHook6] = useState(false);
    const [videoTime, setTime] = useState(0);
    // const [timer, setExp] = useState("24:00:00");
    const [pageNum, setPage] = useState(1);
    
    useEffect(() => {
     
      
        if (userPlay){
          const veed = videojs(document.getElementById("my-video"));
          veed.on('timeupdate', ()=> {
            if (veed.currentTime()>=10){
              if (hook6 === false) {
                $("#sticky").addClass("scrolled");             
                setHook6(true);
              }
            }
          })
      
     
      } 
      
    
    
    }, [userPlay, vslWatched, hook6, videoTime]);
    function timer_init(){
        var timeInSecs;
        var ticker;
      
      function startTimer(secs) {
      timeInSecs = parseInt(secs);
      ticker = setInterval(tick, 1000); 
      }
      
      function tick() {
  
      var secs = timeInSecs;
    
      if (secs > 0) {
      timeInSecs--; 
      }
      else {
  
       
      clearInterval(ticker);
      startTimer(1440*60); 
      }
      
      
      secs %= 86400;
      var hours= Math.floor(secs/3600);
      secs %= 3600;
      var mins = Math.floor(secs/60);
      secs %= 60;
     
      var xhours = ( (hours < 10 ) ? "0" : "" ) + hours;
      var xmins = ( (mins < 10) ? "0" : "" ) + mins;
        var xsec = ( (secs < 10) ? "0" : "" ) + secs;
       
      // setExp(xhours+":"+xmins+":"+xsec);
        $(".unlock-timer").text(xhours+":"+xmins+":"+xsec);
  
      }
      
      startTimer(1440*60);
    }

    


  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    muted: true,
    controls: true,
  
    fluid: true,
    preload: "true",
    poster: Loading,
    sources: [{
      src: 'https://d2rvo1g7c89cun.cloudfront.net',
      type: 'video/mp4'
    }],
    
  };

  const clickPlay = (e) => {
    const veed = videojs(document.getElementById("my-video"));
    
   
      veed.muted(false);
      veed.currentTime(0);
      setTime(0);
      setUserPlay({userPlay:!userPlay}, console.log(userPlay));    
      $(".video-js .vjs-control-bar").css({"visibility":"visible"});
     //   $(".vjs-fullscreen-control").trigger("click");
 
    
    }

  
 
  const handlePlayerReady = (player) => {
    playerRef.current = player;
    

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('pause',()=>{
        setPaused(paused=>true);
    });

    player.on('timeupdate',()=>{   
     
    });

    player.on('ready', () => {
      timer_init();
        videojs.log('player is asdfasdf');
          $(".video-js .vjs-control-bar").css({"visibility":"hidden"});
        });

    player.on('dispose', () => {
      videojs.log('player will dispose');

    });

    player.on('play', () => {
        setPaused(paused=>false);
        setState(videoReady=>true);
      });
  };
  
  

  const pauseButton = (e)=> {
    const veed = videojs(document.getElementById("my-video"));
    veed.play();
    setPaused(paused=>false);
  }


  function Bna1() {
    return (
      <div className="container-fluid bg-black py-4" id='bna-con'>


      <div className="container text-center" id="bna-con">
          <div className="row">
              <div className="col-12 col-sm-12 col-md-8">
                  <div className="row mb-3">
                      <div className="col-12 col-sm-4 col-md-4">
                          <img src={require('./vsl-components/images/bna/marina-bna.webp')} height="280" width="230" alt=""/>
                      </div>
                      <div className="col-12 col-sm-4 col-md-4">
                          <img src={require('./vsl-components/images/bna/renee-bna.webp')} height="280" width="230" alt=""/>
                      </div>
                      <div className="col-12 col-sm-4 col-md-4">
                          <img src={require('./vsl-components/images/bna/olivia-bna.webp')} height="280" width="230" alt=""/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12 col-sm-4 col-md-4">
                          <img src={require('./vsl-components/images/bna/linda-bna.webp')} height="280" width="230" alt=""/>
                      </div>
                      <div className="col-12 col-sm-4 col-md-4">
                          <img src={require('./vsl-components/images/bna/shardai-bna.webp')} height="280" width="230" alt=""/>
                      </div>
                      <div className="col-12 col-sm-4 col-md-4">
                          <img src={require('./vsl-components/images/bna/rebeca-bna.webp')} height="280" width="230" alt=""/>
                      </div>
                  </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4">
                  <div className="text-center">
                      <img src={require('./vsl-components/images/Shane5.webp')} className="img-fluid" alt="Coach Shane with lady"/>
                  <button className="btn btn-lg btn-warning watch-btn gray-glow"><BsPlayBtnFill className='display-5 me-1' /> WATCH MY CUSTOM PLAN VIDEO</button>
                  <h4 className="unlock-text text-center text-white">Custom Plan Video Expires In: <span className="unlock-timer"></span></h4>
                  </div>
              </div>
          </div>
      </div>

  </div>
    )
  }

  function Section1(){
    return(
      <div className="container" id="bna-1">
      <div className="gray-glow clearfix mb-3">
        <div className="gray-wrap" >
          <div className='mb-5' style={{width: "100%",
                   height: "25px",
                    borderBottom: "1px solid black"}}
                    >
            <h1 className="bna-name text-black">
              Jeanna 
            </h1>
          </div>
          <div className="row p-2 " >
                <div className="col-12 col-sm-4 text-center">
                  <img src={require('./vsl-components/images/bna/jeanna-bna.webp')} className="img-fluid rounded mx-auto"  alt="Jeanna BnA" />
                </div>
                <div className="col-12 col-sm-8 position-relative">
                      <p className="bna-text text-black fw-bold">"I can still eat my ice cream every night. I'm full of energy and living life again!!!"</p>
                </div>
              </div>
        </div>
       
        <div className="bna-line">&nbsp;</div>
      </div>
    
    
      <div className="gray-glow clearfix mb-3">
        
        <div className="gray-wrap">
          <div className='mb-5' style={{width: "100%",
                   height: "25px",
                    borderBottom: "1px solid black"}}
                    >
            <h1 className="bna-name text-black">
              Carly 
            </h1>
          </div>
            <div className="row p-2">
                <div className="col-12 col-sm-4 col-sm-push-8 text-center">
                  <img src={require('./vsl-components/images/bna/carly-bna.webp')} className="img-fluid rounded mx-auto"  alt="carly BnA" />
                  </div>
                <div className="col-12 col-sm-8 col-sm-pull-4 position-relative">
                  
                  <p className="bna-text text-black fw-bold">"Here I am at a weight and pants size that I haven’t seen since middle school."</p>
                </div>
    
               
              </div>
        </div>
       
        <div className="bna-line">&nbsp;</div>
      </div>
    
    
      <div className="gray-glow clearfix mb-3">
        <div className="gray-wrap" >
          <div className='mb-5' style={{width: "100%",
                   height: "25px",
                    borderBottom: "1px solid black"}}
                    >
            <h1 className="bna-name text-black">
              Catherine 
            </h1>
          </div>
          <div className="row p-2 " >
                <div className="col-12 col-sm-4 text-center">
                  <img src={require('./vsl-components/images/bna/Cath.webp')} className="img-fluid rounded mx-auto"  alt="Catherine BnA" />
                </div>
                <div className="col-12 col-sm-8 position-relative">
                      <p className="bna-text text-black fw-bold">"For the first time in 13 years I finally found something that can help me lose weight."</p>
                </div>
              </div>
        </div>
       
        <div className="bna-line">&nbsp;</div>
      </div>
    
    
      <div className="gray-glow clearfix mb-3">
        
        <div className="gray-wrap">
          <div className='mb-5' style={{width: "100%",
                   height: "25px",
                    borderBottom: "1px solid black"}}
                    >
            <h1 className="bna-name text-black">
              Tess 
            </h1>
          </div>
            <div className="row p-2">
                <div className="col-12 col-sm-4 col-sm-push-8 text-center">
                  <img src={require('./vsl-components/images/bna/tess-bna.webp')} className="img-fluid rounded mx-auto"  alt="Tess BnA" />
                  </div>
                <div className="col-12 col-sm-8 col-sm-pull-4 position-relative">
                  
                  <p className="bna-text text-black fw-bold">"It is because of this program that I am now asked to sponsor various brands! Thank you KaiserFit.!"</p>
                </div>
    
               
              </div>
        </div>
       
        <div className="bna-line">&nbsp;</div>
      </div>
    
      <div className="text-center">
          <button className="btn btn-lg btn-warning watch-btn gray-glow"><BsPlayBtnFill className='display-5 me-1' /> WATCH MY CUSTOM PLAN VIDEO</button>
          <h4 className="unlock-text text-center">Custom Plan Video Expires In: <span className="unlock-timer"></span></h4>
       
      </div>
    </div>
    )
      
  }

  function Reviews(){
    function getFormattedDate(strDate){
      var x = (strDate === "") ? "" : new Date(strDate)
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let formattedDate = (x==="")? "": months[x.getMonth()] + ' '+x.getDate() +', ' + x.getFullYear();
      return formattedDate;
    }
    var ca = commentsArray.filter(x=>x.page===pageNum);
    const PageReview = (e) => {     
      var p = parseInt(e.target.text);
      setPage(p);
    }

    const NextClick = () => {
      if (pageNum !== 15){

        setPage(pageNum=>pageNum + 1);
        $('html, body').animate({
          scrollTop: $("#review-banner").offset().top
      }, "fast");
      }
    }

    const PrevClick = () => {
      if (pageNum !== 1){

        setPage(pageNum=>pageNum - 1);
        $('html, body').animate({
          scrollTop: $("#review-banner").offset().top
      }, "fast");
      }
    }
    const Vote = (count) =>{
      
    }
    return (
      <div className='container-fluid px-0 py-4'>
          <div className="container text-dark mb-4" id="review-banner">
        <h1>REVIEWS</h1>
          <div className="row">
          <div className="col-12 col-sm-4 col-md-4 col-lg-4 rev-col text-center">
              <p className="rev-stars ">
                  4.8
                  <img src={require('./vsl-components/images/stars.webp')} height="30" width="170" alt="5 stars" />      
                  
                  </p>
                  <p>
                      
                      Based on 9,180 Reviews
                  </p>
          </div>

          <div className="col-12 col-sm-4 col-md-4 col-lg-4 rev-col">
          <img src={require('./vsl-components/images/rev-stars.webp')} className="img-fluid mx-auto"  />
          </div>

          <div className="col-12 col-sm-4 col-md-4 col-lg-4 rev-col">
              <img alt="Customers using Queen Formula" src={require('./vsl-components/images/lady-customers.webp')} className="img-fluid mx-auto" />
          </div>
      </div>
  </div>


  <div className="container" id="rev-container">

    
      <div id="product-reviews" className="text-dark">
      {ca.map((data, idx) => (
          
        <div className="rev-section clearfix">
            <div className="rev-head ">
            <p className="rev-person-name float-start"><strong>{data.fullname}</strong></p>
            <p className="rev-date float-end">{getFormattedDate(data.created)}</p>
            </div>
            <p className="rev-title">
            <img src={require('./vsl-components/images/stars.webp')} className="me-2" alt="stars" height="15" width="85"/>
            <br className="d-block d-sm-none"/>
            <strong>{data.title}</strong>
            </p>
            <div className="rev-content">
              {data.content}
            </div>
            <div className="rev-vote clearfix">
            <div className="float-end mt-2">
              {/* <i>Was this review helpful?</i>&nbsp;&nbsp; */}
            
            <p><BsHandThumbsUp className='user-vote'  />&nbsp;<span className="like-count"> {data.upvote_count} </span> &nbsp;&nbsp;
            <BsHandThumbsDown className='user-vote'  />&nbsp;<span className="dislike-count">0</span> </p>
            </div>
            </div>
            <hr />
            {/* <hr className='border border-top border-1 border-dark' /> */}
        </div>
      ))}
        
      </div>


        <nav aria-label="Page navigation reviews" id="comment-nav">
          <ul className="pagination bg-transparent rounded py-2 mb-4 justify-content-center">
            <li className="page-item" key={"0"}>
              <a className="page-link rev-arrows" onClick={PrevClick} data-id='prev' key="0"  href="#0" tabIndex="-1">
                <span aria-hidden="true" className="d-none d-sm-block">&laquo;</span>
                <span aria-hidden="true" className="d-block d-sm-none">Prev</span>
              </a>
            </li>
            
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===1 ?"active":""}`} key={"1"} onClick={PageReview}><a className="page-link" key="1" href="#0">1</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===2 ?"active":""}`} key={"2"} onClick={PageReview}><a className="page-link" key="2"  href="#0">2</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===3 ?"active":""}`} key={"3"} onClick={PageReview}><a className="page-link" key="3"  href="#0">3</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===4 ?"active":""}`} key={"4"} onClick={PageReview}><a className="page-link" key="4"  href="#0">4</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===5 ?"active":""}`} key={"5"} onClick={PageReview}><a className="page-link" key="5" href="#0">5</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===6 ?"active":""}`} key={"6"} onClick={PageReview}><a className="page-link" key="6" href="#0">6</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===7 ?"active":""}`} key={"7"} onClick={PageReview}><a className="page-link" key="7" href="#0">7</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===8 ?"active":""}`} key={"8"} onClick={PageReview}><a className="page-link" key="8" href="#0">8</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===9 ?"active":""}`} key={"9"} onClick={PageReview}><a className="page-link" key="9" href="#0">9</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===10 ?"active":""}`} key={"10"} onClick={PageReview}><a className="page-link" key="10" href="#0">10</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===11 ?"active":""}`} key={"11"} onClick={PageReview}><a className="page-link" key="11" href="#0">11</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===12 ?"active":""}`} key={"12"} onClick={PageReview}><a className="page-link" key="12" href="#0">12</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===13 ?"active":""}`} key={"13"} onClick={PageReview}><a className="page-link" key="13" href="#0">13</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===14 ?"active":""}`} key={"14"} onClick={PageReview}><a className="page-link" key="14" href="#0">14</a></li>
            <li className={`page-item d-none d-sm-block rev-page ${pageNum===15 ?"active":""}`} key={"15"} onClick={PageReview}><a className="page-link" key="15" href="#0">15</a></li>
            <li className="page-item" key={"16"}>
              <a className="page-link rev-arrows" onClick={NextClick} data-id='next' key="16"  href="#0">
                <span aria-hidden="true" className="d-none d-sm-block">&raquo;</span>
                <span aria-hidden="true" className="d-block d-sm-none">Next</span>
              </a>
            </li>
          </ul>
        </nav>

  </div>
      </div>
    )
  }


  const ShaneFooter = () => {
    return (
      <div className="container-fluid dark-bg">
    <div className="container">
        <p className="coach-title center-block">
            Coach Shane has been helping women transform for the last 14 years.
        </p>

        <div className="row">
            <div className="col-12 col-sm-5 col-md-5 col-lg-5 center-block order-1 order-sm-2">
                <img src={require('./vsl-components/images/shane-enhanced.webp')} className="img-fluid mx-auto lazy" alt="coach shane" />
            </div>

            <div className="col-12 col-sm-7 col-md-7 col-lg-7 order-2 order-sm-1 py-1 py-sm-4 py-md-5">
                <p className="coach-content">
                Coach Shane is the best selling author of the book Fat Loss Super System and founder of the company KaiserFit. He is the creator of Kaiser Coach and has used his years of knowledge coaching women to create a Personal 1 on 1 Coach ANY WOMAN CAN USE. 
                  <br /><br />
                Coach Shane's life mission is to help millions of women discover the TRUTH about weight loss and help them achieve the easiest transformation of their life. 

                </p>
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
    <>

    <div className="container-fluid bg-black text-center" id="ff5">
 
      <div id="col-video">
        <div className="col-12 col-sm-8 col-md-6 offset-sm-2 offset-md-3 col-lg-2 offset-lg-5 position-relative">
    
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                {paused===true && (
                    <div id="btnResume" onClick={pauseButton} className="text-center">
                    <h4 className="text-white">Resume Watching Video</h4>
                    <BsPlayBtnFill className='display-1 text-danger' />
                </div>
                )}
               
           
               {videoReady===true && (
                  <div id="btnPlay" onClick={clickPlay} className={`video-play vsl-play-desktop control-onload ${userPlay===false ? "d-block": "d-none"}`}>
                  <img src={Play} alt="play button" className="img-fluid video-play" style={{margin: 'auto'}} />
              </div>
               )}
               
        </div>

      </div>

      <div className="container text-center mt-3">
          <h4 className="unlock-text text-center text-white" style={{display: "inline-block"}} >Custom Plan Video Expires In: <span className="unlock-timer"></span></h4>
      </div>
    </div>
      
       <div className="container-fluid" id="co-box">
       <Products num={1} />
        {hook6 === true && (<Products num={1} />)}
        {hook6 === true && (<MoneyBackGuarantee />)}
        <Section1 />
        <Bna1 />
        {hook6 === true && (<Products num={2} />)}
        <Products num={3} />
        <Reviews />

        <ShaneFooter />
       </div>
     
    </>
  );
}

export default Vid