// Enzyme not available for React 18. Tested with React 17

import React from 'react';
import { shallow } from 'enzyme';
import GifApp from '../GifApp';

describe('Testing <GifApp />', () => {
    
    test('should display correctly', () => {

        const wrapper = shallow(<GifApp />);
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should show a list of categories', () => {

        const categories = ['One Punch', 'X-men'];
        const wrapper = shallow(<GifApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
})
