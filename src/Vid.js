import React, { useState } from 'react';

// This imports the functional component from the previous sample.
import VideoJS from './VideoJS';
import videojs from 'video.js';
import Loading from "./vsl-components/images/loading.webp"
import Play from "./vsl-components/images/customplay.webp"
import {BsPlayBtnFill} from "react-icons/bs"
import $ from "jquery";
const Vid = () => {
    const [videoReady, setState] = useState(false);
    const [userPlay, setUserPlay] = useState(false);
    const [paused, setPaused] = useState(false);
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
       
      
        $(".unlock-timer").text(xhours+":"+xmins+":"+xsec);
  
      }
      
      startTimer(1440*60);
    }

    timer_init();
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

  
 
  const handlePlayerReady = (player) => {
    playerRef.current = player;
    

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('pause',()=>{
        setPaused(paused=>true);
    });

    // player.on('timeupdate',()=>{
    //     videojs.log(player.currentTime())
    // });

    player.on('ready', () => {
        setState(videoReady=>true);
        videojs.log('player is asdfasdf');
      });

    player.on('dispose', () => {
      videojs.log('player will dispose');

    });

    player.on('play', () => {
        setPaused(paused=>false);
          
      });
  };
  
  const clickPlay = (e) => {
      const veed = videojs(document.getElementById("my-video"));
    if (userPlay === false){
        veed.muted(false);
        veed.currentTime(0);
        e.target.classList.add("d-none");
   
    //   $(".video-js .vjs-control-bar").css({"visibility":"visible"});
    //   $(".vjs-fullscreen-control").trigger("click");
        setUserPlay(userPlay=>true);
   
    } else {
        veed.play();
        setPaused(paused=>false);
        e.target.classList.add("d-none");
    
      }
  }

  const pauseButton = (e)=> {
    const veed = videojs(document.getElementById("my-video"));
    veed.play();
    setPaused(paused=>false);
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
                  <div id="btnPlay" onClick={clickPlay} className={`video-play vsl-play-desktop control-onload`}>
                  <img src={Play} alt="play button" className="img-fluid video-play" style={{margin: 'auto'}} />
              </div>
               )}
               
 </div>





</div>






 <div className="container text-center mt-3">
     <h4 className="unlock-text text-center text-white" style={{display: "inline-block"}} >Custom Plan Video Expires In: <span className="unlock-timer"></span></h4>
 </div>
       </div>
      
      
     
    </>
  );
}

export default Vid