import { filtersConstants } from '../constants';

const initialState = { filter: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case filtersConstants.FILTER_PHOTOS:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};
