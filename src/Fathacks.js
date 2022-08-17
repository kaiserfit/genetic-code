
import React from 'react';
import Sticky from "./Sticky";
import ResultPanel from "./vsl-components/Results";


import Vid from './Vid';
  const Fathacks=({setRoute})=>{
   
    document.title="Fathacks";
    
    return (
      <div>
        <Sticky />
        <ResultPanel />
        <Vid setRoute={setRoute} />

      </div>
      )
  }

  export default Fathacks

