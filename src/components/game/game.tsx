import React, { useState } from "react";
import { ImageHolder } from "../image-holder/image-holder";
import { Translator } from "../translator/translator";
import { Button } from "../button/button";
import "./game.css";

type TMessages = {
  message: string;
  translation: string;
};
type TGame = {
  onEnd: () => void;
  image: string;
  messages: TMessages;
  buttonText: string;
};
export const StepGenerator: React.FC<TGame> = ({
  onEnd,
  messages,
  image,
  buttonText,
}) => {
  const [visible, setVisible] = useState(false);
  const onFinish = () => {
    setVisible(true);
  };

  return (
    <div className={"game"}>
      <ImageHolder image={image} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && <Button onClick={onEnd} text={buttonText} />}
    </div>
  );
};
