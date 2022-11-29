import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Clock = () =>{

    const [milliseconds, setMilliseconds] = useState(0);
    // const [starttime,setStarttime] = useState(0);
    const [targettime,setTaregettime]= useState(0);
    // const [endtime,setEndtime]= useState(0);
    const clockRef = useRef(0);
    const [firstUpdate,setFirstUpdate] =useState(false)
    const [toggle, setToggle] = useState(true);
    console.log(firstUpdate.current);





    const settimeup = ()=> {
        console.log("up");
        setTaregettime(targettime+1); 
        // ! First click is not registered
        //console.log(targettime);
    }

    const settimedown=()=>{
        if (targettime >= 0){ 
            console.log("down");
        setTaregettime(targettime-1);
        //console.log(targettime);
        }
    }

    const resettime = ()=>{
        setMilliseconds(0);
        setFirstUpdate(false);
        setMilliseconds(targettime*60*1000);

    }

    const starttimer = () => {
        if (toggle){
        // setStarttime(Date.now())
        // setEndtime(starttime + (targettime *60 * 1000));
        setMilliseconds(targettime*60*1000);
        setToggle(false);
        
    }
    else { //* Stop button
        setToggle(true);
}
    }
   // console.log(clockRef.current);

   useEffect(()=>{
    if(toggle){
        console.log("toggel exit" + toggle)
        return;
    }
    if(milliseconds === 0 && !toggle ){
        // TODO Trigger Modal
        console.log("modal");
        return;
    } // Exit condition on timeout
    if(milliseconds>0 && !toggle){
        setTimeout(() =>{setMilliseconds(milliseconds-1000);},1000);
       
    }

    // else if (milliseconds>0 && toggle){
    //     setMilliseconds(0);
    //     setFirstUpdate(false);
    // } 
    else{
        setFirstUpdate(true);
        return;
       
    }

},[milliseconds]);


    return(
        <div>
            <p className="Clock" ref={clockRef}>{milliseconds/1000}</p>
            <div>
                <button onClick={starttimer}>{toggle ? "START":"STOP"}</button>
                <button onClick={settimeup}>+</button>
                <button onClick={settimedown}>-</button>
                <button onClick={resettime}>RESET</button>
            </div>
      
        </div>
    )
    }
    export default Clock;

        

