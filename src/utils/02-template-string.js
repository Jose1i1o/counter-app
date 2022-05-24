const firstName   = 'Fernando';
const surname = 'Herrera';

const fullName = `${ firstName } ${ surname }`;
// console.log( fullName );

export function cheers(firstName = 'Lola') {
    return 'Hello ' + firstName;
}

// console.log( `Hello: ${ cheers( fullName )}`);