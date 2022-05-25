const firstName   = 'Fernando';
const surname = 'Herrera';

const fullName = `${ firstName } ${ surname }`;
// console.log( fullName );

function cheers(firstName = 'Lola') {
    return 'Hello ' + firstName;
}

export default cheers;

// console.log( `Hello: ${ cheers( fullName )}`);