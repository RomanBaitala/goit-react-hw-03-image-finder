import { PureComponent } from 'react';
import { GalleryImages } from './GalleryImages/galleryImages';
import { Searchbar } from './Searchbar/searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends PureComponent {
  state = {
    query: '',
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };
  render() {
    const { query } = this.state;
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <GalleryImages query={query}></GalleryImages>
      </>
    );
  }
}
