import { connect } from 'react-redux';
import { fetchMenPhotos, fetchWomenPhotos } from '../../core/actions';
import TilesContainerComponent from './TilesContainerComponent';

const mapStateToProps = (state, props) => {
  const {
    filtersReducer: { filter },
    menPhotosReducer: { menPhotos, pending: mPending },
    womenPhotosReducer: { womenPhotos, pending: wPending }
  } = state;
  return props.id === 1 ?
    {
      photos: womenPhotos.filter(photo => photo.title.includes(filter)),
      pending: wPending
    } :
    {
      photos: menPhotos.filter(photo => photo.title.includes(filter)),
      pending: mPending
    };
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchPhotos: options =>
    props.id === 1 ? dispatch(fetchWomenPhotos(options)) : dispatch(fetchMenPhotos(options)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TilesContainerComponent);
