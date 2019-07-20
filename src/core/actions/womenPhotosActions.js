import { womenPhotosConstants } from '../constants';
import { aGet } from '../../utils/fetchUtils';
import { setErrors } from './errorsActions';

const fetchWomenPhotosPending = () => ({
  type: womenPhotosConstants.FETCH_WOMEN_PHOTOS_PENDING
});

const fetchWomenPhotosSuccess = photos => ({
  type: womenPhotosConstants.FETCH_WOMEN_PHOTOS_SUCCESS,
  photos
});

export const fetchWomenPhotosError = () => ({
  type: womenPhotosConstants.FETCH_WOMEN_PHOTOS_ERROR
});

export const fetchWomenPhotos = (options = {}) => {
  return dispatch => {
    dispatch(fetchWomenPhotosPending());
    aGet('PHOTOS', options)
      .then(res => dispatch(fetchWomenPhotosSuccess(res.data)))
      .catch(error => {
        dispatch(fetchWomenPhotosError(error));
        dispatch(setErrors(error));
      });
  };
};
