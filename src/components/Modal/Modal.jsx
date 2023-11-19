import css from './Modal.module.css'
import { Component } from 'react';
class Modal extends Component {
  componentDidMount() {
    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  }

  render() {
    const { largeImageURL, onClose } = this.props;

    return (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="Large Image" />
        </div>
      </div>
    );
  }
}
  
  export default Modal;