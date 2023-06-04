import React, { Fragment, memo } from "react";

interface InputProps {
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <Fragment>
      <label>{props.label}</label>
      <input />
    </Fragment>
  );
};

export default memo(Input);
