import React from 'react';
import Typography from '@mui/material/Typography';

type ErrorTextProps = {
  children: React.ReactNode;
};

const ErrorTextAtom = ({ children }: ErrorTextProps) => {
  return (
    <Typography variant="caption" color="error">
      {children}
    </Typography>
  );
};

export default ErrorTextAtom;
