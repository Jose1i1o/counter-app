// https://breakingbadapi.com/documentation

import '../02-useEffect/effects.css';
import useFetch from '../../hook/useFetch';

const MultipleCustomHooks = () => {

  const url = useFetch('https://www.breakingbadapi.com/api/quotes/1')
  console.log(url);
  return (
    <div>
      <h1>Custom Hooks</h1>
    </div>
  )
};

export default MultipleCustomHooks;

