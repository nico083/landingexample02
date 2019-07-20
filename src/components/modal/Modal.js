import { connect } from 'react-redux';
import { setErrors } from '../../core/actions';
import ModalComponent from './ModalComponent';

const mapStateToProps = state => {
  const {
    errorsReducer: { error }
  } = state;
  return { error };
};

const mapDispatchToProps = dispatch => ({
  setErrors: error => dispatch(setErrors(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent);
