import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
export const isMobile = md.mobile() ? true : false;

export const isNotificationSupported =
  'Notification' in window && window.Notification;
