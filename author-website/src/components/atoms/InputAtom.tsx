import TextField from "@mui/material/TextField";
import React from "react";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
};

const InputAtom = ({
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error = false,
  helperText,
}: InputProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
    />
  );
};

export default InputAtom;
