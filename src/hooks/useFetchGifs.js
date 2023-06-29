import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Get images
  const getImages = async () => {

    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  //Execute the function getImages when render this component
  useEffect(() => {
    getImages();
  }, []);


  return {
    // Method 1
    // images: images,
    // isLoading: isLoading 

    // Method 2, when the props and the variables have the same name
    images,
    isLoading
  }
}
