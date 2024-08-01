import { useState } from "react";
import { Step } from "react-joyride";
import { Button } from "../../../../components";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../../constants";
import { Onboard } from "../../../../components/onboard";
import { MdDone, MdOutlineRefresh } from "react-icons/md";

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
  const navigate = useNavigate();

  const onboardingDone = localStorage.getItem("onboarding-done");
  const onboarding = onboardingDone ? JSON.parse(onboardingDone) : null;
  const onboardingTest = onboarding?.["test"] ?? true;

  const [runTour, setRunTour] = useState(onboardingTest);
  const [isReseted, setIsReseted] = useState(onboardingTest);

  function handleClose() {
    setRunTour(false);
    setIsReseted(false);
  }

  return (
    <div className="flex flex-col">
      <Onboard runTour={runTour} steps={steps} handleClose={handleClose} />

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

      <div className="flex flex-col gap-10">
        <Button onClick={() => setRunTour(true)}>start manually</Button>

        <div className="flex flex-col gap-2">
          <span>
            click here to be redirected to other page and also start the
            onboarding
          </span>

          <div className="flex gap-5">
            <Button
              onClick={() => {
                navigate(`${Routes.OnboardingSubpage}?onboarding=true`);
              }}
            >
              with onboarding
            </Button>

            <Button
              onClick={() => {
                navigate(Routes.OnboardingSubpage);
              }}
            >
              redirect only
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span>
            reset first time tutorial, so when you open the page for the first
            time the onboarding will start automatically
          </span>

          <div className="flex gap-5 items-center">
            <Button
              onClick={() => {
                setIsReseted(true);
                localStorage.removeItem("onboarding-done");
              }}
            >
              reset
            </Button>

            {isReseted ? (
              <div className="flex gap-2 items-center">
                <MdOutlineRefresh />

                <span>will start automatically when you refresh the page</span>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <MdDone />

                <span>already run the first time</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
