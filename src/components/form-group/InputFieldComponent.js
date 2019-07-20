import React from 'react';
import PropTypes from 'prop-types';

export default class InputFieldComponent extends React.Component {
  state = { value: '', error: null };

  componentDidUpdate(prevProps) {
    const { submitted, name, updateField } = this.props;
    if (submitted !== prevProps.submitted) {
      const reset = { value: '', error: null };
      this.setState(reset);
      updateField({ [name]: reset.value, error: 'init', submitted: false });
    }
  }

  handleChange(event) {
    const { updateField, name } = this.props;
    const value = this.handleValidation(event.target.value);
    this.setState({ ...value });
    updateField({ [name]: value.value, error: value.error });
  }

  handleValidation = value => {
    const { validators } = this.props;
    const error = validators
      .map(v => (typeof v === 'function' ? v(value) : v))
      .filter(f => f)[0];
    return { error, value };
  };

  render() {
    const { error, value } = this.state;
    const { label, type } = this.props;
    return (
      <div className="Input-field">
        <input
          className={error ? "Error-input" : ""}
          type={type}
          value={value}
          placeholder={label}
          onChange={e => this.handleChange(e)}
        />
        {error && <div className="Error-msg">{error}</div>}
        {!error && <div className="Error-msg">&nbsp;</div>}
      </div>
    );
  }
}

InputFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validators: PropTypes.arrayOf(PropTypes.func)
};
