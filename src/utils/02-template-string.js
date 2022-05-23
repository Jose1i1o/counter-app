const firstName   = 'Fernando';
const surname = 'Herrera';

const fullName = `${ firstName } ${ surname }`;
console.log( fullName );

function cheers(fullName) {
    return 'Hello ' + fullName;
}

console.log( `Hello: ${ cheers( fullName )}`);