import { notificationsCostants } from '../constants';

const initialState = {
    enabled: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case notificationsCostants.NOTIFICATION_ENABLE:
            return {
                ...state,
                enabled: true
            };
        case notificationsCostants.NOTIFICATION_CHECK:
            return {
                ...state,
                enabled: action.type.enabled
            };
        default:
            return state;
    }
};

