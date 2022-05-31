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
        {
        categories.map( category =>
          <GifGrid
            key={ category }
            category={ category }/>
        )
        }
    </>
)}

export default GifApp;
