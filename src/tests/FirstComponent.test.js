import React from 'react';
import { render } from '@testing-library/react';
import FirstComponent from "../FirstComponent.js";

describe('Testing my first react Component <FirstComponent />', () => {
  test('It should display the message "Lola is my dog´s name"', () => {

    const greeting = "Lola is my dog´s name";


    const { getByText } = render( <FirstComponent greetings={ greeting }/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByText(greeting) ).toBeInTheDocument();
  })
})