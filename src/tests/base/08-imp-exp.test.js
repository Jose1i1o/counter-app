import heroes from '../../data/heroes';
import { getHeroById, getHeroesByOwner } from "../../utils/08-imp-exp";

describe('testing Heroes', () => {
  test('should return a heroe for each id', () => {

    const id = 1;
    const hero = getHeroById(id);
    
    const heroData = heroes.find( hero => hero.id === id );

    expect(heroData).toEqual(hero);
  })

  test('should return undefined if hero id does not exist', () => {

    const id = 10;
    const hero = getHeroById(id);

    expect(hero).toBe(undefined);
    // expect(hero).toEqual(undefined);
  })
  test('should return all DC heroes', () => {
  
    const owner = 'DC';
    const heroOwner = getHeroesByOwner( owner );
    
    const ownerFilter = heroes.filter( (hero) => hero.owner === owner );
  
    expect(heroOwner).toEqual(ownerFilter);
  })
  
  test('should return only two Marvel heroes', () => {
    const owner = 'Marvel';
    const heroOwner = getHeroesByOwner( owner );

    expect(heroOwner.length).toBe(2);
  })
})