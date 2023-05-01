import './sign-up-form.scss';

import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utilities';

const defaultFormFields = {
  displayName: '',
  email: '',
  password1: '',
  password2: '',
};

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password1, password2 } = formFields;

  // console.log('formFields = ', formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if( password1 !== password2 ){
      alert('Passwords do not match.');
      return false;
    }

    try {

      const { user } = await createAuthUserWithEmailAndPassword(email, password1);
      // console.log(user);

      await createUserDocumentFromAuth(user, {displayName});

      resetFormFields();

    } catch (error) {
      if( error.code === 'auth/email-already-in-use' ){
        alert('Cannot register this user because that email is already in use.');
      } else {
        console.log('Error registering user:', error);
      }

    }

  };

  return (
    <div className="signUpForm-container">
      <h2 className="signUpForm-primaryHeading">Don't have an account?</h2>
      <p className="signUpForm-description">Sign up with your email as password:</p>

      <form className="signUpForm" onSubmit={handleSubmit}>

        <FormInput label="Name" id="signUpForm-name" type="text" name="displayName" value={displayName} onChange={handleChange} required />

        <FormInput label="Email" id="signUpForm-email" type="email" name="email" value={email} onChange={handleChange} required />

        <FormInput label="Password" id="signUpForm-password1" type="password" name="password1" value={password1} onChange={handleChange} required />

        <FormInput label="Confirm Password" id="signUpForm-password2" type="password" name="password2" value={password2} onChange={handleChange} required />

        <div className="signUpForm-fieldGroup signUpForm-actions">
          <Button type="submit" buttonModifier="highlight">Register</Button>
        </div>

      </form>

    </div>
  );
}

export default SignUpForm;