
import React from 'react';
import videojs from 'video.js';
// This imports the functional component from the previous sample.
import VideoJS from './Testvid';
// import VideoPlayer from './VideoPlayer';

import Loading from "./vsl-components/images/loading.webp"
import Play from "./vsl-components/images/customplay.webp"
import {BsPlayBtnFill} from "react-icons/bs"


const Vsl = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    poster: {Loading},
    preload: "auto",
    sources: [{
      src: 'https://d2rvo1g7c89cun.cloudfront.net',
      type: 'video/mp4'
    }]
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('ready', ()=>{
      videojs.log("sadf")
    });
    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
     
     <div className="container-fluid bg-black text-center" id="ff5">
 
 <div id="col-video">
 <div className="col-12 col-sm-8 col-md-6 offset-sm-2 offset-md-3 col-lg-4 offset-lg-4 position-relative">
    
 <VideoJS options={videoJsOptions} id="my-video" height="200" width="300" className="vjs-big-play-centered video-js" />
               <div id="btnResume" className="text-center">
                 <h4 className="text-white">Resume Watching Video</h4>
                 <BsPlayBtnFill />
               </div>
           
           
                 <div id="btnPlay" className="video-play vsl-play-desktop control-onload">
                     <img src={Play} alt="play button" className="img-fluid video-play" style={{margin: 'auto'}} />
                 </div>
 </div>





</div>






 <div className="container text-center">
     <h4 className="unlock-text text-center text-white" style={{display: "inline-block"}} >Custom Plan Video Expires In: <span className="unlock-timer"></span></h4>
 </div>
       </div>
      
     
    </>
  );
}

export default Vsl

