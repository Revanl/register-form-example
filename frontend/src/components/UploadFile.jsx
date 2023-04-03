import React from 'react';
import PropTypes from 'prop-types';

export default class UploadFile extends React.Component {
  constructor() {
    super();
    this.state = {
      imgPreview: '',
    };
  }

  render() {
    const {
      text, name, uploadBtn, alt, updateState,
    } = this.props;
    const { imgPreview } = this.state;

    UploadFile.propTypes = {
      text: PropTypes.string,
      name: PropTypes.string,
      uploadBtn: PropTypes.string,
      alt: PropTypes.string,
      updateState: PropTypes.func,
    };

    UploadFile.defaultProps = {
      text: '',
      name: '',
      uploadBtn: '',
      alt: '',
      updateState: () => {},
    };

    return (
      <div className="input-container">
        <div className="file-container bg-white text-black">
          <div
            className="file-upload-trigger"
            role="button"
            onClick={() => document.querySelector('#fileImg').click()}
            tabIndex="0"
            onKeyDown={() => {}}
          >
            <span>{text}</span>
            <img src={uploadBtn} alt={alt} className="file-upload-btn-img" />
          </div>
          <input
            type="file"
            name={name}
            id={name}
            accept=".png, .jpg"
            onChange={(e) => {
              this.setState({
                imgPreview: URL.createObjectURL(e.target.files[0]),
              });
              updateState(e);
            }}
            hidden
          />
          {imgPreview && (
            <div>
              <img src={imgPreview} alt="preview" className="image-preview" />
            </div>
          )}
        </div>
      </div>
    );
  }
}
