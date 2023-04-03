import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Select extends PureComponent {
  constructor(props) {
    super(props);
    this.options = JSON.parse(this.props.data).map((el, i) => (
      <option key={i} value={el}>
        {el}
      </option>
    ));
  }

  render() {
    const {
      name, placeholder, data, updateState,
    } = this.props;

    Select.propTypes = {
      name: PropTypes.string,
      placeholder: PropTypes.string,
      data: PropTypes.string,
      updateState: PropTypes.func,
    };

    Select.defaultProps = {
      name: '',
      placeholder: '',
      data: '',
      updateState: () => {},
    };

    return (
      <select name={name} placeholder={placeholder} onChange={updateState}>
        <option value="" hidden>
          {placeholder}
        </option>
        {this.options}
      </select>
    );
  }
}
