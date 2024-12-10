import axios from 'axios';

export const getImagesFromPixabay = async (theme) => {
  const API_KEY = '47419658-ba70fe3f4fee459c23cadc518';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${theme}&image_type=photo&per_page=100`;

  try {
    const response = await axios.get(url);
    const images = response.data.hits;

    const randomImages = getRandomSelection(images, 32);

    const animalsData = randomImages.map((image) => ({
      emoji: image.previewURL,
    }));
    return animalsData;
    
  } catch (error) {
    console.error('Error al obtener imágenes de Pixabay:', error);
  }
};


const getRandomSelection = (array, n) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n); 
};
