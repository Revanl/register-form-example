import { PureComponent } from 'react';

export default class Validation extends PureComponent {
  validiateForm(formStates) {
    Object.fromEntries(
      Object.entries(formStates).filter(([key, value]) => {
        if (key === 'password' && value.length < 8) {
          throw new Error(`The ${key} must not be less than 8 characters`);
          }
          return true;
      }),
    );
    // for (const [name, val] of Object.entries(formStates)) {
    //   if (val.length === 0) {
    //     throw new Error(`The field ${name} must not be empty`);
    //   }
    //   if (name === 'password' && val.length < 8) {
    //     this.setState({ success: false });
    //     throw new Error('password have to match!');
    //   }
    // }
  }
}
