import React, { useEffect } from 'react'
import useForm from '../../hook/useForm';
import './effects.css';

const FormWithHookRevised = () => {

  const [ formValues, handleInputName ] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( formValues );
  }

  const { name, email, password } = formValues;

  useEffect( () => {
    console.log('email changed');
  }, [ email ]);

  return (
    // <form onSubmit={ handleSubmit }>
    <form>
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
      <button type='submit' className='btn btn-primary mt-2' onClick={ handleSubmit }>Submit</button>
    </form>
  )
}

export default FormWithHookRevised;