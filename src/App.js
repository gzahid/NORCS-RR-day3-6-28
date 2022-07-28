import { useEffect, useState } from "react";
import './App.css';

function App() {
  let [name, setName] = useState("Hana");
  useEffect(() => {
    document.title = `Hello, ${name}`;
    
  });
  return (
    <div className="App">
      <input 
        onChange={(e)=>{
          setName(e.target.value);
        }}
        type="text"
       />
    </div>
  )
}

export default App;
