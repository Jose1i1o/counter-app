import { returnArrayPositions } from '../../utils/07-destructuring-arr.js';

describe('testing file 07-destructuring-arrays', () => {
  test('should return a string and a number', () => {
    const arr = returnArrayPositions();
    const [ letters, number ] = returnArrayPositions();

    expect( arr ).toEqual(['ABC', 123]);
    expect( letters ).toEqual('ABC');
    expect( typeof letters ).toEqual('string');
    expect( number ).toEqual(123);
    expect( typeof number ).toEqual('number');
  })
})