import React from 'react';
import { render } from '@testing-library/react';
import CounterApp from '../CounterApp.js';
// import { shallow } from 'enzyme';



describe('Testing my first react Component <CounterApp />', () => {

  // test the counter is 0 with react testing library
  test('It should display the counter as 0', () => {
    const { getByText } = render( <CounterApp value={0}/> );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByText('0') ).toBeInTheDocument();
  })

  // test the counter increases by one when the button is clicked with react testing library
  test('It should display the counter as 1 when the button is clicked', () => {
    const { getByText, getByTestId } = render( <CounterApp value={0}/> );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByText('0') ).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByTestId('handleAdd') ).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByTestId('handleDiff') ).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByTestId('reset') ).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonAdd = getByTestId('handleAdd');
    buttonAdd.click();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByText('1') ).toBeInTheDocument();
  })
})



// Testing with enzyme

// describe('Testing <CounterApp />', () => {
    
//     let wrapper = shallow( <CounterApp /> );

//     beforeEach( () =>  {

//         wrapper = shallow( <CounterApp /> );

//     });



//     test('should display <CounterApp /> correctly', () => {
       
        
//         expect( wrapper ).toMatchSnapshot();

//     });


//     // eslint-disable-next-line jest/valid-title
//     test('should display the initial value as 100 ', () => {
        
//         const wrapper = shallow( <CounterApp value={ 100 } /> );

//         const counterText = wrapper.find('h2').text().trim();
        
//         expect( counterText ).toBe('100');

//     })

//     test('should increase the counter by +1', () => {

        
//         wrapper.find('button').at(0).simulate('click');
//         const counterText = wrapper.find('h2').text().trim();
//         expect( counterText ).toBe('11');

//     })

//     test('should decrease the counter by -1', () => {
        
//         wrapper.find('button').at(2).simulate('click');
//         const counterText = wrapper.find('h2').text().trim();
//         expect( counterText ).toBe('9');

//     });


//     test('should set back to the default value', () => {
//         const wrapper = shallow( <CounterApp value={ 105 } /> );

//         wrapper.find('button').at(0).simulate('click');
//         wrapper.find('button').at(0).simulate('click');
//         wrapper.find('button').at(1).simulate('click');

//         const counterText = wrapper.find('h2').text().trim();

//         expect( counterText ).toBe('105');

//     })
// })
