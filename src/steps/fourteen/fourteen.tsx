import React, { useState } from "react";
import { ImageHolder } from "../../components/image-holder/image-holder";
import TwelveImage from "../../static/fourteen.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface ElevenStep {
  onEnd: () => void;
}

export const Fourteen: React.FC<ElevenStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "Meow... Meow, meow meow meow ? meow meow.",
    translation:
      "Так... Осталось постучать и отдать заказ, я уже чувствую вкус рыбов во рту, быстрее бы. А как я стучусь? ведь у меня лапки, ну да ладно",
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
      {visible && <Button onClick={onEnd} text={"Открыть дверь, кто это???"} />}
    </div>
  );
};
