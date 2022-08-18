import React, {useState} from 'react';
import './quiz.css';
import "./vsl-components/css/product.css";
import "./vsl-components/css/product-sm.css";
import "./vsl-components/css/vsl-2.css"

import "./vsl-components/css/comments.css"


import Header from "./Header";
import QuizComponent from './QuizComponent';
import Footer from "./Footer";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Fathacks from "./Fathacks";
import Checkout from './Checkout';
import HeaderCheckout from './HeaderCheckout';
function App() {
  const [pageRoute, setRoute] = useState("");
  
  return (
    <div>
      {(pageRoute==="checkout") ?  <HeaderCheckout /> : <Header/>}
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizComponent />} />
          <Route path="/fathacks" element={<Fathacks setRoute={setRoute} />} />
          <Route path="/checkout" element={<Checkout setRoute={setRoute}/>} />
        </Routes>
      </BrowserRouter>
    
      <Footer />
    </div>
    );
}

export default App;
