import React, {useState} from "react";

import  {BsFillPlusCircleFill}  from "react-icons/bs";
import $ from "jquery";
const Faq = () => {
    
    function faqClick(id){

      $(".faq-answer").eq(id).toggleClass('open');
      $(".faq-arrow").eq(id).toggleClass('open');
    }
    return (
        <div className="container-fluid main-checkout product-wrap px-0" >
    <div className="bg-dark text-white py-3 mb-3">
      <h1 className="center-block"><strong>FAQ Answers</strong></h1>
      <p className="center-block fs-3">By Coach Shane</p>
    </div>
      
      <div className="container info-section white-bg">
          <div className="info-content">
  
          
          <p className="list-content">
              Hey thanks for checking out this FAQ, me and Coach Rita decided to make this so that we could help answer some of the common questions we get and to also let you know something…
              <br /><br />
              And that’s the fact that we’re here to help and that you’re always welcome to send us a message regarding anything you need! 
              <br /><br />
              So if you have any questions that aren’t here then just send us an email to service@kaiserfit.net and we’ll get back to you ASAP! Now let's get started. 💪
          </p>
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(0)}>
                <span className="float-start fw-bold"> Will the Kaiser Body Bundle work for me?</span>
                <span className="faq-arrow fw-light float-end hoverable" ><BsFillPlusCircleFill  /></span>
              </div>
              <div className="faq-answer">
                  YES! The Kaiser Body Bundle and it’s easy to follow
                  advice has changed the bodies and lives of THOUSANDS of women…
                  And it can do the same for you. You can achieve the easiest transformation
                  of your life as you’ll be hitting your Fat Loss Sweet Spot that works with
                      your exact metabolic type, as this is the case fat will be melting like it’s
                      Ice-Cream in the hot sun so you can finally live life as your BEST self.
                      The woman you were always meant to be!
              </div>
            </div>
           
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(1)}>
                <span className="float-start fw-bold"> What’s included in the Kaiser Body Bundle?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                So for starters you’ll be getting the device I promised called Kaiser Coach and this is actually a FREE bonus that you’ll be getting, this usually goes for $299 per month but if you buy the Kaiser Body Bundle for a limited time you’ll get Kaiser Coach for FREE.
                <br /><br />
                Next up you get Kaiser Burner which contains 12 of the most powerful ingredients to MELT FAT 5 X FASTER and basically GUARANTEE your life changing transformation when using it with Kaiser Coach.
                <br /><br />                
                Also included are recipes, cookbooks, meal plans, our KaiserFit VIP Coaching Group, Shopping Lists for Success, Home Workouts and even our Bikini Body Blueprint to help sculpt your body!
                
              </div>
            </div>
  
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(2)}>
                <span className="float-start fw-bold"> Which Package Should I Order?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                The women who achieve the best PERMANENT transformations order the Kaiser Body Bundle UTIMATE Bundle.
                <br /><br />
                This is because you receive a FULL 6 month supply of Kaiser Burner. To achieve optimal results, Kaiser Burner should be taken consistently for at least 90-180 days as the longer you take these incredible 12 ingredients, the faster your metabolism becomes and the better your body naturally becomes at maintaining your new figure. This is why we strongly recommend you take advantage of the Kaiser Body Bundle ULTIMATE Bundle.
    
                <br /><br />
                Another very important reason why you should stock up on the 90-180 day options is because more and more women are finding out about Kaiser Burner every day and we are consistently running out of stock...And the last thing you want is to find yourself losing an incredible amount of fat only to run out and not be able to purchase Kaiser Burner for months…
                <br /><br />
                Also- With this bundle we throw in over $3000+ dollars worth of Bonus Meal Plans, Coaching, VIP Support Group, Recipe Books and much much more. 
                <br /><br />
                Lastly...Kaiser Burner is still in it’s ‘Special Launch Price’...So I guarantee you’ll never be able to buy Kaiser Burner cheaper than today. Which is another important reason why picking up at least 90 -180 days worth is definitely the smart option. 
    
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(3)}>
                <span className="float-start fw-bold">Is Kaiser Burner Safe?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                Absolutely. Thousands of women are taking Kaiser Burner each and every single day and achieving the body of their dreams effortlessly with no reported side effects. Every capsule of Kaiser Burner is manufactured here in the USA in our state of the art, best in the world facility which is FDA approved and GMP (good manufacturing practices) certified.
                As always, if you have a medical condition it's recommended to consult with your doctor. 
              </div>
            </div>
  
        
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(4)}>
                <span className="float-start fw-bold">How soon will I receive my order of Kaiser Burner?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                United States & Canada- You Can expect Kaiser Burner to arrive in 3-7 Days if you live in the United States & Canada.
                <br /><br />
                Outside the United States- Please allow 10-14 days for international shipping and custom clearance.             
              </div>
            </div>
  
  
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(5)}>
                <span className="float-start fw-bold">Is this a single, one time payment?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                Absolutely! This is a single ONE TIME PAYMENT processed by our state of the art payments processor.
                The payment is secure and uses the same encryption technology as Amazon and online banks.
                You’ll never be billed anything else without your consent and there are absolutely no hidden costs.
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(6)}>
                <span className="float-start fw-bold">What is the best way to take Kaiser Burner?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                Very easy. Take 2 capsules before breakfast OR with breakfast.
                Then let the incredible ingredients get to work to speed up your metabolism and help you burn fat. 
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(7)}>
                <span className="float-start fw-bold"> If I want to lose weight and tone my body at the same time, can I do that with this?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                Yes it is and we even give you our Bikini Body Blueprint to do just that! Now it’s entirely up to you if you want to sculpt your body and tone it to perfection, but if this is something you want to do then you can with the Bikini Body Blueprint, Kaiser Coach and Kaiser Burner. You’ll have access to everything you need to get the body of your dreams. 👍
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(8)}>
                <span className="float-start fw-bold">How Fast Will I See Results?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                Countless women have said “this is the fastest transformation journey of my life”
                and reported dramatic differences in weight and measurements in 7-10 days.
                However, every single woman’s body is different. Generally, the more you need
                to get rid of, the faster it’s likely to work. In 1-3 months, you could already
                    be living with your Dream Body and as your TRUE SELF. It can happen that fast.
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(9)}>
                <span className="float-start fw-bold">How soon can I use Kaiser Coach once I order the Kaiser Body Bundle?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                You will get immediate access to Kaiser Coach as well as all of your bonuses included in the Kaiser Body Bundle, an email will be sent to you with instructions as well as your login details so you can access everything. Kaiser Coach is available with the Kaiser Body Bundle FREE of charge only for a limited time so it’s best to order now before this offer expires and Kaiser Coach goes back to its original price of $299 per month. Your Kaiser Burner Supplement will also be shipped the next following day from our facility located in the US.
            
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(10)}>
                <span className="float-start fw-bold">Do I need to have a gym membership for this to work?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                Absolutely NOT. Most of the fat loss is done OUTSIDE the gym.
                If you do want to go to the gym, we have some smart workout
                routines you can follow to tone your body, but again this is
                entirely optional and we even include home workouts you can do
                    so you don’t have to go to the gym to tone your body.
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(11)}>
                <span className="float-start fw-bold">How is this different?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                This is NOT just a meal plan. This is NOT just a diet. This is NOT just a gym routine, and most importantly this is NOT just some “one size fits all” program that everyone tries to scam you with. It goes way beyond all of that. This is a Coach that works at your side for YOUR specific genetic code and metabolic type so you can burn fat with ease. You’ll also be getting everything that you need to be successful INCLUDING the most easy to follow eating plan, exercise plan, recipes and support from an INCREDIBLE private community full of world class coaches and community managers!
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(12)}>
                <span className="float-start fw-bold">What's so special about Kaiser Burner?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                What you are getting with Kaiser Burner is something that has been built from scratch, with years of Research & Development.
                <br /><br />
                12 of the most powerful ingredients squeezed into one tiny capsule which you can take once a day in the morning to help with:
                <br />
                <ul>
                    <li>
                        Speeding up your metabolism 
                    </li>
                    
                    <li>
                        Shedding Weight
                    </li>
  
                    <li>
                        Control cravings that lead to binge eating
                    </li>
  
                    <li>
                        Keeping away ‘false hunger signals’ which occur as your body is transforming  
                    </li>
  
                    <li>
                        Help you ‘effortlessly’ transform
                    </li>
                </ul>   
                <br />
                You also don’t need to restrict what you eat, robbing your body of nourishment is not the answer and it won’t lead to your best results.
                <br /><br />
                The gym also isn’t required, all you need to do is let Kaiser Burner do the work for you.       
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(13)}>
                <span className="float-start fw-bold">I Already Take Medication, Is There Anything Else Kaiser Burner Can Conflict With?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                If you’re already on medication, consult your doctor before taking Kaiser Burner.
              </div>
            </div>
  
            <div className="faq-wrap">
              <div className="faq-question clearfix" onClick={() => faqClick(14)}>
                <span className="float-start fw-bold">What if this doesn’t work for me?</span>
                <span className="faq-arrow fw-light float-end hoverable"><BsFillPlusCircleFill /></span>
              </div>
              <div className="faq-answer">
                If you use everything included in the Kaiser Body Bundle and don’t experience the life changing results that I promised, you are entitled to a FULL REFUND NO QUESTIONS ASKED. That can be 30 days from now. 90 Days from now. Even 1 year from now.
                <br /><br />
                All you have to do is email me IMMEDIATELY for a full refund at service@kaiserfit.net and you will get every penny back- no questions asked and no hassles.                
            
              </div>
            </div>
  
            
          </div>
      </div>
  </div>
    )
}

export default Faq