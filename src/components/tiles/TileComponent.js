import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import './Tile.scss';

export default class TileComponent extends React.PureComponent {
  render() {
    const { photo } = this.props;
    return (
      <div className="column is-4 is-12-mobile Tile">
        <LazyLoad offset={100}>
          <img src={photo.url} alt={photo.id} />
        </LazyLoad>
        <span className="is-size-1 is-size-1-fullhd is-size-2-mobile is-size-4-tablet">
          {photo.title}
        </span>
      </div>
    );
  }
}

TileComponent.propTypes = {
  photo: PropTypes.shape({
    albumId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  }).isRequired
};
