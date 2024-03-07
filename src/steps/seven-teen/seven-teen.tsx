import React from "react";
import { Button } from "../../components/button/button";
import "./seven-teen.css";

type TSevenTeen = {
  onEnd: () => void;
};
export const SevenTeen: React.FC<TSevenTeen> = ({ onEnd }) => {
  return (
    <div className={"seventeen"}>
      <p className={"main"}>Алина, с 8 марта 😁🌸🌹🌹🌹🌹🌹! </p>
      <br />
      <p className={"used"}>ИСПОЛЬЗОВАНО: Pinterest и воображение</p>
      <Button onClick={onEnd} text={"Начать с начала"} />
    </div>
  );
};
