import css from './Button.module.css';

const Button = ({ onClick }) => {
    return (
      <button className={css.btn} type="button" aria-label="Load more" onClick={onClick}>
        Load more
      </button>
    );
  };

  export default Button