import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;

  const addValue = () => {
    if(counter >= 20){
      return;
    }
    
    setCounter(counter + 1);
    console.log("clicked", counter);
  };

  const removeValue = () => {
    if(counter <= 0){
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>

      <p>footer: {counter}</p>
    </>
  );
}

export default App;
