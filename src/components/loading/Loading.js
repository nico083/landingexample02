import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Loading.scss';

export default class LoadingComponent extends React.Component {
  render() {
    return (
      <div className="Spinner">
        <img src={logo} alt="logo" />
      </div>
    );
  }
}
