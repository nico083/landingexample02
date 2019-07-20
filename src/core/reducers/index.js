import { combineReducers } from 'redux';
import womenPhotosReducer from './womenPhotosReducers';
import menPhotosReducer from './menPhotosReducers';
import notificationsReducer from './notificationsReducers';
import filtersReducer from './filtersReducers';
import errorsReducer from './errorsReducers';

export default combineReducers({
  menPhotosReducer,
  womenPhotosReducer,
  notificationsReducer,
  filtersReducer,
  errorsReducer
});
