import "./App.css";
import { useState } from "react";

import Clock from "./components/clock"
import Modal from "./components/modal";

function App() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [show, setShow] = useState(false);
  const [targettime,setTargettime]= useState(0);

  return (
    <div className="App">
      <Clock setShow={setShow} show={show} milliseconds={milliseconds} setMilliseconds={setMilliseconds} targettime={targettime} setTargettime={setTargettime}/>
      <Modal show={show} setShow={setShow} setMilliseconds={setMilliseconds} milliseconds={milliseconds} targettime={targettime} setTargettime={setTargettime}/>
    </div>
  )
}

export default App
