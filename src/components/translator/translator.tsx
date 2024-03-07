import { useState } from "react";
import "./translator.css";
import { TypeAnimation } from "react-type-animation";

interface ITranslator {
  message: string;
  translation: string;
  onFinish: () => void;
}
export const Translator: React.FC<ITranslator> = ({
  message,
  translation,
  onFinish,
}) => {
  return (
    <div className={"translator"}>
      <TypeAnimation
        sequence={[message, translation, onFinish]}
        cursor={false}
        wrapper={"p"}
        speed={70}
        deletionSpeed={60}
      />
    </div>
  );
};
