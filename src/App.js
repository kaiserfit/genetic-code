
import './quiz.css';
import Header from "./Header";
import QuizComponent from './QuizComponent';
import Footer from "./Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" component={QuizComponent} />
          <Route path="test" component={<div><h1>asdf</h1></div>} />
        </Routes>
      </BrowserRouter>
    
      <Footer />
    </div>
    );
}

export default App;
