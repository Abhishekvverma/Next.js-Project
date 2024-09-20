import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';

interface PasswordInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
}

const PasswordInput = ({ value, onChange, error, helperText }: PasswordInputProps) => {
  return (
    <TextField
      fullWidth
      id="password"
      name="password"
      label="Password"
      type="password"
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
};

export default PasswordInput;
