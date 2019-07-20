import { filtersConstants } from '../constants';

export const filterPhotos = filter => ({
  type: filtersConstants.FILTER_PHOTOS,
  filter
});