import React from 'react';
import { useState } from 'react';

const Clock = () =>{

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  


    return(
        <div>
            <p>{minutes}:{seconds}</p>
      
        </div>
    )
    }
    export default Clock;

        

