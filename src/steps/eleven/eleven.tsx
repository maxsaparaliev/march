import React, { useState } from "react";
import "./eleven.css";
import { ImageHolder } from "../../components/image-holder/image-holder";
import elevenImage from "../../static/eleven.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface ElevenStep {
  onEnd: () => void;
}

export const Eleven: React.FC<ElevenStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "MEOW 😱 meow meow meow, meow meow meow 😭 meow...",
    translation:
      "КТО ЭТО 😱? Он быстр как молния, грация кошки и ловкость картошки, НО КУДА ОН ДЕЛСЯ? неужели скрылся 😭 я даже не успел поблагодарить...",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={elevenImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && (
        <Button onClick={onEnd} text={"Не беспокойся, я передам за тебя "} />
      )}
    </div>
  );
};
