// Enzyme not available for React 18. Tested with React 17

import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

    // const setCategories = () => {};
    const setCategories = jest.fn(); // Jest implements the above with .fn()
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    // beforeEach will reset all tests before moving to the next
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    
    test('to display correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('to change text box', () => {

        const input = wrapper.find('input');
        const value = 'Hello World';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
        
    })

    test('prevent submit information on submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} }); // preventDefault(){} is the same as preventDefault = () => {}

        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('call setCategories and clean the text box', () => {

        const value = 'Hello World';

        // 1. simulate inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simulate submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories should be called
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)  ); // To check that a function has been called

        // 4. Input value should be ''
        expect( wrapper.find('input').prop('value') ).toBe('');

    })
