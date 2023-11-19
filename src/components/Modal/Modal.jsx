
import css from './Modal.module.css'
const Modal = ({ item, onClose }) => {
    return (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img src={item.largeImageURL} alt={item.tags} />
        </div>
      </div>
    );
  };
  
  export default Modal;