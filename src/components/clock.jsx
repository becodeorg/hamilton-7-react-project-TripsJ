import React from 'react';
import { useState } from 'react';

const Clock = () =>{

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [targettime,setTaregettime]= useState(0);

    function settimeup(){
         
        setTaregettime(targettime+1); 
        // ! First click is not registered
        setMinutes(targettime);
        setSeconds(0);
        console.log(targettime);
    }

    function settimedown(){
        if (targettime >= 0){ 
        setTaregettime(targettime-1);
        setMinutes(targettime);
        setSeconds(0);
        console.log(targettime);
        }
    }

    function resettime(){
        setMinutes(targettime);
        setSeconds(0);
    }

    function starttimer(){
        const startpoint = Date.now();
        const endpoint = (startpoint + (targettime *60 * 1000));
        let now =0;
        // console.log(startpoint, endpoint, (targettime *60 * 1000));
        now = startpoint;
        let clockMoment = now;
        while (now < endpoint){
            now=Date.now()
            if(now - clockMoment >= 1000 ){
                clockMoment =now;
                setSeconds(seconds -1);
            }
            
            console.log(Date.now())
        }

    }


    return(
        <div>
            <p>{minutes}:{seconds}</p>
            <div>
                <button onClick={starttimer}>START</button>
                <button onClick={settimeup}>+</button>
                <button onClick={settimedown}>-</button>
                {/* <button onClick={resettime}>-</button> */}
            </div>
      
        </div>
    )
    }
    export default Clock;

        

