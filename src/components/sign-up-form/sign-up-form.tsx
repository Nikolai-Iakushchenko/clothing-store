import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log("formFields", formFields);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      password: { value: string };
      confirmPassword: { value: string };
    };

    //   todo confirm that passwords match
    const password = target.password.value;
    const confirmedPassword = target.confirmPassword.value;

    if (password !== confirmedPassword) {
      return console.error("Passwords don't match");
      // throw new Error("Passwords don't match");
    }

    console.log("event", event);
    console.log("password", password);
    // todo see if we authenticated user with email and password
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      console.log("response", response);
      if (!response) {
        return console.error("No response from the server!!");
      }

      interface User {
        email: string;
      }

      //todo create a user document from what createAuthUserWithEmailAndPassword returns
      const user = response.user as User;
      const userDocument = {
        displayName: user.email.substring(0, user.email.indexOf("@")),
        email: user.email,
      };
      console.log("userDocument", userDocument);
    } catch (error: any) {
      console.error("Sign in error:", error.message);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
