import { PureComponent } from 'react';
import { GalleryImageG, GalleryItemG } from './galleryItem.styled';
import { Modal } from 'components/Modal/modal';

export class GalleyItem extends PureComponent {
  state = {
    modal: false,
  };
  toggleModal = () => {
    this.setState(({ modal }) => ({ modal: !modal }));
  };
  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    return (
      <>
        <GalleryItemG key={id} onClick={this.toggleModal}>
          <GalleryImageG src={webformatURL} alt="" />
        </GalleryItemG>
        {this.state.modal && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.toggleModal}
          ></Modal>
        )}
      </>
    );
  }
}
