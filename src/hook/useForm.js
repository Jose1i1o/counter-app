import { useState } from 'react'

const useForm = ( initialState = {} ) => {

  const [ values, setValues ] = useState( initialState);

  const handleInputName = ({ target }) => {
    setValues({
      ...values,
      [ target.name ]: target.value
    })
  }

  return [ values, handleInputName ];
}

export default useForm;
