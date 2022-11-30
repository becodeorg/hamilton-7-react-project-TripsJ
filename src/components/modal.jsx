import React from "react";
import "./modal.css";

const Modal =(props)=>{
    if (!props.show){
        return null;
    }

    const resettime = ()=>{
        props.setMilliseconds(0);
        props.setMilliseconds(props.targettime*60*1000);
        console.log(props.targettime)
        props.setShow(!props.show);

    }

    const newtimer = ()=>{
        props.setMilliseconds(0);
        props.setTargettime(0);
        props.setShow(!props.show);


    }

    return(
        <div className="modal">
            <div className="modal-header">
                <h4>Time is up</h4>
                
            </div>
            <div className="modal-body">
                <button className= "text-neutral-800 p-3.5 rounded-md bg-emerald-600 font-sans text-center" onClick={resettime}>Restart</button>
                <button className= "text-neutral-800 p-3.5 rounded-md bg-emerald-600 font-sans text-center" onClick={newtimer}>New Timer</button>
            </div>
        </div>
    )
}
export default Modal