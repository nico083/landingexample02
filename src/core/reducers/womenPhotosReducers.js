import { womenPhotosConstants } from '../constants';

const initialState = {
  pending: false,
  womenPhotos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case womenPhotosConstants.FETCH_WOMEN_PHOTOS_PENDING:
      return {
        ...state,
        pending: true
      };
    case womenPhotosConstants.FETCH_WOMEN_PHOTOS_SUCCESS:
      return {
        ...state,
        womenPhotos: action.photos,
        pending: false
      };
    case womenPhotosConstants.FETCH_WOMEN_PHOTOS_ERROR:
      return {
        ...state,
        pending: false,
      };
    default:
      return state;
  }
};
