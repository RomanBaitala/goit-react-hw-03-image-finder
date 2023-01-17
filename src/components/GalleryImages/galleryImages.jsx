import { PureComponent } from 'react';
import { fetchData } from 'api/api';
import { GalleyItem } from './GalleyItem/galleryItem';
import { GalleryList, NotFound } from './galleryImages.styled';
import { ButtonMore } from 'components/Button/buttonMore';
import { Loader } from 'components/Loader/loader';

export class GalleryImages extends PureComponent {
  state = {
    data: [],
    error: null,
    totalHits: null,
    page: 1,
    status: false,
    isLoading: false,
    buttonMore: false,
  };

  loadMore = evt => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ isLoading: true, page: 1 });
      fetchData(this.props.query)
        .then(({ data }) => {
          this.setState(prevState => ({
            data: data.hits,
            isLoading: false,
            status: false,
            buttonMore: true,
            totalHits: data.totalHits,
          }));
          if (data.totalHits === 0) {
            this.setState({ status: true, buttonMore: false });
          }
        })
        .catch(error => this.setState({ error, status: true }));
    }

    if (prevState.page !== this.state.page) {
      fetchData(this.props.query, this.state.page)
        .then(({ data }) => {
          this.setState(prevState => ({
            data: [...prevState.data, ...data.hits],
            status: false,
            buttonMore: true,
            totalHits: data.totalHits,
          }));
          if (data.totalHits === 0) {
            this.setState({
              status: true,
              buttonMore: false,
            });
          }
        })
        .catch(error => this.setState({ error, status: true }));
    }

    if (
      this.state.data.length !== 0 &&
      !this.state.buttonMore &&
      this.state.data.length < this.state.totalHits
    ) {
      this.setState({ buttonMore: true });
    } else if (
      this.state.data.length >= this.state.totalHits &&
      this.state.buttonMore
    ) {
      this.setState({ buttonMore: false });
    }
  }

  render() {
    const { status, isLoading, buttonMore } = this.state;

    return (
      <>
        <GalleryList>
          {this.state.data.map(({ id, webformatURL, largeImageURL }) => (
            <GalleyItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </GalleryList>
        {buttonMore ? <ButtonMore onClick={this.loadMore} /> : ''}
        {status ? <NotFound>Not found😢🐷</NotFound> : ''}
        {isLoading ? <Loader /> : ''}
      </>
    );
  }
}
