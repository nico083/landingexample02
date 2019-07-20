import React from 'react';
import Notification from '../notification/Notification';
import DownloadAppComponent from '../download-app/DownloadAppComponent';
import { isNotificationSupported } from '../../utils/browserUtils';
import PropTypes from 'prop-types';

export default class RightBox extends React.Component {

  render() {
    return (
      <React.Fragment>
        {isNotificationSupported && <Notification {...this.props} />}
        {!isNotificationSupported && <DownloadAppComponent {...this.props} />}
      </React.Fragment>
    );
  }
}

RightBox.propTypes = {
  photos: PropTypes.object
};
