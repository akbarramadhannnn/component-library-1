import React, { memo } from "react";

interface DropdownTypes {
  value: string;
}

const Dropdown = (props: DropdownTypes) => {
  return (
    <select value={props.value}>
      <option value="">Silahkan Pilih</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  );
};

export default memo(Dropdown);
