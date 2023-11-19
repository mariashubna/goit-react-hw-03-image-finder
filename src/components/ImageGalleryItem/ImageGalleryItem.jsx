import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <li className={css.gallery-item} id={item.id} onClick={onClick}>
      <img src={item.webformatURL} alt={item.tags} className={css.image}/>
    </li>
  );
};

export default ImageGalleryItem;
