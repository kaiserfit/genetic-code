
import React, {useEffect} from 'react';
import Sticky from "./Sticky";
import ResultPanel from "./vsl-components/Results";
import TiktokPixel from 'tiktok-pixel';
import ReactPixel from 'react-facebook-pixel';
import Vid from './Vid';
  const Fathacks=({setRoute})=>{
    useEffect(()=>{
      //tiktok pixel 1
      TiktokPixel.init('CBSRIBJC77U6QAIGVM3G');
      TiktokPixel.pageView();
      TiktokPixel.track('AddToCart');

      ReactPixel.init('334082198751683')
        ReactPixel.pageView();
        ReactPixel.track('AddToCart')
  }, [])
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

