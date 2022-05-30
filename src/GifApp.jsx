import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifApp = () => {

  const [ categories, setCategories ] = useState(['X-men', 'Dragon Ball', 'Star Trek']);


  return (
    <>
      <h2>
      🎁 GIFs App 🎁
      </h2>
      <AddCategory />
      <hr />
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
