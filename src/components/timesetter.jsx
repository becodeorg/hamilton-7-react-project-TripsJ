import React from 'react';
import { useState } from 'react';


const Timesetter = () => {
    const [targettime,setTaregettime]= useState(0);

    function settimeup(){
         
        setTaregettime(targettime+1); 
        // ! First click is not registered
        console.log(targettime);
    }

    function settimedown(){
        if (targettime >= 0){ 
        setTaregettime(targettime-1);
        console.log(targettime);
        }
    }



    return(
        <div>
        <button onClick={settimeup}>+</button>
        <button onClick={settimedown}>-</button>
        </div>
    )
}

export default Timesetter;