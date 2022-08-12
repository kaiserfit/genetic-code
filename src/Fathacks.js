
import React from 'react';
import Sticky from "./Sticky";
import ResultPanel from "./vsl-components/Results";
import { useState } from 'react';
import VslContent from './vsl-components/VslContent';
// import Vsl from "./Vsl";
// import Testvid from "./Testvid";
// import App from "./vsl-components/New";
import Vid from './Vid';
  function Fathacks(){
   
    document.title="Fathacks";
    
    return (
      <div>
        <Sticky />
        <ResultPanel />
        <Vid />
        {/* <VslContent vidWatched={vidWatched} /> */}
      </div>
      )
  }

  export default Fathacks

