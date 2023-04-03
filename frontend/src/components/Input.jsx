import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Input extends PureComponent {
  render() {
    const { name, type, placeholder, id, updateState } = this.props;

    Input.propTypes = {
      name: PropTypes.string,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      id: PropTypes.string,
      updateState: PropTypes.func,
    };

    Input.defaultProps = {
      name: '',
      type: '',
      placeholder: '',
      id: '',
      updateState: () => {},
    };

    return (
      <div className="input-container">
        <label htmlFor={id || name}>
          <span className="input-label"> {placeholder}</span>
          <input
            type={type}
            name={name}
            id={id || name}
            aria-label={name}
            placeholder={placeholder}
            onChange={updateState}
          />
        </label>
      </div>
    );
  }
}
