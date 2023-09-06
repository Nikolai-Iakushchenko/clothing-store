import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import Button, {
  BUTTON_TYPES_CLASSES,
} from "../button/button";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles";
import {
  SignInButtonContainer,
  SignInContainer,
} from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(
    defaultFormFields,
  );
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const handleSubmit = async (
    event: React.SyntheticEvent,
  ) => {
    event.preventDefault();

    try {
      // @ts-ignore
      const { user } =
        await signInAuthUserWithEmailAndPassword(
          email,
          password,
        );

      resetFormFields();
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password is incorrect");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.error(error);
      }
    }
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <SignInButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            onClick={signInWithGoogle}
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Google sign in
          </Button>
        </SignInButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
