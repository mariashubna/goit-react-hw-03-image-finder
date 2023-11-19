import css from './Searchbar.module.css';
import searchIcon from './search.png'; 

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchInput = e.target.elements.searchInput.value;
    onSubmit({ searchQuery: searchInput });
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.button_label}>Search</span>
        </button>

        <input       
          name="searchInput"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
         <img src={searchIcon} alt="Search" className={css.searchIcon} />
      </form>
    </header>
  );
};

export default Searchbar;