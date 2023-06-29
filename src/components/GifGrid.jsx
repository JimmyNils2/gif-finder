import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

  // Method 1
  // const [images, setImages] = useState([]);

  // //Get images
  // const getImages = async () => {

  //   const newImages = await getGifs( category );
  //   setImages(newImages);
  // }

  // //Execute the function getImages when render this component
  // useEffect( () => {
  //     getImages();
  // }, []);

  // Method 2, Custom Hook
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && (<h2>Loading...</h2>)
      }
      <div className='card-grid'>
        {
          // Method 1
          // images.map( ({id, title, url}) => (
          //   < GifItem 
          //     key={ id }
          //     title = { title }
          //     url = { url }
          //   />
          // ))

          // Method 2, spread props. Helpful with a lot of props
          images.map((image) => (
            < GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
