
const GifGrid = ({ category }) => {
  
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
    console.log(data);
  }

  getGifs();

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}

export default GifGrid;
