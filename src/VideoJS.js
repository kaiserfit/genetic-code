import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import $ from "jquery"
export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {options, onReady} = props;
  const initialOptions= {
    aspectRatio: "4:3",
    controls: true,
    fluid: true,
    // fill: true,
    preload: "auto",
    sources: [
      {
        src: "https://d2rvo1g7c89cun.cloudfront.net/KaiserBurner-3.mp4",
        type: "video/mp4",
      },
    ],
    controlBar: {
      volumePanel: {
        inline: false,
      },
      progressControl: false,
      remainingTimeDisplay: false,
    },
  };
  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, initialOptions, () => {
        $("#ff5").trigger("click")
        setTimeout(async () => {
          const veed = videojs(document.getElementById("my-video"));
          console.log(veed.paused())
          await veed.play();
          // await videoRef.current?.play();
      
        }, 1000);
          // console.log(videoElement)
        onReady && onReady(player);
      });

  // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
//   React.useEffect(() => {
//     const player = playerRef.current;

//     return () => {
//       if (player) {
//           videojs.log("video disposed");
//           player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} id="my-video" className='video-js vjs-big-play-centered' />
    </div>
  );
}

export default VideoJS;