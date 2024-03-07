import React, { useState } from "react";
import { ImageHolder } from "../../components/image-holder/image-holder";
import sevenImage from "../../static/seven.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface SevenStep {
  onEnd: () => void;
}

export const Seven: React.FC<SevenStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "Meowhehe 😏 Meow meow meow meow",
    translation:
      "Хехехе 😏 не зря я согласился идти с тобой. Ты спасла мне жизнь... Я этого никогда не забуду. Скорее пошли от сюда пока не случилось еще чего",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={sevenImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && <Button onClick={onEnd} text={"А ты думал! Пошли быстрее"} />}
    </div>
  );
};
