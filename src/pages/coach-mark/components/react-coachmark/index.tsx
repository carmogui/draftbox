import { useState } from "react";
import Joyride, { Step } from "react-joyride";
import { Tooltip } from "../tooltip";
import { Button } from "../../../../components";

import colors from "tailwindcss/colors";

const steps: Step[] = [
  {
    target: `[data-tour="test"]`,
    content:
      "this box open and some area is spotlighted to show the user what he can do",
    disableBeacon: true,
  },
  {
    target: `[data-tour="test2"]`,
    content:
      "also, if the element is out of view, the page will scroll to the element",
    disableBeacon: true,
    placement: "right",
  },
  {
    target: `[data-tour="test3"]`,
    content:
      "you can click on the close icon or outside to finish the tutorial",
    disableBeacon: true,
  },
];

export function ReactCoachMark() {
  const onboardingDone = localStorage.getItem("onboarding-done");
  const onboarding = onboardingDone ? JSON.parse(onboardingDone) : null;
  const onboardingTest = onboarding?.["test"] ?? true;

  const [tourStep, setTourStep] = useState(0);
  const [runTour, setRunTour] = useState(onboardingTest);

  return (
    <div className="flex flex-col">
      <Joyride
        steps={steps}
        continuous={true}
        run={runTour}
        tooltipComponent={(e) => Tooltip({ ...e, setTourStep: setTourStep })}
        stepIndex={tourStep}
        scrollOffset={100}
        styles={{
          options: {
            arrowColor: colors.slate[700],
          },
        }}
        callback={(e) => {
          if (e.action === "close") {
            setRunTour(false);
            localStorage.setItem(
              "onboarding-done",
              JSON.stringify({
                test: false,
              })
            );
          }
        }}
      />

      <span data-tour="test">
        to create this page tutorial I'm using the library
      </span>

      <code
        className="px-1 bg-slate-700 bg-opacity-40 rounded-md w-fit"
        data-tour="test2"
      >
        react-joyride
      </code>

      <div className="min-h-screen flex items-center justify-center">
        <span data-tour="test3">
          scroll down and click start to see an example
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <Button
          onClick={() => {
            setRunTour(true);
            setTourStep(0);
          }}
        >
          start manually
        </Button>

        <div className="flex flex-col gap-2">
          <span>
            reset first time tutorial, so when you open the page for the first
            time the onboarding will start automatically
          </span>

          <Button
            onClick={() => {
              localStorage.removeItem("onboarding-done");
            }}
          >
            reset
          </Button>
        </div>
      </div>
    </div>
  );
}
