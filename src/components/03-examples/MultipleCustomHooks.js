// https://breakingbadapi.com/documentation
import { useEffect } from 'react';
// import useFetch from '../../hook/useFetch';
// import useCounterModified from '../../hook/useCounterModified';
import { useFetch, useCounterModified } from '../../hook/index';
import { LoadingQuote, Quote } from './components/index'
import '../02-useEffect/effects.css';
// import { LoadingQuote } from './components/LoadingQuote';
// import { Quote } from './components/Quote';

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounterModified();
  
  
  const { loading, data, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  console.log(data);
  // console.log(loading);
  // console.log(data);
  // console.log(url);
  // console.log(loading);
  // console.log(data);
  // const { author, quote } = data[0];
  // const { author, quote } = !loading && data[0];
  const { author, quote } = (!!data && data[0]) || (!!data && {quote:'', author:''}); 
  // if data exists then data will be executed
  // Type in the console null, !null and !!null to see the differences and then add a message 'Hello students' to the console
  
  // if data has not a value then add one to the counter
  useEffect(() => {
    quote === '' && increment();
  }, [data]);
  
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        loading
        ? <LoadingQuote />
        : <Quote author={ author } quote={ quote } />
      }

      <button onClick={()=> increment() } disabled={ loading }className='btn btn-primary'>Load next Quote</button>

    </>
  )
};

export default MultipleCustomHooks;

