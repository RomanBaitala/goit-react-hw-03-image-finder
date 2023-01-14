import { PureComponent } from 'react';
import { fetchData } from 'components/api/api';
import { GalleyItem } from './GalleyItem/galleryItem';
import { GalleryList } from './galleryImages.styled';
import { ButtonMore } from 'components/Button/buttonMore';
import { Loader } from 'components/Loader/loader';

export class GalleryImages extends PureComponent {
  state = {
    data: [],
    error: null,
    page: 1,
    totalHits: null,
    status: 'idle',
  };
  loadMore = evt => {
    evt.preventDefault();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: 'pending', page: 1 });
      fetchData(this.props.query)
        .then(({ data }) => {
          this.setState(prevState => ({
            data: data.hits,
            status: 'resolved',
            totalHits: data.totalHits,
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
    if (prevState.page !== this.state.page) {
      fetchData(this.props.query, this.state.page)
        .then(({ data }) => {
          this.setState(prevState => ({
            data: [...prevState.data, ...data.hits],
            status: 'resolved',
            totalHits: data.totalHits,
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  lastPage = (page, res) => {
    if (Math.ceil(res / 12) === page) {
      return true;
    }
  };
  render() {
    const { status, page, totalHits } = this.state;
    if (status === 'idle') {
      return;
    }

    if (status === 'pending') {
      return <Loader></Loader>;
    }

    if (status === 'rejected') {
      return <h1>Not found</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <GalleryList>
            {this.state.data.map(({ id, webformatURL, largeImageURL }) => (
              <GalleyItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              ></GalleyItem>
            ))}
          </GalleryList>
          {this.lastPage(page, totalHits) === true ? (
            ''
          ) : (
            <ButtonMore onClick={this.loadMore}></ButtonMore>
          )}
        </>
      );
    }
  }
}
