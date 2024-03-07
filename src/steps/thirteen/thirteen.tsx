import React, { useState } from "react";
import "./thirteen.css";
import { ImageHolder } from "../../components/image-holder/image-holder";
import TwelveImage from "../../static/thirteen.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface ElevenStep {
  onEnd: () => void;
}

export const Thirteen: React.FC<ElevenStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message:
      "Meow... meow 😭 meow meow meow, meow meow meow mya mya mya meow. Meow 👋",
    translation:
      "Мы почти на месте, наконец-то... скоро я получу рыбов 😭 путь был не простой, я буду помнить тебя всю жизнь (последнюю) за твою помощь, я передам тебе одну рыбов для моего спасителя. Видимо доставка той девушке в окне, надеюсь ей понравится. Ну чтож, я пошел... Спасибо тебе и прощай 👋",
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
      {visible && (
        <Button
          onClick={onEnd}
          text={
            "Прощай мистер курьер... Будь аккуратнее и по меньше ходи по лесам ночью"
          }
        />
      )}
    </div>
  );
};
