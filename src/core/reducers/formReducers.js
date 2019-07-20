import { formCostants } from '../constants';

const initialState = {
    newsletter: false,
    email: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case formCostants.NEWSLETTER_SUBS:
            return {
                ...state,
                newsletter: true,
                email: action.email
            };
        default:
            return state;
    }
};

