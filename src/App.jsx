import "./App.css";
import { useState } from "react";

import Clock from "./components/clock"
import Modal from "./components/modal";

function App() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Clock setShow={setShow} show={show} milliseconds={milliseconds} setMilliseconds={setMilliseconds}/>
      <Modal show={show} setShow={setShow} setMilliseconds={setMilliseconds}/>
    </div>
  )
}

export default App
