import { useState } from 'react';
import './addCategory.css';


const AddCategory = () => {

  const [ inputValue, setInputValue ] = useState('');
  
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit done');
  }

  return (
    // <>
    //   First steps
    //   <h2>{ inputValue }</h2>
    //   <input
    //     className="add-category__input"
    //     type="text"
    //     value={ inputValue }
    //     onChange={ handleInputChange }
    //     >
    //   </input>
    // </>
    <form onSubmit={ handleSubmit } >
      <input
        className="add-category__input"
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      >
      </input>
    </form>
  )
}

export default AddCategory;