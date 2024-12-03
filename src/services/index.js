import axios from 'axios';

export const getImagesFromPixabay = async (theme) => {
  const API_KEY = '47419658-ba70fe3f4fee459c23cadc518';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${theme}&image_type=photo&per_page=32`;

  try {
    const response = await axios.get(url);
    const images = response.data.hits

    const animalsData = images.map((image) => ({
      emoji: image.previewURL
    }));
    return animalsData;
    
  } catch (error) {
    console.error('Error al obtener imágenes de Pixabay:', error);
  }
};

export const getImagesWebFromPixabay = async (theme) => {
  const API_KEY = '47419658-ba70fe3f4fee459c23cadc518';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${theme}&image_type=photo&per_page=10`;

  try {
    const response = await axios.get(url);
    const images = response.data.hits;

    // Usamos imageURL como alternativa
    const animalsData = images.map((image) => ({
      emoji: image.imageURL, // Usa la URL completa de la imagen
    }));

    return animalsData;
    
  } catch (error) {
    console.error('Error al obtener imágenes de Pixabay:', error);
  }
};
