import React from 'react';
import RightBox from '../right-box/RightBox';
import FormGroup from '../form-group/FormGroup';
import Tabs from '../tabs/TabsComponent';
import './Header.scss';
import mail from '../../assets/images/ico-mail.svg';
import notification from '../../assets/images/ico-notification.svg';
// import app from "../../assets/images/ico-download-app.svg";

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Header columns is-multiline is-centered">
          <div className="Left-panel column is-5-fullhd is-10-tablet is-12-mobile">
            <h1 className="title is-1">Black Friday</h1>
            <p className="subtitle">
              Don't miss out on Black Friday deals, just in time for Christmas
              Shopping! Up to 70% on all your favourite men's, women's, and kids
              brands like Alberta Ferretti, Casadei, Marni, Dsquared2, Versace,
              and Maison Margiela. Join in on this fun American tradition and
              keep an eye out for the best offfers on clothing, bags,
              accessories, and shoes the day after Thanksgiving. Subscribe our
              newsletter and to our web push notifications to receive updates on
              sales and special delas.
            </p>
          </div>
          <Tabs
            tabs={[mail, notification]}
            components={[
              <FormGroup
                key="newsletter"
                action="newsletter"
                subtitle="Receive updates on sales and offers directly to your in-box"
              />,
              <RightBox key="rightbox" />
            ]}
          />
        </div>
      </React.Fragment>
    );
  }
}
