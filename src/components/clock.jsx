import "./clock.css";
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Clock = (props) =>{

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
        props.setShow(true);
        return;
    } // Exit condition on timeout
    if(milliseconds>0 && !toggle){
        setTimeout(() =>{setMilliseconds(milliseconds-1000);},1000);
       
    }
    // TODO Convert Output to show minutes and seconds instead of milliseconds
    else{
        setFirstUpdate(true);
        return;
       
    }

},[milliseconds]);


    return(
        <div className="flex h-screen">
            <p className="Clock m-auto text-neutral-500" ref={clockRef}>{toggle ?`${targettime} : 00` :`${milliseconds/1000}`}</p>
            <div className="m-auto flex flex-col space-y-4">
                <button className= "text-neutral-500 p-3.5 rounded-md bg-emerald-600 font-sans text-center" onClick={starttimer}>{toggle ? "START":"STOP"}</button>
                <button className= "text-neutral-500 p-3.5 rounded-md bg-emerald-600 font-sans text-center" onClick={settimeup}>+</button>
                <button className= "text-neutral-500 p-3.5 rounded-md bg-emerald-600 font-sans text-center" onClick={settimedown}>-</button>
                <button className= "text-neutral-500 p-3.5 rounded-md bg-emerald-600 font-sans text-center" onClick={resettime}>RESET</button>
            </div>
      {/* //? Not liking the repeatig classname = in the buttons too much */}
        </div>
    )
    }
    export default Clock;

        

