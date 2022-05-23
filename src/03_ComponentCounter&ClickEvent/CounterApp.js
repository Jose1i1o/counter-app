// use "rafcp" to create the component
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

  const handleAdd = (e) => {
  console.log(e);

  // Case 4 only
  // In this scenario with the () is calling a function, so we need to RETURN a function.
  // Otherwise it would not work
  // return () => { console.log("Hello World ");}
  }

  return (
    <>
      <h1> Counter App </h1>
      <h2> { value } </h2>
      {/* Link to React Events https://es.reactjs.org/docs/events.html */}
      {/* <button onClick={() => { console.log(value++) } }>+</button> Do this to show that result in console */}
      {/* <button onClick={ (e) => { handleAdd(e) }}>+</button> This would be the same as below but because we are passing the same parameter from the outside to the inside function we can delete it because we just need to pass the reference to the variable */}
      {/* <button onClick={ handleAdd }>+</button>  This would be ok and would return the onClick properties */}
      {/* Case 4 */}
      {/* <button onClick={ handleAdd() }>+</button>  */}
      {/* End Case 4 */}
      <button onClick={ handleAdd }>+</button> 
      <button>-</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;