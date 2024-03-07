import React, { useEffect, useState } from "react";
import "./main.css";
import { FirstStep } from "./steps/first-step/first-step";
import { SecondStep } from "./steps/second-step/second-step";
import { ThirdStep } from "./steps/third-step/third-step";
import { FourthStep } from "./steps/fourth-step/fourth-step";
import { FifthStep } from "./steps/fifth-step/fifth-step";
import { SixStep } from "./steps/six-step/six-step";
import { Seven } from "./steps/seven/seven";
import { Eight } from "./steps/eight/eight";
import { Nine } from "./steps/nine/nine";
import { Ten } from "./steps/ten/ten";
import { Eleven } from "./steps/eleven/eleven";
import { Twelve } from "./steps/twelve/twelve";
import { Thirteen } from "./steps/thirteen/thirteen";
import { Fourteen } from "./steps/fourteen/fourteen";
import { Fifteen } from "./steps/fifteen/fifteen";
import { Sixteen } from "./steps/sixteen/sixteen";
import { useLocation, useNavigate } from "react-router-dom";
import { SevenTeen } from "./steps/seven-teen/seven-teen";

function App() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const updateQueryParams = (newParams: any) => {
    const currentParams = new URLSearchParams(location.search);
    for (const [key, value] of Object.entries(newParams)) {
      if (value === null || value === undefined) {
        currentParams.delete(key);
      } else {
        currentParams.set(key, value.toString());
      }
    }
    navigate(`?${currentParams.toString()}`, { replace: true });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryStep = queryParams.get("step");
    if (queryStep) {
      setStep(parseInt(queryStep));
    }
  }, [step]);

  const onFirstEnd = () => {
    setStep(2);
    updateQueryParams({ step: "2" });
  };

  const onSecondEnd = () => {
    setStep(3);
    updateQueryParams({ step: "3" });
  };

  const onThirdEnd = () => {
    setStep(4);
    updateQueryParams({ step: "4" });
  };

  const onFourthEnd = () => {
    setStep(5);
    updateQueryParams({ step: "5" });
  };
  const onFifthEnd = () => {
    setStep(6);
    updateQueryParams({ step: "6" });
  };

  const onSixEnd = () => {
    setStep(7);
    updateQueryParams({ step: "7" });
  };

  const onSevenEnd = () => {
    setStep(8);
    updateQueryParams({ step: "8" });
  };

  const onEightEnd = () => {
    setStep(9);
    updateQueryParams({ step: "9" });
  };
  const onNineEnd = () => {
    setStep(10);
    updateQueryParams({ step: "10" });
  };

  const onTenEnd = () => {
    setStep(11);
    updateQueryParams({ step: "11" });
  };
  const onElevenEnd = () => {
    setStep(12);
    updateQueryParams({ step: "12" });
  };

  const onTwelveEnd = () => {
    setStep(13);
    updateQueryParams({ step: "13" });
  };
  const ThirteenEnd = () => {
    setStep(14);
    updateQueryParams({ step: "14" });
  };
  const FourteenEnd = () => {
    setStep(15);
    updateQueryParams({ step: "15" });
  };

  const onFifteenEnd = () => {
    setStep(16);
    updateQueryParams({ step: "16" });
  };

  const SixTeenEnd = () => {
    setStep(17);
    updateQueryParams({ step: "17" });
  };

  const onSevenTeenEnd = () => {
    setStep(1);
    updateQueryParams({ step: 1 });
  };
  const STEPS = {
    1: <FirstStep onEnd={onFirstEnd} />,
    2: <SecondStep onEnd={onSecondEnd} />,
    3: <ThirdStep onEnd={onThirdEnd} />,
    4: <FourthStep onEnd={onFourthEnd} />,
    5: <FifthStep onEnd={onFifthEnd} />,
    6: <SixStep onEnd={onSixEnd} />,
    7: <Seven onEnd={onSevenEnd} />,
    8: <Eight onEnd={onEightEnd} />,
    9: <Nine onEnd={onNineEnd} />,
    10: <Ten onEnd={onTenEnd} />,
    11: <Eleven onEnd={onElevenEnd} />,
    12: <Twelve onEnd={onTwelveEnd} />,
    13: <Thirteen onEnd={ThirteenEnd} />,
    14: <Fourteen onEnd={FourteenEnd} />,
    15: <Fifteen onEnd={onFifteenEnd} />,
    16: <Sixteen onEnd={SixTeenEnd} />,
    17: <SevenTeen onEnd={onSevenTeenEnd} />,
  };
  // @ts-ignore
  return <div className="container">{STEPS[step]}</div>;
}

export default App;
