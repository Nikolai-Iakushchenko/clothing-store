import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  // const [formFields, setFormFields] = useState(defaultFormFields);
  // const { email, password } = formFields;
  //
  // console.log("formFields", formFields);
  //
  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  // };
  //
  // const handleSubmit = async (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //
  //   try {
  //     resetFormFields();
  //   } catch (error: any) {}
  // };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //
  //   setFormFields({ ...formFields, [name]: value });
  // };

  return (
    <div>
      {/*<h1>Sign up with your email and password</h1>*/}
      {/*<form onSubmit={handleSubmit}>*/}
      {/*  <label>Display Name</label>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    required*/}
      {/*    onChange={handleChange}*/}
      {/*    name="displayName"*/}
      {/*    value={displayName}*/}
      {/*  />*/}
      {/*  <label>Email</label>*/}
      {/*  <input*/}
      {/*    type="email"*/}
      {/*    required*/}
      {/*    onChange={handleChange}*/}
      {/*    name="email"*/}
      {/*    value={email}*/}
      {/*  />*/}
      {/*  <label>Password</label>*/}
      {/*  <input*/}
      {/*    type="password"*/}
      {/*    required*/}
      {/*    onChange={handleChange}*/}
      {/*    name="password"*/}
      {/*    value={password}*/}
      {/*  />*/}
      {/*  <label>Confirm Password</label>*/}
      {/*  <input*/}
      {/*    type="password"*/}
      {/*    required*/}
      {/*    onChange={handleChange}*/}
      {/*    name="confirmPassword"*/}
      {/*    value={confirmPassword}*/}
      {/*  />*/}
      {/*  <button type="submit">Sign Up</button>*/}
      {/*</form>*/}
    </div>
  );
};

export default SignInForm;
