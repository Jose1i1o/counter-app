import React, { useState, useEffect } from 'react'
import './effects.css';


const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState;

  useEffect(() => {
    console.log('hello');
  }, []);

  // useEffect(() => {
  //   console.log('form changed');
  // }, [formState]);

  // useEffect(() => {
  //   console.log('email changed');
  // }, [email]);

  const handleInputName = ({ target }) => {
    setFormState({
      ...formState,
      // See this to solve questions around squares on object properties https://stackoverflow.com/questions/50376353/why-we-need-to-put-e-target-name-in-square-brackets
      [ target.name ]: target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='form-group'>
        <input type='text' name='name' className='form-control' placeholder='Enter your name' autoComplete='off' value={ name } onChange={ handleInputName }/>
      </div>
      <div className='pt-3'>
        <input type='text' name='email' className='form-control' placeholder='jose@gmail.com' autoComplete='off' value={ email } onChange={ handleInputName }/>
      </div>
    </>
  )
}

export default SimpleForm;