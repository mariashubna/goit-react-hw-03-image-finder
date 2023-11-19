import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { serviceSearch } from './Searchbar/Pixabay';
import css from './App.module.css'

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    currentItem: null,
    isLoading: false,
    isModalOpen: false,
    isLoadMore: false,
    isSearchDisabled: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.setState({ isLoading: true, isSearchDisabled: true });
      serviceSearch(query, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            this.setState({
              error:
                'Unfortunately, no images were found for your search query. Please try again.',
            });
            return;
          }
          this.setState(prev => ({
            images: [...prev.images, ...hits],
            isLoadMore: this.state.page < Math.ceil(totalHits / 12),
            error: '',
          }));
        })
        .catch(error =>
          this.setState({
            error: 'Sorry, something went wrong. Please try again later.',
          })
        )
        .finally(() =>
          this.setState({ isLoading: false, isSearchDisabled: false })
        );
    }
  }

  handleSearch = obj => {
    if (obj.searchQuery.trim() === '') {
      this.setState({
        error: 'What are you looking for?',
      });
      return;
    }
    this.setState({
      query: obj.searchQuery,
      page: 1,
      images: [],
      isLoadMore: false,
      error: '',
    });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleOpenModal = largeImageURL=> {
    this.setState({ largeImageURL, isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ currentItem: null, isModalOpen: false });
  };

  render() {
    const {
      images,
      isLoading,
      isLoadMore,
      isModalOpen,
      largeImageURL,
      error,
    } = this.state;

    return (
      <div className={css.main}>
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p>{error}</p>}
        <ImageGallery items={images} openModal={this.handleOpenModal} />
        {isLoading && <Loader />}
        {isLoadMore && <Button onClick={this.handleLoadMore} />}
        {isModalOpen && <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />}
      </div>
    );
  }
}
