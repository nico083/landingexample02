import { notificationsCostants } from '../constants';

const notificationEnable = () => ({
    type: notificationsCostants.NOTIFICATION_ENABLE
});

const notificationCheck = (enabled) => ({
    type: notificationsCostants.NOTIFICATION_CHECK,
    enabled
});

export const notificationEnableAction = () => {
    return dispatch => {
        dispatch(notificationEnable());
        localStorage.setItem('notificationEnabled', true)
    };
};


export const notificationCheckAction = () => {
    return dispatch => {
        const enabled = localStorage.getItem('notificationEnabled')
        dispatch(notificationCheck(enabled));
    };
};