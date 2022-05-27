import { getHeroByIdAsync } from '../../utils/09-promesas.js'
import heroes from '../../data/heroes.js';

// PART 1
// describe('testing promises', () => {
//   test('getHeroByIdAsync should return a hero async', () => {

//     const id = 1;

//     getHeroByIdAsync( id )
//     .then( hero => {
//       expect( true ).toBe( false ); // this will pass the test because it never gets inside the promise. It doesn´t wait for it to return any values
//     })
//   })
// })

// PART 2
describe('testing promises', () => {
  test('getHeroByIdAsync should return a hero async', ( done ) => { // if we pass an argument but never call it, it will generate an error

    const id = 1;

    getHeroByIdAsync( id )
    .then( hero => {
      expect(hero).toBe(heroes[0]); // we expect to receive the first hero
      done();
    })
  })

// we want to receive the error should the id not exist
  test('should return an error if the hero id does not exist', ( done ) => { // if we pass an argument but never call it, it will generate an error

    const id = 10;

    getHeroByIdAsync( id )
    .catch( error => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect( error ).toEqual( 'Your hero is not available. Run!' );
      done();
    }
    )
  })
})


