import React from "react";
import MuiButton from "@mui/material/Button";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const ButtonAtom = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <MuiButton
      variant="contained"
      onClick={onClick}
      type={type}
      disabled={disabled}
      fullWidth
    >
      {children}
    </MuiButton>
  );
};

export default ButtonAtom;
