import React, { useState } from "react";
import "./third-step.css";
import { ImageHolder } from "../../components/image-holder/image-holder";
import thirdImage from "../../static/third.jpg";
import { Translator } from "../../components/translator/translator";
import { Button } from "../../components/button/button";
interface IThirdStep {
  onEnd: () => void;
}

export const ThirdStep: React.FC<IThirdStep> = ({ onEnd }) => {
  const [visible, setVisible] = useState(false);
  const messages = {
    message:
      "Meow meow meow. Meow meow... meow meow myao myaoew meow meow meow meow meeow meeeyaaa meyaaa 😰",
    translation:
      "Видимо дорога лежит через этот лес, ну чтож.... пошли. Благо еще светит солнце и не так страшно, говорят в лесах ночью происходят странные и страшные вещи, побежали быстрее пока не стемнело 😰",
  };

  const onFinish = () => {
    setVisible(true);
  };
  return (
    <div className={"second-step"}>
      <ImageHolder image={thirdImage} />
      <Translator
        message={messages.message}
        translation={messages.translation}
        onFinish={onFinish}
      />
      {visible && (
        <Button
          onClick={onEnd}
          text={
            "Подбодрить и сказать что все это сказки, дорога будет спокойной"
          }
        />
      )}
    </div>
  );
};
