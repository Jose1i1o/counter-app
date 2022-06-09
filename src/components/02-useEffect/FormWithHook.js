import React, { useState, useEffect } from 'react'
import './effects.css';

const FormWithCustomHook = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formState;

  const handleInputName = ({ target }) => {
    setFormState({
      ...formState,
      // See this to solve questions around squares on object properties https://stackoverflow.com/questions/50376353/why-we-need-to-put-e-target-name-in-square-brackets
      [ target.name ]: target.value
    })
  }

  return (
    <>
      <h1>Form with Custom Hook</h1>
      <hr />

      <div className='form-group'>
        <input 
          type='text' 
          name='name' 
          className='form-control' 
          placeholder='Enter your name' 
          autoComplete='off' 
          value={ name } 
          onChange={ handleInputName }
        />
      </div>

      <div className='form-group pt-3'>
        <input 
          type='text' 
          name='email' 
          className='form-control' 
          placeholder='jose@gmail.com' 
          autoComplete='off' 
          value={ email } 
          onChange={ handleInputName }
        />
      </div>

      <div className='form-group pt-3'>
        <input type='password'
          name='password'
          className='form-control'
          placeholder='********'
          value={ password }
          onChange={ handleInputName }
        />
      </div>

    </>
  )
}

export default FormWithCustomHook;