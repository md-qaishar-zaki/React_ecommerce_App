import './App.css';
import React,{ useEffect, useState } from 'react';
function Debossing() {
  const [name,setName] = useState("")

  useEffect(()=>{
    const timerId = setTimeout(() => {
      if (name !== "") {
        console.log(name)        
      }
    }, 1000);

    return ()=>{
      clearTimeout(timerId)
    }
  },[name])
  function updateName(e){
    setName(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type='text' onChange={updateName} placeholder='Inter Your Name'/>
          <h1>Hii {name}</h1>
        </form>
      </header>
    </div>
  );
}

export default Debossing;
