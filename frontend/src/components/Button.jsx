import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const { type, className, text } = this.props;

    Button.propTypes = {
      type: PropTypes.oneOf(['button', 'submit', 'reset']),
      className: PropTypes.string,
      text: PropTypes.string,
    };

    Button.defaultProps = {
      type: 'button',
      className: '',
      text: '',
    };

    return (
      <button type={type === 'submit' ? 'submit' : 'button'} className={className} data-testid="test-submit-btn">
        {text}
      </button>
    );
  }
}
