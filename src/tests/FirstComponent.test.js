import React from 'react';
import { render } from '@testing-library/react';
import FirstComponent from "../FirstComponent.js";
// import { shallow } from 'enzyme';
// for enzyme we also need npm i --save-dev enzyme-to-json

describe('Testing my first react Component <FirstComponent />', () => {
  test('It should display the message "Lola is my dog´s name"', () => {

    const greeting = "Lola is my dog´s name";


    const { getByText } = render( <FirstComponent greetings={ greeting }/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByText(greeting) ).toBeInTheDocument();
  })
})


// use enzyme to test the component

// Test 1
// describe('Testing my first react Component <FirstComponent /> with enzyme', () => {
//   test('it should display <FirstComponent /> correctly', () => {
//     const greeting = "Lola is my dog´s name";
//     const wrapper = shallow(<FirstComponent greetings={ greeting }/>);

//     expect( wrapper).toMatchSnapshot();
//   })
// })

// Test 2
// describe('Testing my first react Component <FirstComponent /> with enzyme', () => {
//   test('it should display <FirstComponent /> correctly', () => {
//   const greeting = 'My dog´s name is Lola';
//   const subheader = 'This is a subtitle';

//   const wrapper = shallow(
//       <FirstComponent greetings={ greeting } subtitle={ subheader }/>
//   );

//   const paragraph = wrapper.find('p').text();
//   expect( paragraph ).toBe( subheader );
//   })
// })
