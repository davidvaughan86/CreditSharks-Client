import React from 'react';
import { InlineWidget } from "react-calendly";
import {Link} from 'react-router-dom'


export default function Scheduler () {
    
    

  return (
    <div>
    <div className="calendleyContainer" 
          style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div className="frame">
            <InlineWidget url="https://calendly.com/thecreditsharks"/>
      </div>
      
       
    </div>

    
    </div>
    
  );
};
 