import getGifs from '../../helpers/getGifs'


describe('Testing getGifs Fetch', () => {
    
    test('it should have at 20 items', async() => {
        
        const gifs = await getGifs('X-men');

        expect( gifs.length ).toBe( 20 );

    })

    test('it should have 0 items', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
    

})


