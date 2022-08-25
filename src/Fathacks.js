
import React, {useEffect} from 'react';
import Sticky from "./Sticky";
import ResultPanel from "./vsl-components/Results";
import TiktokPixel from 'tiktok-pixel';
import ReactPixel from 'react-facebook-pixel';
import Vid from './Vid';
import WebHook from './WebHook';
  const Fathacks=({setRoute})=>{
    useEffect(()=>{
      //tiktok pixel 1
      const hashVal  = [...crypto.getRandomValues(new Uint8Array(8))]
      .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
      const timeStamp = Date.now();    
      const event_id = 'event-'+hashVal+'-'+timeStamp; //unique ID of event
      TiktokPixel.init('CBSRIBJC77U6QAIGVM3G');
      TiktokPixel.pageView();
      TiktokPixel.track('AddToCart');

      ReactPixel.init('334082198751683')
        ReactPixel.pageView();
        ReactPixel.track('AddToCart')

        WebHook('AddToCart', event_id)
        setRoute("fathacks")
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

