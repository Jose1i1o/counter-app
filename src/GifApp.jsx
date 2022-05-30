import { useState } from "react";

const GifApp = () => {

  // const categories = ['X-men', 'Dragon Ball', 'Star Trek'];
  const [ categories, setCategories ] = useState(['X-men', 'Dragon Ball', 'Star Trek']);

  const handleAdd = () => {
    // First do it with the push to see that it does not re-render the component
    // categories.push('Wolverine');

    // setCategories('Speedy Gonzalez');
    // console.log(categories);

    setCategories( category => [ ...category, 'Speedy Gonzalez'])
    // setCategories([...categories, 'Speedy Gonzalez'])
  }
  // console.log(categories);

  return (
    <>
      <h2>
      🎁 GIFs App 🎁
      </h2>
      <hr />
      <button onClick={ handleAdd }>Add</button>
      <ol>
        {
          // Here you can´t use "for" because it is not a cyclical structure (array) that returns a value
          // You can use "map" to iterate over the array and return a new array
          categories.map(category => {
            return <li key={ category }>{ category} </li> // You will need a key for each child. You can either use i and define it as a parameter ( but is very volatile in case we delete or change an element but not all of them )
          })
        }
      </ol>
    </>
)}

export default GifApp;
