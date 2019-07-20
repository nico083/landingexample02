import React from 'react';
import Notification from 'react-web-notification';
import PropTypes from 'prop-types';
import { isMobile } from '../../utils/browserUtils';
import './Notification.scss';

export default class NotificationComponent extends React.Component {
  state = { ignore: true, title: '' };

  componentDidMount() {
    const { notificationCheckAction } = this.props;
    notificationCheckAction();
  }

  handlePermissionGranted = () => {
    console.log('Permission Granted');
    this.setState({ ignore: false });
  };
  handlePermissionDenied = () => {
    console.log('Permission Denied');
    this.setState({ ignore: true });
  };

  handleNotSupported = () => {
    console.log('Web Notification not Supported');
    this.setState({ ignore: true });
  };

  handleNotificationOnClick = (e, tag) => {
    console.log(e, 'Notification clicked tag:', tag);
  };

  handleNotificationOnError = (e, tag) => {
    console.log(e, 'Notification error tag:', tag);
  };

  handleNotificationOnClose = (e, tag) => {
    console.log(e, 'Notification closed tag:', tag);
  };

  handleNotificationOnShow = (e, tag) => {
    this.playSound();
    console.log(e, 'Notification shown tag:', tag);
  };

  playSound = () => {
    document.getElementById('sound').play();
  };

  handleNotification = () => {
    const { notificationEnable } = this.props;
    notificationEnable();
  };

  handleButtonClick = () => {
    const now = Date.now();
    const title = `React-Web-Notification${now}`;
    const options = {
      tag: now,
      body: `Hello ${new Date()}`,
      icon: './favicon.ico',
      lang: 'en',
      dir: 'ltr',
      sound: './sound.mp3'
    };
    this.setState({ title, options });
  };

  render() {
    const { enabled } = this.props;
    const mobileClass = isMobile ? 'Mobile' : '';
    return (
      <div
        className={'Notification  column is-2-fullhd is-5-tablet tile is-ancestor '.concat(
          mobileClass
        )}
      >
        <h1 className="tile-child">Web Push Notification</h1>
        <p className="tile-child">Be the first to know about special deals</p>
        <div className="tile-child">
          <ul>
            <li>Real time instant notification</li>
            <li>No need to fill or download anything</li>
            <li>Turn off notifications anytime from your browser settings</li>
          </ul>
        </div>
        <div className="tile-child">
          {/* <button className="button is-black box-buttons" onClick={this.handleButtonClick}>Notification</button> */}
          <button
            className="button is-black box-buttons"
            onClick={this.handleNotification}
          >
            KEEP ME UPDATED
          </button>
        </div>
        {enabled && (
          <Notification
            ignore={this.state.ignore && this.state.title !== ''}
            notSupported={this.handleNotSupported}
            onPermissionGranted={this.handlePermissionGranted}
            onPermissionDenied={this.handlePermissionDenied}
            onShow={this.handleNotificationOnShow}
            onClick={this.handleNotificationOnClick}
            onClose={this.handleNotificationOnClose}
            onError={this.handleNotificationOnError}
            timeout={5000}
            title={this.state.title}
            options={this.state.options}
          />)}

        {enabled && <audio id="sound" preload="auto">
          <source src="./sound.mp3" type="audio/mpeg" />
          <source src="./sound.ogg" type="audio/ogg" />
          <embed
            hidden={true}
            autostart="false"
            loop={false}
            src="./sound.mp3"
          />
        </audio>}
      </div>
    );
  }
}

NotificationComponent.propTypes = {
  enabled: PropTypes.bool,
  notificationCheckAction: PropTypes.func.isRequired
};
