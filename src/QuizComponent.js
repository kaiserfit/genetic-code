import React from 'react';
import QuizBanner from "./Quizbanner";
import Quiz from "./Quiz";


function QuizComponent(){
    return(
        <div className='container-fluid p-1 main-port min-vh-100'>
        <div className='container p-0'>

        <QuizBanner />
        <Quiz />
        
        </div>
        <div className="container-fluid bg-transparent fs-8 text-muted p-3">
        *Results vary depending on your starting point, goals and effort.
        </div>
    </div>
    )
}

export default QuizComponent