
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


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizComponent />} />
          <Route path="/fathacks" element={<Fathacks />} />
        </Routes>
      </BrowserRouter>
    
      <Footer />
    </div>
    );
}

export default App;
