import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from './components/GifGrid';

const GifApp = () => {

  const [ categories, setCategories ] = useState(['Zombies']);

  return (
    <>
      <h2>
      🔎 Gifter <span className="title__subtitle">-The place to find all your gifs-</span>
      </h2>
      <AddCategory setCategories={ setCategories }/>

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
