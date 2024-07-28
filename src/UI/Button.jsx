// Button.jsx
import React from "react";

export default function Button({ children, textOnly, className = '', ...props }) {
  let cssStyles = textOnly ? "text-button" : "button";
  cssStyles += ' ' + className;
  return <button className={cssStyles} {...props}>{children}</button>;
}
