import "./clock.css";
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Clock = (props) =>{

    
    // const [starttime,setStarttime] = useState(0);
    
    // const [endtime,setEndtime]= useState(0);
    const clockRef = useRef(0);
    const [firstUpdate,setFirstUpdate] =useState(false)
    const [toggle, setToggle] = useState(true);
    console.log(firstUpdate.current);
    const basicButtonlayout = "text-neutral-800 p-3.5 rounded-md bg-emerald-600 font-sans text-center";
    const redButtonlayout = "text-neutral-800 p-3.5 rounded-md bg-red-600 font-sans text-center";




    const settimeup = ()=> {
        console.log("up");
        props.setTargettime(props.targettime+1); 
    
        //console.log(targettime);
    }

    const settimedown=()=>{
        if (props.targettime >= 0){ 
            console.log("down");
        props.setTargettime(props.targettime-1);
        //console.log(targettime);
        }
    }

    const resettime = ()=>{
        props.setMilliseconds(0);
        props.setMilliseconds(props.targettime*60*1000);

    }

    const starttimer = () => {
        if (toggle){
        // setStarttime(Date.now())
        // setEndtime(starttime + (targettime *60 * 1000));
        props.setMilliseconds(props.targettime*60*1000);
        setToggle(false);
        
    }
    else { //* Stop button
        setToggle(true);
}
    }
   // console.log(clockRef.current);

   function convertToTime(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    return `${minutes}:${seconds}`;
}


   useEffect(()=>{
    if(toggle){
        console.log("toggel exit" + toggle)
        return;
    }
    if(props.milliseconds === 0 && !toggle ){
        // TODO Trigger Modal
        props.setShow(true);
        // setToggle(true);
        // props.setTaregettime(0);
        return;
    } // Exit condition on timeout
    if(props.milliseconds>0 && !toggle){
        setTimeout(() =>{props.setMilliseconds(props.milliseconds-1000);},1000);
       
    }
    // TODO Convert Output to show minutes and seconds instead of milliseconds
    else{
        setFirstUpdate(true);
        return;
       
    }

},[props.milliseconds]);


    return(
        <div className="flex h-screen">
            <p className="Clock font-sans text-xl m-auto text-neutral-500" ref={clockRef}>{toggle ?`${props.targettime} : 00` :`${convertToTime(props.milliseconds)}`}</p>
            <div className="m-auto flex flex-col space-y-4">
                <button className= {toggle ? basicButtonlayout:redButtonlayout} onClick={starttimer}>{toggle ? "START":"STOP"}</button>
                <button className= {basicButtonlayout} onClick={settimeup}>+</button>
                <button className= {basicButtonlayout} onClick={settimedown}>-</button>
                <button className= {basicButtonlayout} onClick={resettime}>RESET</button>
            </div>
      {/* //? Not liking the repeatig classname = in the buttons too much */}
        </div>
    )
    }
    export default Clock;

        

