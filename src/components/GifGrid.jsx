import { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  
  // const [counter, setCounter] = useState(0);

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
    // console.log(data);
    // console.log(gifs);
    setImages( gifs )
  }
  // getGifs();

  return (
    <>
      <h3>{ category }</h3>
      {/* <ol> */}
        {/* {
         images.map(({ id, title }) => (
           <li key={ id }>{ title }</li>
         ))
        } */}
      {/* </ol> */}
        {
         images.map(img  => (
           <GifGridItem 
              key={ img.id }
              { ...img }
           />
         ))
        }
      
      {/* Use this to show how this components renders each time the button is clicked until useEffect is used
      <h3>{ counter }</h3>
      <button onClick={() => setCounter(counter + 1)}>Add +1</button> */}
    </>
  )
}

export default GifGrid;
