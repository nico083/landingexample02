import { errorsConstants } from '../constants';

const initialState = { error: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case errorsConstants.SET_ERRORS:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
