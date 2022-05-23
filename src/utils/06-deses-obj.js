
// Destructuring
const person = {
    name: 'Tony',
    age: 45,
    hero: 'Iron man'
};

const context = ({ key, name, age, hero = 'Captain' }) => {

    return {
        keyName: key,
        years: age,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { keyName, years, latlng: { lat, lng } } = context( person );

console.log(keyName, years);
console.log( lat, lng );


