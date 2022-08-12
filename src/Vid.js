import React, { useState, useEffect, useRef } from 'react';

import {commentsArray} from "./vsl-components/Comments";
// This imports the functional component from the previous sample.
import VideoJS from './VideoJS';
import videojs from 'video.js';
import Loading from "./vsl-components/images/loading.webp"
import Play from "./vsl-components/images/customplay.webp"
import {BsPlayBtnFill} from "react-icons/bs"
import $ from "jquery";

const Vid = ({setVid}) => {
    const [videoReady, setState] = useState(false);
    const [userPlay, setUserPlay] = useState(false);
    const [paused, setPaused] = useState(false);
    const [vslWatched, setWatch] = useState(false);
    const [hook6, setHook6] = useState(false);
    const [videoTime, setTime] = useState(0);
    const [timer, setExp] = useState("24:00:00");
    const [pageNum, setPage] = useState(1);
    useEffect(() => {
      if (videoTime >=10){
        if (userPlay){
          setWatch(vslWatched=>true)
        }
        if (vslWatched){
          if (hook6 === false) {
            setVid(true);
            $("#sticky").addClass("scrolled");
            console.log("video done");
            setHook6(true);
          }
     
      } 
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
       
      setExp(xhours+":"+xmins+":"+xsec);
        // $(".unlock-timer").text(xhours+":"+xmins+":"+xsec);
  
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
       
        setTime(player.currentTime());
   
     
    });

    player.on('ready', () => {
      timer_init()
      
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
                  <h4 className="unlock-text text-center text-white">Custom Plan Video Expires In: <span className="unlock-timer">{timer}</span></h4>
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
          <h4 className="unlock-text text-center">Custom Plan Video Expires In: <span className="unlock-timer">{timer}</span></h4>
       
      </div>
    </div>
    )
      
  }

  function Reviews(){
    var ca = commentsArray.filter(x=>x.page===pageNum);
    const PageReview = (e) => {
      console.log(e.target);
      // var p = parseInt(e.target.text);
    
      // setPage(p);
    }
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
      <div className='container-fluid px-0'>
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
            </div>
            <p >{data.title}</p>
        </div>
      ))}
      </div>


        <nav aria-label="Page navigation reviews" id="comment-nav">
          <ul className="pagination bg-transparent rounded py-2 mb-4 justify-content-center">
            <li className="page-item" key={"0"}>
              <a className="page-link rev-arrows" data-id='prev'  href="#0" tabIndex="-1">
                <span aria-hidden="true" className="d-none d-sm-block">&laquo;</span>
                <span aria-hidden="true" className="d-block d-sm-none">Prev</span>
              </a>
            </li>
            
            <li className="page-item d-none d-sm-block rev-page active" key={"1"} onClick={PageReview}><a className="page-link" href="#0">1</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"2"} onClick={PageReview}><a className="page-link"  href="#0">2</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"3"} onClick={PageReview}><a className="page-link"  href="#0">3</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"4"} onClick={PageReview}><a className="page-link"  href="#0">4</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"5"} onClick={PageReview}><a className="page-link"  href="#0">5</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"6"} onClick={PageReview}><a className="page-link"  href="#0">6</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"7"} onClick={PageReview}><a className="page-link"  href="#0">7</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"8"} onClick={PageReview}><a className="page-link"  href="#0">8</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"9"} onClick={PageReview}><a className="page-link"  href="#0">9</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"10"} onClick={PageReview}><a className="page-link"  href="#0">10</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"11"} onClick={PageReview}><a className="page-link"  href="#0">11</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"12"} onClick={PageReview}><a className="page-link"  href="#0">12</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"13"} onClick={PageReview}><a className="page-link"  href="#0">13</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"14"} onClick={PageReview}><a className="page-link"  href="#0">14</a></li>
            <li className="page-item d-none d-sm-block rev-page" key={"15"} onClick={PageReview}><a className="page-link"  href="#0">15</a></li>
            <li className="page-item" key={"16"}>
              <a className="page-link rev-arrows" data-id='next'  href="#0">
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
     <h4 className="unlock-text text-center text-white" style={{display: "inline-block"}} >Custom Plan Video Expires In: <span className="unlock-timer">{timer}</span></h4>
 </div>
       </div>
      
       <div className="container-fluid" id="co-box">
        <Section1 />
        <Bna1 />
        <Reviews />
       </div>
     
    </>
  );
}

export default Vid