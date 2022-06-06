// rafc for functional component
import React from 'react'
import { useState } from 'react';
import './counter.css';

const CounterApp = () => {

  // const [counter, setCounter] = useState(10);
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40
  });

  const { counter1, counter2, counter3, counter4} = state;

  return (
    <>
      <h1>Counter { counter1 }</h1>
      <h1>Counter { counter2 }</h1>
      <h1>Counter { counter3 }</h1>
      <h1>Counter { counter4 }</h1>
      <hr />

      <button className='btn btn-primary'
      onClick={() => setCounter({
        ...state,
        counter1: counter1 + 1,
        counter2: counter2 + 10,
        counter3: counter3 - 5,
        counter4: counter4
      }) }
      >+1</button>
    </>
  )
}

export default CounterApp;
