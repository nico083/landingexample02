import React from 'react';
import PropTypes from 'prop-types';
import './Search-field.scss';

export default class SearchFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    const { filterPhotos } = this.props;
    const { value } = event.target;
    this.setState({ value });
    filterPhotos(value);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="Form-group Search-field">
        <div className="Input-field tile is-8 is-12-mobile">
          <input
            type="text"
            value={value}
            placeholder="Search"
            onChange={e => this.handleChange(e)}
          />
        </div>
      </div>
    );
  }
}

SearchFieldComponent.propTypes = {
  filterPhotos: PropTypes.func.isRequired
};
