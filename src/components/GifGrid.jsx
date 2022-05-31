import { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  
  const [ images, setImages ] = useState([]);

  useEffect(() => {
    getGifs();
  },[]) // This tells to render this component only once. Equals componentDidMount

  const getGifs = async() => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&api_key=EhdRmrgVkNVGNw9aYoKS90hAJgBbPYz5&limit=20';
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    setImages( gifs )
  }

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
        {
         images.map(img  => (
           <GifGridItem
              key={ img.id }
              { ...img }
           />
         ))
        }
      </div>
    </>
  )
}

export default GifGrid;
