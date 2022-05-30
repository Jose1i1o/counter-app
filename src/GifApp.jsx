import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from './components/GifGrid';

const GifApp = () => {

  const [ categories, setCategories ] = useState(['X-men']);


  return (
    <>
      <h2>
      🎁 GIFs App 🎁
      </h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      <ol>
        {/* {
          // Here you can´t use "for" because it is not a cyclical structure (array) that returns a value
          // You can use "map" to iterate over the array and return a new array
          categories.map(category => {
            return <li key={ category }>{ category} </li> // You will need a key for each child. You can either use i and define it as a parameter ( but is very volatile in case we delete or change an element but not all of them )
          })
        } */}
        {
        categories.map(category =>
          <GifGrid
            key={category}
            category={ category }/>
        )
        }
      </ol>
    </>
)}

export default GifApp;
