import React from "react";
import "./button.css";
interface IButton {
  onClick: () => void;
  text: string;
}
export const Button: React.FC<IButton> = ({ onClick, text }) => {
  return (
    <button className={"button"} onClick={onClick}>
      {text}
    </button>
  );
};
