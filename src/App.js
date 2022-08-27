import React, {useState, useEffect} from 'react';
import './quiz.css';
import "./vsl-components/css/product.css";
import "./vsl-components/css/product-sm.css";
import "./vsl-components/css/vsl-2.css"

import "./vsl-components/css/comments.css"


import Header from "./Header";
import QuizComponent from './QuizComponent';
import Footer from "./Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Fathacks from "./Fathacks";
import Checkout from './Checkout';
import HeaderCheckout from './HeaderCheckout';
import ThankYou from './ThankYou';
import Upsell from './upsells/Upsell';


import axios from 'axios';
import ContactUs from './ContactUs';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConditions from './TermsConditions';
import DreamyLean from './upsells/DreamyLean';
import CollagenMatrix from './upsells/CollagenMatrix';
import InnerRestore from './upsells/InnerRestore';
function App() {
  const [pageRoute, setRoute] = useState("");

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
  
    document.cookie="_uip="+res.data.IPv4+";path=/";
    localStorage.setItem('_uip', res.data.IPv4);
    localStorage.setItem('_country', res.data.country_code);
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

 
  return (
    <div>
      {(pageRoute==="checkout") ?  <HeaderCheckout /> : <Header/>}
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizComponent />} />
          <Route path="/genetic-quiz" element={<QuizComponent />} />
          <Route path="/fathacks" element={<Fathacks setRoute={setRoute} />} />
          <Route path="/checkout" element={<Checkout setRoute={setRoute}/>} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/optimize" element={<Upsell />} />
          <Route path="/dreamy-lean" element={<DreamyLean />} />
          <Route path="/collagen-matrix" element={<CollagenMatrix />} />
          <Route path="/inner-restore" element={<InnerRestore />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </BrowserRouter>
    
      <Footer />
    </div>
    );
}

export default App;
