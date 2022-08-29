

import GetCookie from "./Cookie";
import axios from "axios"
export default function WebHook(eventName, event_id){
   
        // if (window.location.hostname === 'localhost') {
        //   return false;
        // }
    
    
        var url = window.location.href;
        var navAgent = navigator.userAgent;
       var ipx = localStorage.getItem('_uip')
      var fbc = GetCookie("_fbc");
      
      var data = {
          'eventName': eventName,
          'eventID': event_id,
          'URL': url,
          'userAgent': navAgent,
          'fbc': fbc,
          'ipv4Address': ipx,
        
          }
    
          setTimeout(() => {
             axios.post( 'https://hook.us1.make.com/aorjaog2ut3cu8o32yv0ih9mk543nguu', data)
          }, 500);
         
          
    
}