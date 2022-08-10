import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import './index.css';
// import App from './App';
import './quiz.css';
import reportWebVitals from './reportWebVitals';

import Header from "./Header";
import QuizBanner from "./Quizbanner";
import Quiz from "./Quiz";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
const header = ReactDOM.createRoot(document.getElementById('header'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

header.render(
  <React.StrictMode>
  <Header />
</React.StrictMode>
);


root.render(
  <React.StrictMode>
    <div className='container-fluid p-1 main-port min-vh-100'>
    <div className='container p-0'>

    <QuizBanner />
    <Quiz />
    
    </div>
    <div className="container-fluid bg-transparent fs-8 text-muted p-3">
  
  *Results vary depending on your starting point, goals and effort.
  </div>
    </div>
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
  <Footer />
</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
