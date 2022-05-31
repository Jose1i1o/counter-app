const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=EhdRmrgVkNVGNw9aYoKS90hAJgBbPYz5&limit=20`; // encodeURI is used to deal with special characters or empty spaces and replaces them with %20.
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  return gifs;
}

export default getGifs;