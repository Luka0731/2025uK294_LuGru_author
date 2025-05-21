import React from 'react';
import Typography from '@mui/material/Typography';

type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
};

const LabelAtom = ({ children, htmlFor }: LabelProps) => {
  return (
    <Typography variant="subtitle2" component="label" htmlFor={htmlFor}>
      {children}
    </Typography>
  );
};

export default LabelAtom;
