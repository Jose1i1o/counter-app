import '@testing-library/jest-dom';
import { getUser, getActiveUser } from '../../utils/05-functions';

describe('testing JS file 05-functions', () => {
  test('getUser should return an object', () => {

    const userTest = {
      uid: 'ABC123',
      username: 'Lola'
    }

    const user = getUser();
    
    expect(user).toEqual(userTest);
  })

  test('getActiveuser should return an object', () => {

    const user = 'Lola'

    // const activeUser = (user) => ({
    //   uid: 'ABC567',
    //   username: user
    // })

    const userActive = getActiveUser( user );

    // expect(userActive).toEqual(activeUser(user)); 
    // or
    expect(userActive).toEqual({
      uid: 'ABC567',
      username: user
    });





  })
})