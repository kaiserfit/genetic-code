
import React from 'react';
import VideoPlayer from 'react-video-js-player';
import ReactPlayer from 'react-player';
import Loading from "./vsl-components/images/loading.webp"
import {BsPlayBtnFill} from "react-icons/bs"


 const Vsl=()=>{

      
      return (

          <div className="container-fluid bg-black text-center" id="ff5">
   
  <div id="col-video">
    <div className="col-12 col-sm-8 col-md-6 offset-sm-2 offset-md-3 col-lg-4 offset-lg-4 position-relative">
        <div className='position-relative' style={{paddingTop: "56.25%"}}>

          <ReactPlayer className="position-absolute top-0 start-0" width="100%" height="100%" url="https://d2rvo1g7c89cun.cloudfront.net" playing  controls light />
        </div>
    
                  <div id="btnResume" className="text-center">
                    <h4 className="text-white">Resume Watching Video</h4>
                    <BsPlayBtnFill />
                  </div>
              
              
                    <div id="btnPlay" className="video-play vsl-play-desktop control-onload">
                        <img src="components/assets/img/customplay.webp" alt="play button" className="img-responsive video-play" style={{margin: 'auto'}} />
                    </div>
    </div>


  


  </div>






<div className="container text-center">
    <h4 className="unlock-text text-center text-white" style={{display: "inline-block"}} >Custom Plan Video Expires In: <span className="unlock-timer"></span></h4>
</div>
 </div>
      )
   
 }
export default Vsl;