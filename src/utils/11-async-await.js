export const getImage = async() => {

    try {
        const apiKey = 'EhdRmrgVkNVGNw9aYoKS90hAJgBbPYz5';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        return url;

    } catch (error) {
        // console.log(error);
        return 'It does not exist';
    }
}

// getImage();



