import React from 'react';
import genetic from "./genetic.webp";

// import Progress from "react-bootstrap/ProgressBar";

function BannerImg(){
    return (
        <div className="col-12 col-lg-8 offset-lg-2 mb-3 mb-lg-2">
        <img src={genetic} className="img-fluid mw-100 mx-auto" alt="Genetic Codes" />
      </div>
    );
}

function BannerText(){
    return (
        <div className="d-block p-1 p-sm-4 p-md-4 p-lg-4 fs-2 bg-dark rounded-pill text-white w-100 text-center fjalla-font" id="genetic-banner">
        Discover Your <span style={{color: "yellow"}}>Genetic Code</span> & Unlock Your Custom Plan
      </div>
    )
}

function QuizData(){
    return (
        <div className="d-block mb-3 py-2 text-center" id="quiz-data">
  
          </div>
    );
}

function ProgBar(){
    return (
        <div className="bg-gray bg-gradient rounded-pill p-1 mt-2">
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-warning rounded-pill" id="progress-load" role="progressbar" style={{width: '1%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
       </div>
    );
}

function QuizBanner(){
    return (
        <div>
            <BannerImg />
            <BannerText />
            <QuizData />
            <ProgBar />
      </div>
    );
}

export default QuizBanner