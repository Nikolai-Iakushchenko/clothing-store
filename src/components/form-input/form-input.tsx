import React from "react";

import "./form-input.scss";

interface FormInputProps {
  label: string;

  [x: string]: any;
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
