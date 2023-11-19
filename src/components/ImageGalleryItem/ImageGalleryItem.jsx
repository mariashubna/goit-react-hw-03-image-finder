import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <li
      className={css.galleryItem}
      id={item.id}
      onClick={() => onClick(item.largeImageURL)}
    >
      <img src={item.webformatURL} alt={item.tags} className={css.image} />
    </li>
  );
};

export default ImageGalleryItem;
