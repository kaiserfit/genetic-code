import React from 'react';
import GetCookie from "../Cookie";


function ResultPanel(){

    return(
      <div>
 <div className="container" id="vslDescription">
       <span className="label-danger text-white rounded p-1" >Very Important:</span> This Short Video Contains Your Custom Transformation Plan from Coach Shane, World Class Transformation Coach & Celebrity Trainer
      </div>
        <div className="container-fluid bg-gray barlow-font text-center pt-0 pb-1" id="result-panel" >
        

        <div className="row align-items-center text-black fw-light q-res mb-1">
          <div className="col-6 col-sm-4 mt-1 mt-sm-1"><i className="fas fa-user"></i> Gender: <span id="qgender" className="fw-bold q-t">{GetCookie("gender")}</span></div>
          <div className="col-6 col-sm-4 mt-1 mt-sm-1"><i className="fas fa-users"></i> Age: <span id="qage" className="fw-bold q-t">{GetCookie("age")}</span></div>
          <div className="col-6 col-sm-4 mt-1 mt-sm-1"><i className="fas fa-fire-alt"></i> Metabolism: <span id="qmeta" className="fw-bold q-t">{GetCookie("metabolism")}</span></div>
          <div className="col-6 col-sm-4 mt-1 mt-sm-1"><i className="fas fa-weight"></i> Weight: <span id="qweight" className="fw-bold q-t">{GetCookie("weight")}</span></div>
          <div className="col-6 col-sm-4 mt-1 mt-sm-1"><i className="fas fa-bullseye"></i> Goal: <span id="qgoal" className="wg-text fw-bold q-t">{GetCookie("goal")}</span></div>
          <div className="col-6 col-sm-4 mt-1 mt-sm-1"><i className="fas fa-dna"></i> Genetic Code: <span className="fw-bold" style={{color: 'red'}}>Suppressed</span></div>
        </div>
           
       </div>
      
      </div>
    )
}

export default ResultPanel