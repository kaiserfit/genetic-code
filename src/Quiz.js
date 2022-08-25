import React from 'react';
import Range from "react-bootstrap/FormRange"
import { useState } from "react";
import $ from "jquery";
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";




function Quiz(){
    
    const [state,setChange ] = useState(1);
    const [cls,setClass ] = useState("");
    const navigate = useNavigate();
 
    const handleClick1  = event => {
   
            var id = parseInt(event.currentTarget.getAttribute('data-id')); 
            var ans = event.currentTarget.getAttribute('data-ans');
            var question = event.currentTarget.getAttribute('data-question');
            if(id===4 && ans === "0 lbs"){
              alert("Please Indicate your Weight");
              return false;
          }
            switch(id){
              case 1:
                $("#progress-load").css("width", "13%");
                if (ans === "Man"){
                  setClass(cls=>"male-btn")
                } else {
                  setClass(cls=>"female-btn")
                }
              break;
              case 2:
                $("#progress-load").css("width", "27%");
                
              break;
              case 3:
                $("#progress-load").css("width", "51%");
              break;
              case 4:
                $("#progress-load").css("width", "70%");
              break;
              case 5:
                $("#progress-load").css("width", "85%");
              break;
              case 6:
                $("#progress-load").css("width", "100%");
                $("#progress-load").removeClass("bg-warning");
                $("#progress-load").addClass("bg-success");
               
                navigate("/fathacks", { replace: true });
              break;
             
              default: break;
            }
         
            $("#quiz-data").append(question+": " +ans + "&nbsp;&nbsp;|&nbsp;&nbsp;");
            document.cookie= question.toLowerCase()+"="+ans+";path=/";
            

            setChange(prev=>prev+1)
    
        }

    function Question1(){
        return (
            <div className="col-6 col-sm-6 col-md-4 mx-auto">
              <div className="d-grid gap-3" id="gender-grid">
                <button className="btn btn-outline-dark btn-lg p-3 position-relative clearfix fs-1 ans-btn fw-bolder" onClick={handleClick1} data-question="Gender"  data-id="1" data-ans="Woman">
               
                 <FaFemale className="fas fa-female display-2 position-absolute start-0 ms-2 "/>
                 <span className="align-middle">Woman</span> 
                </button>
          
                <button className="btn btn-outline-dark btn-lg p-3 position-relative fs-1 ans-btn fw-bolder" onClick={handleClick1} data-question="Gender"  data-id="1" data-ans="Man">
                  <FaMale className="fas fa-male display-2 position-absolute start-0 ms-3 " />
                  <span className="align-middle">Man</span> 
                </button>
              </div>
              </div>
        
        )
    }
    
    function Question2(){
        return (
            <div className="col-12 col-sm-6 mx-auto">
                <div className="d-grid gap-3" id="age-grid">
                  <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Age" data-id="2" data-ans="Teens">
                    Teens
                  </button>
      
                  <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Age" data-id="2" data-ans="20s">
                    20s
                  </button>
    
                  <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Age" data-id="2" data-ans="30s">
                    30s
                  </button>
    
                  <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Age" data-id="2" data-ans="40s">
                    40s
                  </button>
    
                  <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Age" data-id="2" data-ans="50s">
                    50s
                  </button>
    
                  <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Age" data-id="2" data-ans="60s and up">
                    60s and up
                  </button>
                </div>
              </div>
        )
    }

    function Question3(){
        return (
            <div className="col-12 col-sm-6 mx-auto">
              <div className="d-grid gap-3" id="metabolism-grid">
                <button className={`btn btn-outline-dark btn-lg p-3 ans-btn fw-bold ${cls} text-capitalize`} data-question="Metabolism" onClick={handleClick1} data-id="3" data-ans="Slow">
                  Slow
                </button>
    
                <button className={`btn btn-outline-dark btn-lg p-3 ans-btn fw-bold ${cls} text-capitalize`} data-question="Metabolism" onClick={handleClick1} data-id="3" data-ans="Normal">
                  Normal
                </button>

                <button className={`btn btn-outline-dark btn-lg p-3 ans-btn fw-bold ${cls} text-capitalize`} data-question="Metabolism" onClick={handleClick1} data-id="3" data-ans="Fast">
                  fast
                </button>
              </div>
            </div>
        )
    }

    function Question4(){
        const [value,setChange ] = useState(0);
    
        const slide = event => {
            
                 
            var outputweight = document.getElementById("weight");
             var x = event.target.value;
                
            setChange(value=>x);
           outputweight.innerHTML = x;

       
            
        }
        return (
            <div>
                 <div className="text-center fs-2 fw-bold" id="weightMs">
              <span id="weight">0</span> lbs
            </div>
           
  
          <div className="d-block w-100 px-4 px-sm-2 ">
            <div className="row">
              <div className="col-12 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-6 offset-lg-3  px-0 p-sm-5 p-md-5 p-lg-5 p-xl-5 fs-2">
               <div className="row mb-3">
                <div className="col-2">
                  <span id="weightUnit">Pounds</span>
                 
                </div>
                
     
                <div className="col-8 offset-1">
                  
                  <Range type="range"
                   value={value} 
                   onChange={slide}
                    className="form-range weight-range visible"
                     min="0"
                      max="400"
                       step="1" 
                       
                       id="weightRange" />
                  
                </div>
              </div>
  
              <div className="text-center">
                <button className={`btn btn-lg bg-kaizerfit ans-btn ${cls} text-white`} onClick={handleClick1} data-question="Weight" id="ansWeight" data-id="4" data-ans={value+" lbs"} >
                  Continue
                </button>
              </div>
          
              </div>
  
             
            </div>
  
            </div>
            </div>
        );
    }

    function Question5(){
        return (
        <div className="col-12 col-sm-6 mx-auto">
              <div className="d-grid gap-3" id="age-grid">
                <button className={`btn btn-outline-dark btn-lg p-3 ${cls} ans-btn fw-bold`} onClick={handleClick1} data-question="Goal" data-id="5" data-ans="5-10 lbs">
                  5-10 pounds
                </button>
    
                <button className={`btn btn-outline-dark btn-lg p-3 ${cls} ans-btn fw-bold`} onClick={handleClick1} data-question="Goal" data-id="5" data-ans="15-25 lbs">
                  15-25 pounds
                </button>

                <button className={`btn btn-outline-dark btn-lg p-3 ${cls} ans-btn fw-bold`} onClick={handleClick1} data-question="Goal" data-id="5" data-ans="26-49 lbs">
                  26-49 pounds
                </button>

                <button className={`btn btn-outline-dark btn-lg p-3 ${cls} ans-btn fw-bold`} onClick={handleClick1} data-question="Goal" data-id="5" data-ans="50+ lbs">
                  50+ pounds
                </button>
  
                <button className={`btn btn-outline-dark btn-lg p-3 ${cls} ans-btn fw-bold`} onClick={handleClick1} data-question="Goal" data-id="5" data-ans="100+ lbs">
                  100+ pounds
                </button>
  
    
              </div>
            </div>
        )
    }

    function Question6(){
   
        return (
            <div className="col-12 col-sm-6 mx-auto">
            <div className="d-grid gap-3" id="age-grid">
              <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Challenge" data-id="6" data-ans="No diet has worked">
                No diet has worked for me
              </button>
  
              <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Challenge" data-id="6" data-ans="I am lost/confused">
                I am lost/confused
              </button>

              <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Challenge" data-id="6" data-ans="Bad Habits">
                Bad Habits
              </button>

              <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Challenge" data-id="6" data-ans="No consistency">
                No consistency
              </button>

              <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Challenge" data-id="6" data-ans="No motivation">
                No motivation
              </button>

              <button className={`btn btn-outline-dark btn-lg p-3 ans-btn ${cls} fw-bold`} onClick={handleClick1} data-question="Challenge" data-id="6" data-ans="Countless reasons">
                Countless reasons
              </button>
            </div>
          </div>
        )
    }





    return(
        <div className="quiz-block pb-5 bg-gray-300 border-radius-lg" data-id="0">
  
    
        <div className="col-12 col-sm-8 mx-auto text-center fs-1 mt-3 mb-3 text-dark fjalla-font" id="question-title">
        {state === 1 && "Are you a Woman or a Man?"}
        {state === 2 && "What is Your Age Range? "}
        {state === 3 && "How Fast is Your Metabolism?"}
        {state === 4 && "How Much Do You Weigh?"}
        {state === 5 && "How Much Weight Would You Like To Lose?"}
        {state === 6 && "What has been your BIGGEST challenge?"}


        </div>

        
       
       

        {state === 1 && (<Question1  /> )}

        {state === 2 && <Question2 />}
        {state === 3 && <Question3 />}
        {state === 4 && <Question4 />}
        {state === 5 && <Question5 />}
        {state === 6 && <Question6 />}
        <video width="320" height="240" controls autoPlay muted className='position-absolute bottom-0 end-0 invisible' style={{zIndex: "-10"}}>
          <source src="https://d2rvo1g7c89cun.cloudfront.net" type="video/mp4" />
          
            Your browser does not support the video tag.
        </video> 
    
      
      </div>
    )
}

export default Quiz