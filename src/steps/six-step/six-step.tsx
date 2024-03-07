import React, { useState } from "react";
import "./six-step.css";
import { ImageHolder } from "../../components/image-holder/image-holder";
import sixImage from "../../static/six-step.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface Type {
  onEnd: () => void;
}

export const SixStep: React.FC<Type> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "Meow meow meow, meow meow meow meow meow MEOW 🐟",
    translation:
      "ВЫ ЧИТАЕТЕ МОЛИТВУ (УРЫ ВУРЫ ВО ИМЯ БОГА НАШЕГО ВАШАЛА, ИЗЫДИ ДЕМОН, НЕ ТРОНЬ КОТЕКУ). Да да, продолжай, сучара ты нас не тронешь, меня еще жена ждет и 5 рыбов 🐟",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={sixImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && <Button onClick={onEnd} text={"Закончить молитву 🙏"} />}
    </div>
  );
};
