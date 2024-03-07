import React, { useState } from "react";
import { ImageHolder } from "../../components/image-holder/image-holder";
import TwelveImage from "../../static/twelve.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface ElevenStep {
  onEnd: () => void;
}

export const Twelve: React.FC<ElevenStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "MEOW! Meow meow 😭 meow meow meow, meow, meow...",
    translation:
      "СПАСИБО ТВОЕМУ ДРУГУ! Но откуда у тебя такие друзья 😭 Без тебя я бы не справился, мы уже почти у цели, осталось совсем ничего, побежали",
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
        <Button onClick={onEnd} text={"Пошли 😇 я обязательно передам"} />
      )}
    </div>
  );
};
