import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class MessageBox extends PureComponent {
  render() {
    const { status, formMessage, updateStatusState } = this.props;

    MessageBox.propTypes = {
      status: PropTypes.oneOf(['', 'success', 'error']),
      formMessage: PropTypes.string,
      updateStatusState: PropTypes.func,
    };

    MessageBox.defaultProps = {
      status: '',
      formMessage: '',
      updateStatusState: () => {},
    };

    return (
      <div className={`alert ${status === 'error' ? 'alert-error' : status === 'success' ? 'alert-success' : ''}`}>
        <span
          className="close-btn"
          role="button"
          onClick={updateStatusState('', '')}
          tabIndex="0"
          onKeyDown={updateStatusState('', '')}
        >
          &times;
        </span>
        <strong>{status}</strong>
        <span> {formMessage} </span>
      </div>
    );
  }
}
