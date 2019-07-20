import { connect } from 'react-redux';
import FormGroupComponent from './FormGroupComponent';
import { newsletterEnableAction, setErrors } from '../../core/actions';

const mapDispatchToProps = dispatch => ({
  newsletterEnableAction: ({ email }) => dispatch(newsletterEnableAction(email)),
  setErrors: error => dispatch(setErrors(error))
});

export default connect(
  null,
  mapDispatchToProps
)(FormGroupComponent);
