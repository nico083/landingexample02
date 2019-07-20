import React from 'react';
import PropTypes from 'prop-types';
import InputField from './InputFieldComponent';
import fields from './formFields';
import { isMobile } from '../../utils/browserUtils';
import './Form-group.scss';

export default class FormGroupComponent extends React.Component {
  state = {
    error: 'init',
    hasError: true,
    submitted: false,
    privacy: false
  };

  handleSubmit = event => {
    const { action, newsletterEnableAction, setErrors } = this.props;
    event.preventDefault();
    if (action === 'newsletter') {
      newsletterEnableAction(this.state);
      this.setState({ email: null, submitted: true, privacy: false });
      setErrors('Succefull subscription');
    }
  };

  updateField = value => {
    this.setState({ ...value });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    const { error, submitted, privacy } = this.state;
    const { action, subtitle } = this.props;
    const hasError = error || !privacy ? true : false;
    const mobileClass = isMobile ? 'Mobile' : '';
    return (
      <div
        className={'Form-group column is-2-fullhd is-5-tablet tile is-ancestor '.concat(
          mobileClass
        )}
      >
        <h1 className="tile is-child">{action}</h1>
        <p className="tile">{subtitle}</p>
        <form className="tile is-vertical" onSubmit={this.handleSubmit}>
          <div className="tile">
            {fields[action].map(field => (
              <label key={field.name}>
                <span>{field.name}</span>
                <InputField
                  {...field}
                  updateField={this.updateField}
                  submitted={submitted}
                />
              </label>
            ))}
          </div>
          <div className="tile">
            <input
              className="tile is-child is-1"
              type="checkbox"
              name="privacy"
              checked={privacy}
              onChange={this.handleInputChange}
            />
            <p className="Privacy-text tile is-child">
              I have read the Privacy Policy, and I agree to the processing of
              my personal data in order to receive commercial communications and
              promotions by newsletter from LUISAVIAROMA.COM
            </p>
          </div>
          <div className="tile">
            <input
              type="submit"
              className="button is-black box-buttons"
              disabled={hasError}
              value="SUBSCRIBE"
            />
          </div>
        </form>
      </div>
    );
  }
}

FormGroupComponent.propTypes = {
  action: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  setErrors: PropTypes.func.isRequired,
  newsletterEnableAction: PropTypes.func.isRequired
};
