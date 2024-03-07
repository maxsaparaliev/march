import React, { useState } from "react";
import { ImageHolder } from "../../components/image-holder/image-holder";
import TwelveImage from "../../static/sixteen.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface ElevenStep {
  onEnd: () => void;
}

export const Sixteen: React.FC<ElevenStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "Meow meow meow. Meow meow meow me meeow meeeyaaa meyaaa 😚",
    translation:
      "К сожалению, мы не раскрываем имена заказчиков, простите. Но хочу сказать что мне хорошо заплатят за ваш заказ 😚 До свидания!",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={TwelveImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && <Button onClick={onEnd} text={"До свидания мистер курьер"} />}
    </div>
  );
};
