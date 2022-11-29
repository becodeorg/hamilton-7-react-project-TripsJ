import "./App.css";
import { useState } from "react";

import Clock from "./components/clock"
import Modal from "./components/modal";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Clock setShow={setShow} show={show}/>
      <Modal show={show}/>
    </div>
  )
}

export default App
