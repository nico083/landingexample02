import { menPhotosConstants } from '../constants';

const initialState = {
  pending: false,
  menPhotos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case menPhotosConstants.FETCH_MEN_PHOTOS_PENDING:
      return {
        ...state,
        pending: true
      };
    case menPhotosConstants.FETCH_MEN_PHOTOS_SUCCESS:
      return {
        ...state,
        pending: false,
        menPhotos: action.photos
      };
    case menPhotosConstants.FETCH_MEN_PHOTOS_ERROR:
      return {
        ...state,
        pending: false,
      };
    default:
      return state;
  }
};
