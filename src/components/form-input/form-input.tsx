import React from "react";
import {
  FormInputLabel,
  Group,
  Input,
} from "./form-input.styles";

interface FormInputProps {
  label: string;

  [x: string]: any;
}

const FormInput = ({
  label,
  ...otherProps
}: FormInputProps) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
