import React, { useState } from "react";
import { ImageHolder } from "../../components/image-holder/image-holder";
import tenImage from "../../static/ten.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface TenStep {
  onEnd: () => void;
}

export const Ten: React.FC<TenStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message: "Meow... Meow meow Medon mevorleone meow 😭 meow",
    translation:
      "О боже... Неужели это сам Дон Ворлеоне, говорят ты не заметишь его кражи как минимум 3 дня, он слишком силен и опасен 😭 придется отдать ему сумку",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={tenImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && <Button onClick={onEnd} text={"ПОЗВАТЬ НА ПОМОЩЬ! БААРТ"} />}
    </div>
  );
};
