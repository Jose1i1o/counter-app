// https://breakingbadapi.com/documentation
import { useEffect } from 'react';
import useFetch from '../../hook/useFetch';
import useCounterModified from '../../hook/useCounterModified';
import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounterModified(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  console.log(data);
  // console.log(loading);
  // console.log(data);
  // console.log(url);
  // console.log(loading);
  // console.log(data);
  // const { author, quote } = data[0];
  // const { author, quote } = !loading && data[0];
  const { author, quote } = (!!data && data[0]) || (!!data && {quote:'',author:''}); 
  // if data exists then data will be executed
  // Type in the console null, !null and !!null to see the differences and then add a message 'Hello students' to the console
  
  // if data has not a value then add one to the counter
  useEffect(() => {
    quote === '' && increment();
}, [data]);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        loading ? (
            <div className='alert alert-info text-center'>
              ...Loading
            </div>
        )
        :
        (
        <blockquote className='blockquote text-right'>
          <p>{ quote }</p>
          <footer className='blockquote-footer m-2'>{ author }</footer>
        </blockquote>
        )
      }

      <button onClick={()=> increment(1) } className='btn btn-primary'>Load next Quote</button>

    </div>
  )
};

export default MultipleCustomHooks;

