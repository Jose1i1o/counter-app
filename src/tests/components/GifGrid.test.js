// Enzyme not available for React 18. Tested with React 17

import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';

// I need both this .mock() and fake the data as in line 33
jest.mock('../../hooks/useFetchGifs');

describe('Testing <GifGrid />', () => {

    const category = 'X-men';


    test('to display correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('show items when images are loaded with useFetchGifs', () => {

        // We can simulate data is received
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/any/item.jpg',
            title: 'Anything'
        },
        {
            id: '123',
            url: 'https://localhost/any/item.jpg',
            title: 'Anything'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
})

