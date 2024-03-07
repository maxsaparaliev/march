import firstImage from "../../static/first.jpg";
import React, { useState } from "react";
import "./first-step.css";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
import { ImageHolder } from "../../components/image-holder/image-holder";

interface IFirstStep {
  onEnd: () => void;
}
export const FirstStep: React.FC<IFirstStep> = ({ onEnd }) => {
  const [isVisible, setIsVisible] = useState(false);
  const messages = {
    message:
      "Meow meow meow! Meo meow Meow meow myaow myaow maow.... mya mya meow meow 🐟🐟🐟🐟🐟",
    translation:
      "Привет, я кот-курьер, мне сказали что скоро 8 марта и мне нужно доставить тебе заказ, но у меня лапки... Я прошу тебя помочь мне в этом не легком деле. Если все получится я получу 5 рыбов 🐟🐟🐟🐟🐟",
  };

  const onFinish = () => {
    setIsVisible(true);
  };
  return (
    <div className={"first-step"}>
      <ImageHolder image={firstImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {isVisible && <Button onClick={onEnd} text={"ПОМОЧЬ !"} />}
    </div>
  );
};
