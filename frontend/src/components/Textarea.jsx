import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Textarea extends PureComponent {
  render() {
    const { name, placeholder, updateState } = this.props;

    Textarea.propTypes = {
      name: PropTypes.string,
      placeholder: PropTypes.string,
      updateState: PropTypes.func,
    };

    Textarea.defaultProps = {
      name: '',
      placeholder: '',
      updateState: () => {},
    };

    return (
      <div>
        <textarea name={name} placeholder={placeholder} onChange={updateState} />
      </div>
    );
  }
}
