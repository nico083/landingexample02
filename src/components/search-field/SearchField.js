import { connect } from 'react-redux';
import SearchFieldComponent from './SearchFieldComponent';
import { filterPhotos } from '../../core/actions'

const mapDispatchToProps = dispatch => ({
  filterPhotos: (filter) => dispatch(filterPhotos(filter)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchFieldComponent);
