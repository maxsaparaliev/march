import React, { useState } from "react";
import { ImageHolder } from "../../components/image-holder/image-holder";
import nineImage from "../../static/nine.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface NineStep {
  onEnd: () => void;
}

export const Nine: React.FC<NineStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "Meow meow... Meow 😰 meow... meow meow meow",
    translation:
      "А чего тут делает машина в такое время... Она едет на нас 😰 надеюсь он просто проедет мимо. Если что хватай мою сумку и убегай... главное доставь все вовремя",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={nineImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && <Button onClick={onEnd} text={"Я тебя не брошу 😭"} />}
    </div>
  );
};
