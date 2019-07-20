import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './Modal.scss';

export default class ModalComponent extends React.Component {
  state = { open: false };

  onCloseModal = () => {
    const { setErrors } = this.props;
    this.setState({ open: false });
    setErrors(null);
  };

  componentDidUpdate() {
    const { open } = this.state;
    const { error } = this.props;
    if (error && !open) {
      this.setState({ open: true });
    }
  }

  render() {
    const { open } = this.state;
    const { error } = this.props;
    return (
      <Modal open={open} onClose={this.onCloseModal} center>
        <div className="Modal">{error && <div>{error.toString()}</div>}</div>
      </Modal>
    );
  }
}

ModalComponent.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
