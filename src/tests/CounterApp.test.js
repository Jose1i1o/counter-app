import React from 'react';
import { render } from '@testing-library/react';
import CounterApp from '../CounterApp.js';
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