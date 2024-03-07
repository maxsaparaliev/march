import React, { useState } from "react";
import { ImageHolder } from "../../components/image-holder/image-holder";
import sixImage from "../../static/eight.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface Type {
  onEnd: () => void;
}

export const Eight: React.FC<Type> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "Meow meow meow, meow meow meow mayo maow maoew...",
    translation:
      "Похоже на выход из леса, давай быстрее а то еще набегут шайтанчики какие и так жизнь последняя, зря я за машинами бегал...",
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
      {visible && (
        <Button onClick={onEnd} text={"Да ладно тебе, последняя зато какая"} />
      )}
    </div>
  );
};
