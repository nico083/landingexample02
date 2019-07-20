import { menPhotosConstants } from '../constants';
import { aGet } from '../../utils/fetchUtils';
import { setErrors } from './errorsActions';

const fetchPhotosPending = () => ({
  type: menPhotosConstants.FETCH_MEN_PHOTOS_PENDING
});

const fetchPhotosSuccess = photos => ({
  type: menPhotosConstants.FETCH_MEN_PHOTOS_SUCCESS,
  photos
});

export const fetchPhotosError = () => ({
  type: menPhotosConstants.FETCH_MEN_PHOTOS_ERROR
});

export const fetchMenPhotos = (options = {}) => {
  return dispatch => {
    dispatch(fetchPhotosPending());
    aGet('PHOTOS', options)
      .then(res => dispatch(fetchPhotosSuccess(res.data)))
      .catch(error => {
        dispatch(fetchPhotosError());
        dispatch(setErrors(error));
      });
  };
};
