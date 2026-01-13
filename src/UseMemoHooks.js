import React, { useMemo, useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const doubleValue = useMemo(() => { 
    return counter * 2;
  }, [counter]);

  const count = () =>{
    setCounter(counter + 1)
  }

  return (
    <div>
      <button onClick={count}>
        Click Me
      </button>

      <p>Counter: {counter}</p>
      <p>Double Value (useMemo): {doubleValue}</p>
    </div>
  );
}
