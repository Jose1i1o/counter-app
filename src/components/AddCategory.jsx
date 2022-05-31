import { useState } from 'react';
import './addCategory.css';
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length > 1 ) {
    setCategories(categories => [...categories, inputValue ]);
    setInputValue('');
    }
    else {
      setInputValue('Try inserting a new input')
    }
  }

  return (
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