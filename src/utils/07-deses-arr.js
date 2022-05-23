const characters = ['Darth Vader','Doctor Who','Obi One'];
const [ , , hero3 ] = characters;
console.log( hero3 );


const returnArrayPositions = () =>{
    return ['ABC', 123];
}

const [ letters, numbers ] = returnArrayPositions(); 
console.log(letters, numbers);

const state = ( value ) => {
    return [ value, ()=>{ console.log('Hello World') } ];
}

const [ user, setUser ] = state( 'Will Smith' );

console.log( user );
setUser();





