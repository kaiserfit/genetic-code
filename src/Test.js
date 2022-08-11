import React from 'react';
import videojs from 'video.js';
// This imports the functional component from the previous sample.
import VideoJS from './Testvid';
import Loading from "./vsl-components/images/loading.webp"
const App = () => {
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
      <div><img src={Loading} /></div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
    </>
  );
}

export default App