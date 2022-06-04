// Enzyme not available for React 18. Tested with React 17

import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Testing <GifGridItem />', () => {

    const title = 'A title';
    const url   = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    
    test('should display the component correctly', () => {
        

        expect( wrapper ).toMatchSnapshot();

    })

    test('should have a paragraph with the title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('should have the image equal with the url and the alt of the props', () => {
        
        const img = wrapper.find('img');
        // console.log( img.prop('src') )
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });


    test('should have animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    })
    
    
    
    

})
