// src/components/molecules/InputField.tsx
import React from 'react';
import InputAtom from '../atoms/InputAtom';

type InputFieldProps = {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputFieldMolecule = ({
  name,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
}: InputFieldProps) => {
  return (
    <>
      <InputAtom
        name={name}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={!!error}
        helperText={error}
      />
    </>
  );
};

export default InputFieldMolecule;
