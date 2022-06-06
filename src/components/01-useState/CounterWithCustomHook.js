import React from 'react'
import useCounter from '../../hook/useCounter';

import './counter.css'

const CounterWithHook = () => {

  const { state, increment, reduce, reset } = useCounter( 0 );

  return (
    <>
      <h1>Counter with Hook: { state }</h1>
      <hr />

      <button onClick={() => increment(5) } className='btn btn-primary m-2'>Add 1</button>
      <button onClick={() => reduce(3) } className='btn btn-danger'>Minus 1</button>
      <button onClick={() => reset() } className='btn btn-dark m-2'>Reset</button>
    </>
  )
}

export default CounterWithHook;