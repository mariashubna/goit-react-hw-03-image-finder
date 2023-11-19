import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <ImageGalleryItem item={item} key={item.id} onClick={openModal} />
      ))}
    </ul>
  );
};
export default ImageGallery;
