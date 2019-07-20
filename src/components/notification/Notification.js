import { connect } from 'react-redux';
import NotificationComponent from './NotificatinComponent';
import { notificationCheckAction, notificationEnableAction } from '../../core/actions';


const mapStateToProps = state => {
  const { notificationsReducer: { enabled } } = state;
  return { enabled };
}

const mapDispatchToProps = dispatch => ({
  notificationCheckAction: () => dispatch(notificationCheckAction()),
  notificationEnable: () => dispatch(notificationEnableAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationComponent);
