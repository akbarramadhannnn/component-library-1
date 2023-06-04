import React, { memo } from "react";
import "./Paragraph.css";

interface ParagraphProps {
  children: any;
}

const Paragraph = (props: ParagraphProps) => {
  return <p className="paragraph">{props.children}</p>;
};

export default memo(Paragraph);
