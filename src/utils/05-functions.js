// const greetings = ( user ) => `Hola, ${ user }`;
// const greetings2 = () => `Hola Mundo`;


const getUser = () => ({
        uid: 'ABC123',
        username: 'Lola'
});

const getActiveUser = ( user ) =>({
    uid: 'ABC567',
    username: user
})

export {
    getUser,
    getActiveUser
}