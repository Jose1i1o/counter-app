import { getHeroById } from './08-imp-exp';

export const getHeroByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {

            const hero = getHeroById( id );
            if ( hero ) {
                resolve( hero );
            } else {
                reject( 'Your hero is not available. Run!' );
            }
        }, 1500 )
    
    });
}