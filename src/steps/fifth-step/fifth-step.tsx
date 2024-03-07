import React, { useState } from "react";
import "./fifth-step.css";
import { ImageHolder } from "../../components/image-holder/image-holder";
import fifthImage from "../../static/fifth.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface IFifthStep {
  onEnd: () => void;
}

export const FifthStep: React.FC<IFifthStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message:
      "MEOW MEOW MEOW 😭 Meow meow meow meow... meeow meeeyaaa meyaaa 🙏",
    translation:
      "О БОЖЭЕ, ТАМ КТО-ТО СТОИТ И СМОТРИТ, ОНА ПРИБЛИЖАЕТСЯ, ГОСПОДИ МНЕ КОНЕЦ 😭 моя любимая жена... я тебя не забуду, прости что не делился с тобой рыбов, царапал и кричал на тебя 🙏",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={fifthImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && (
        <Button
          onClick={onEnd}
          text={"ИСПОЛЬЗОВАТЬ ИЗГОНЯЮЩУЮ МОЛИТВУ! ОСТОРОЖНО НЕ ПОПАДИ В КОТЕКУ"}
        />
      )}
    </div>
  );
};
