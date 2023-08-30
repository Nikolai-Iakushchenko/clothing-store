import React from "react";

import "./button.scss";

export const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export enum ButtonTypeClasses {
  google = "google",
  inverted = "inverted",
}

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  children: React.ReactNode;
  buttonType?: ButtonTypeClasses;
}

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={`button-container ${
        buttonType && BUTTON_TYPES_CLASSES[buttonType]
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
