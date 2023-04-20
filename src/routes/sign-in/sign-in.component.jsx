import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utilities/firebase/firebase.utilities';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    // console.log(response);
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

  }

  return (
    <div>
      {/* <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      <SignUpForm />
    </div>
  );
}

export default SignIn;