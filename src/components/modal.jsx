import React from "react";
import "./modal.css";

const Modal =(props)=>{
    if (!props.show){
        return null;
    }

    return(
        <div className="modal">
            <div className="modal-header">
                <h4>Time is up</h4>
                
            </div>
            <div className="modal-body">
                <button>Restar</button>
                <button>New Timer</button>
            </div>
        </div>
    )
}
export default Modal