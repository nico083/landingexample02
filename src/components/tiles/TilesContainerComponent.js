import React from 'react';
import Tile from './TileComponent';
import Loading from '../loading/Loading';
import PropTypes from 'prop-types';

export default class TilesContainerComponent extends React.Component {
  componentDidMount() {
    const { fetchPhotos, id: albumId } = this.props;
    fetchPhotos({ albumId });
  }

  render() {
    const { photos, pending } = this.props;
    if (pending) return <Loading />;
    return (
      <div className="columns is-multiline is-centered">
        {photos.map(photo => (
          <Tile key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}

TilesContainerComponent.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  fetchPhotos: PropTypes.func.isRequired
};
