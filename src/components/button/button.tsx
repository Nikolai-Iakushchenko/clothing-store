import React from "react";
import {
  BaseButton,
  GoogleSingInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (
  buttonType = BUTTON_TYPES_CLASSES.base,
) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSingInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  })[buttonType];

export enum ButtonTypeClasses {
  google = "google",
  inverted = "inverted",
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<any> {
  children: React.ReactNode;
  // buttonType?: ButtonTypeClasses;
  buttonType?: string;
}

const Button = ({
  children,
  buttonType,
  ...otherProps
}: ButtonProps) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps}>{children}</CustomButton>
  );
};

export default Button;
