import './sign-in-form.scss';

import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_MODIFIERS } from '../button/button.component';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utilities/firebase/firebase.utilities';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log('formFields = ', formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      console.log('In sign in handleSubmit(): ', user);

      resetFormFields();


    } catch (error) {
      // console.log('Error signing in: ');
      // console.log({error});
      // console.log(error.code);

      if( error.code ){
        switch (error.code) {
          case 'auth/wrong-password':
            alert('Incorrect password.')
            break;

          case 'auth/user-not-found':
            alert('That email is not registered.')
            break;

          default:
            console.log({ error });
            break;
        }
      }

    }

  };

  return (
    <div className="signInForm-container">
      <h2 className="signInForm-primaryHeading">Already have an account?</h2>

      <div className="signInForm-methodGoogle">
        <Button type="button" buttonModifier={BUTTON_MODIFIERS.highlight} onClick={signInWithGoogle}>Sign In With Google</Button>
      </div>

      <div className="signInForm-methodEmail">
        <p className="signInForm-description">or sign in with your email and password:</p>

        <form className="signInForm" onSubmit={handleSubmit}>

          <FormInput label="Email" id="signInForm-email" type="email" name="email" value={email} onChange={handleChange} required />

          <FormInput label="Password" id="signInForm-password" type="password" name="password" value={password} onChange={handleChange} required />

          <div className="signInForm-fieldGroup signInForm-actions">
            <Button type="submit" buttonModifier={BUTTON_MODIFIERS.highlight}>Sign In</Button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default SignInForm;
