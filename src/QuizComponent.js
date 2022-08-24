import React, {useEffect} from 'react';
import QuizBanner from "./Quizbanner";
import Quiz from "./Quiz";
import TiktokPixel from 'tiktok-pixel';
import ReactPixel from 'react-facebook-pixel'
function QuizComponent(){

    useEffect(()=>{
        //tiktok pixel 1
        TiktokPixel.init('CBSRIBJC77U6QAIGVM3G');
        TiktokPixel.pageView();
        TiktokPixel.track('ViewContent');

        ReactPixel.init('334082198751683')
        ReactPixel.pageView();
        ReactPixel.track('ViewContent')
    }, [])

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