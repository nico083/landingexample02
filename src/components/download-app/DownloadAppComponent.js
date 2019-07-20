import React from 'react';
import qrcode from '../../assets/images/qrcode.png';
import appstore from '../../assets/images/appstore.png';
import './Download-app.scss';

export default class DownloadAppComponent extends React.Component {

  render() {
    return (
      <div className="Download-app column is-2-fullhd is-5-tablet tile is-ancestor">
        <h1 className="tile-child">Download iOS App</h1>
        <p className="tile-child">
          Score the best Black Friday deals by downloading our app and receiving
          instant updates on sales, exclusive promotions and limited time offers
        </p>
        <div className="tile-child Qr-code">
          <img src={qrcode} alt="iOS" />
        </div>
        <div className="tile-child App-store">
          <img src={appstore} alt="App Store" />
        </div>
      </div>
    );
  }
}
