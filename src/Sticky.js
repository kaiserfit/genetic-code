
import React from 'react';
import $ from "jquery";
function Sticky(){
    const handleClick = () => {
        $('html, body').animate({
            scrollTop: $("#wrap-1").offset().top
        }, "slow");
    }
    return (
        <div className="container-fluid barlow-font" id="sticky">

        <div className="wrap">
     
        </div>
        <button className="btn bg-red red-glow" onClick={handleClick}>CLAIM SPECIAL DISCOUNT</button>
       
    
        </div>
    )
}

export default Sticky