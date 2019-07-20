import { formCostants } from '../constants';
import { aPost } from '../../utils/fetchUtils';
// import { setErrors } from './errorsActions';

const newsletterEnable = email => ({
  type: formCostants.NEWSLETTER_SUBS,
  email
});

export const newsletterEnableAction = email => {
  return dispatch => {
    dispatch(newsletterEnable(email));
    aPost('NEWSLETTER', { email }) // fake subscription
      .then(res => localStorage.setItem('newsletter', true));
    //   .catch(error => console.log(error));
  };
};
