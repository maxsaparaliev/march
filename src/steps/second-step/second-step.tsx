import React, { useState } from "react";
import "./second-step.css";
import { ImageHolder } from "../../components/image-holder/image-holder";
import secondImage from "../../static/second.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";

interface ISecondStep {
  onEnd: () => void;
}
export const SecondStep: React.FC<ISecondStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message:
      "Meow meow meow. Meow meow meow? meow meow 😭 meow mya mya meoooow myaow myaow miaow 2meow?",
    translation:
      "Что это вообще такое? Ну и координаты... Дорога будет не из простых 😭 нельзя было скинуть по 2гис??? Но что поделать... 5 рыбов это не мало, хватит на неделю. Это кальмар ? 🤔 ",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={secondImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && (
        <Button onClick={onEnd} text={"Я знаю дорогу! Я тебе помогу, пошли"} />
      )}
    </div>
  );
};
