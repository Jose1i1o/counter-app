import React, { useState } from "react";
import PropTypes from 'prop-types';



const CounterApp = ({ value = 0 }) => {

  // include this and show in the components in the browser that this now displays as undefined.
  // const state = useState('Today is a sunny day');
  // console.log(state); Show that the state has a first element and a function

  // const [ name, setName ] = useState('Lola');
  // console.log(name, setName); This way I have BroadcastChannel. The name and the function

  // React forces us to use both states
  // const [ counter, setCounter ] = useState( 0 );
  const [ counter, setCounter ] = useState( value ); // change this when we set the reset button

  const handleAdd = () => {
    // setCounter( (counter) => counter + 1); You can pass a function. Specially when you don´t know the counter variable
    setCounter( counter + 1 ); // We can´t use counter++ because it would mutate the original variable
    // and would force react to re-render the whole component again.
    // React is highly efficient in this matter, so that it only changes/ re-renders those components
    // that are changed. Show this in the elements section on the browser
  }

  const handleDiff = () => {
    setCounter( counter - 1 );
  }

  const reset = () => {
    setCounter( value );
  }

  return (
    <>
      <h1> Counter App </h1>
      <h2> { counter } </h2>
      <button data-testid="handleAdd" onClick={ handleAdd }>+</button> 
      <button data-testid="handleDiff" onClick={ handleDiff }>-</button>
      <button data-testid="reset" onClick={ reset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;