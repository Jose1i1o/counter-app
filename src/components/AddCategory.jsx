import { useState } from 'react';
import './addCategory.css';
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState('');
  
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submit done');

    if(inputValue.trim().length > 1 ) {
    setCategories(categories => [...categories, inputValue ]);
    setInputValue('');
    }
    else {
      setInputValue('Try inserting a new input')
    }
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

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;