import React, { memo } from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default memo(Button);
