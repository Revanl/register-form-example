import React, { useState } from 'react';
import Input from './components/Input';
import Select from './components/Select';
import TextArea from './components/Textarea';
import Button from './components/Button';
import UploadFile from './components/UploadFile';
import Validation from './utils/Validation';
import MessageBox from './components/MessageBox';
import UploadBtn from './assets/upload-btn.png';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    // Define the state keys and their default values
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      form: {
        fullName: '',
        password: '',
        confirmPassword: '',
        gender: '',
        color: '#000000',
        dateOfBirth: '',
        dateOfBirth2: '',
        email: '',
        postCode: '',
        phone: '',
        range: '50',
        homepage: '',
        jobPositions: '',
        additionalInformations: '',
        fileImg: '',
      },
      formMessage: '',
      status: '',
    };
  }

  // Used for posting the form data to our api server
  async handleSubmit(e) {
    e.preventDefault();
    const formStates = this.state.form;
    try {
      const newValidation = new Validation();
      await newValidation.validiateForm(formStates);

      const res = await fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formStates),
      });

      const resJson = await res.json();
      //Update the form's alert message
      this.updateStatusState('success', 'The form has been successfully saved');
      console.log(resJson);
    } catch (err) {
      //Update the form's alert message
      this.updateStatusState('error', err.toString());
    }
  }

  // Update the form state
  updateState = (e) => {
    let newVal = '';
    if (e.target.type === 'checkbox') {
      newVal = e.target.checked;
    } else {
      newVal = e.target.value;
    }
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [e.target.name]: newVal,
      },
    }));
  };

  // Update the form message displaying state
  updateStatusState(status, formMessage) {
    this.setState({
      status: status,
      formMessage: formMessage,
    });
  }

  render() {
    return (
      <div className="App">
        <form
          onSubmit={this.handleSubmit}
          method="post"
          encType="multipart/form-data"
          data-testid="register-form"
        >
          <MessageBox
            status={this.state.status}
            formMessage={this.state.formMessage}
            updateStatusState={(e) => this.updateStatusState}
          />
          <div className="grid-container">
            <div className="input-group">
              <div className="input-group-heading">Basic Information</div>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                updateState={this.updateState}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                updateState={this.updateState}
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                updateState={this.updateState}
              />
              <div className="display-inline-input">
                <p>Gender</p>
                <Input
                  type="radio"
                  name="gender"
                  id="male"
                  placeholder="Male"
                  value="male"
                  updateState={this.updateState}
                />
                <Input
                  type="radio"
                  name="gender"
                  id="female"
                  placeholder="Female"
                  value="female"
                  updateState={this.updateState}
                />
              </div>
              <div className="display-inline-input">
                <p>Gender</p>
                <Input
                  type="checkbox"
                  name="bachelors"
                  value="bachelor"
                  placeholder="Bachelors"
                  updateState={this.updateState}
                />
                <Input
                  type="checkbox"
                  name="masters"
                  placeholder="Master"
                  value="Masters"
                  updateState={this.updateState}
                />
              </div>
            </div>

            <div>
              <div className="input-group">
                <div className="input-group-heading">Product Functionality</div>
                <Input
                  type="color"
                  name="color"
                  placeholder="Pick a color"
                  updateState={this.updateState}
                />
                <Input
                  type="date"
                  name="dateOfBirth"
                  updateState={this.updateState}
                />
                <Input
                  type="datetime-local"
                  name="dateOfBirth2"
                  updateState={this.updateState}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  updateState={this.updateState}
                />
                <Input
                  type="number"
                  name="postCode"
                  placeholder="Post code"
                  updateState={this.updateState}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  updateState={this.updateState}
                />
                <Input
                  type="range"
                  name="range"
                  placeholder="Salary range"
                  min="0"
                  max="100"
                  updateState={this.updateState}
                />
              </div>
            </div>

            <div>
              <div className="input-group">
                <div className="input-group-heading">
                  Additional information
                </div>
                <Input
                  type="url"
                  name="homepage"
                  placeholder="homepage"
                  updateState={this.updateState}
                />
                <Select
                  name="jobPositions"
                  placeholder="Job positions"
                  data='["frontend", "backend", "Fullstack"]'
                  updateState={this.updateState}
                />
                <TextArea
                  name="additionalInformations"
                  placeholder="Additional informations"
                  rows="8"
                  updateState={this.updateState}
                />
                <UploadFile
                  text="Upload Your Image"
                  name="fileImg"
                  uploadBtn={UploadBtn}
                  alt="upload file button"
                  updateState={this.updateState}
                />
              </div>
              <Input type="hidden" id="hiddenId" name="hiddenId" value="0" />
              <Button type="submit" text="Next" className="submit-btn" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
