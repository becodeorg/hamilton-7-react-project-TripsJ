import { useState } from "react";

import Clock from "./components/clock"

function App() {
  const [minutes, setminutes] = useState(0);

  return (
    <div className="App">
      <Clock/>
    </div>
  )
}

export default App
