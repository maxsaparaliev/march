import React, { useState } from "react";
import "./fourth-step.css";
import { ImageHolder } from "../../components/image-holder/image-holder";
import fourthImage from "../../static/fourth.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface IFourthStep {
  onEnd: () => void;
}

export const FourthStep: React.FC<IFourthStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "Meow meow meow.😰 Meow meow meow meow meow... meeow meyaaa 😭",
    translation:
      "Это что еще за место 😰 на карте такого не было, в этом месте явно есть призраки... боже плакали мои рыбов. Это моя последняя жизнь Я УМРУ ЗДЕСЬ 😭",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={fourthImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && (
        <Button
          onClick={onEnd}
          text={
            "Не бойся котека, я потомственный экстрасенс, призраки нам не по чем"
          }
        />
      )}
    </div>
  );
};
