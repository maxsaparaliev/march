import React, { useState } from "react";
import { ImageHolder } from "../../components/image-holder/image-holder";
import TwelveImage from "../../static/fifteen.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface ElevenStep {
  onEnd: () => void;
}

export const Fifteen: React.FC<ElevenStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "Meow meow meow.😚 Meow meow meow 8 MEOW! 😘",
    translation: "Здрасьте 😚 Вам доставка! С 8 МАРТА 😘",
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
        <Button onClick={onEnd} text={"Серьезно 😅? А от кого ВАУ"} />
      )}
    </div>
  );
};
