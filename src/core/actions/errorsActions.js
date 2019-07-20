import { errorsConstants } from '../constants';

export const setErrors = error => ({
  type: errorsConstants.SET_ERRORS,
  error
});