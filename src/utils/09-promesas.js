import { getHeroById } from './bases/08-imp-exp'

const getHeroByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {

            const hero = getHeroById( id );
            if ( hero ) {
                resolve( hero );
            } else {
                reject( 'Your hero is not available. Run!' );
            }
        }, 2000 )
    
    });


}


getHeroByIdAsync(1)
    .then( console.log )
    .catch( console.warn );