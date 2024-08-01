import { useEffect, useState } from "react";
import Joyride, { CallBackProps, Step } from "react-joyride";
import colors from "tailwindcss/colors";
import { Tooltip } from "./components";

interface Props {
  runTour: boolean;
  steps: Step[];
  handleClose: () => void;
}

export function Onboard({ runTour, steps, handleClose }: Props) {
  const [tourStep, setTourStep] = useState(0);

  useEffect(() => {
    if (runTour === false) {
      setTourStep(0);
    }
  }, [runTour]);

  function handleCallback(event: CallBackProps) {
    const { action, lifecycle } = event;
    const isComplete = lifecycle === "complete";

    switch (action) {
      case "close":
        handleClose();

        localStorage.setItem(
          "onboarding-done",
          JSON.stringify({
            test: false,
          })
        );
        break;

      case "next":
        if (isComplete) setTourStep((cur) => cur + 1);
        break;

      case "prev":
        if (lifecycle === "complete") setTourStep((cur) => cur - 1);
        break;

      default:
        break;
    }
  }

  return (
    <Joyride
      steps={steps}
      continuous={true}
      run={runTour}
      tooltipComponent={Tooltip}
      stepIndex={tourStep}
      scrollOffset={100}
      callback={handleCallback}
      styles={{
        options: {
          arrowColor: colors.slate[700],
        },
      }}
    />
  );
}
