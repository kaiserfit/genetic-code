
import React from 'react';
function Footer(){
    return(
<div className="container-fluid p-3 p-sm-5 p-md-5 p-lg-5 p-xl-5 bg-dark fs-7 fw-light text-white clearfix">
  <div className="mb-4 float-none float-sm-start float-md-start float-lg-start float-xl-start float-xxl-start text-start">

    © 2022 KaiserFit , LLC. All rights reserved. KaiserFit , LLC is the owner of the KaiserFit  and KaiserFit  trademarks, and all related designs, trademarks, copyrights, and other intellectual property. All other trademarks are owned by their respective owners.
  </div>

  <div className="float-none float-sm-end float-md-end float-lg-end float-xl-end float-xxl-end text-center">

    <a href="/privacy-policy" target="_blank" className="text-white">Privacy Policy</a>  |  <a href="/terms-conditions" target="_blank" className="text-white">Terms & Conditions</a>  |  <a href="/contact-us" target="_blank" className="text-white">Support</a>  |  <a href="/disclaimer" target="_blank" className="text-white">Disclaimer</a>
  </div>
</div>
    );
}

export default Footer