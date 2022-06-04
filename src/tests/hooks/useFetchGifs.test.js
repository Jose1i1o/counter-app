import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('testing the hook useFetchGifs', () => {


    test('should return the initial state', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'X-men' ) );
        const { data, loading } = result.current;

        // We need to wait for the update to clean our data
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('should return an array of imgs and loading set to false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'X-men' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 20 );
        expect( loading ).toBe( false );
    });
})
