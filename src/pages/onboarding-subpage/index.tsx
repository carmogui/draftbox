import { useEffect, useState } from "react";
import { Step } from "react-joyride";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Onboard } from "../../components/onboard";
import { CommonScreen, Loader } from "../../components";

const steps: Step[] = [
  {
    target: `[data-tour="subpage-title"]`,
    content: "you started the subpage onboarding manually",
    disableBeacon: true,
  },
  {
    target: `[data-tour="subpage-text"]`,
    content: "this makes it possible to centralize tutorials on another page",
    disableBeacon: true,
  },
];

export function OnboardingSubpage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [runTour, setRunTour] = useState(false);
  const [loading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  useEffect(() => {
    if (!loading) {
      const hasOnboarding = Boolean(searchParams.get("onboarding"));

      if (hasOnboarding) {
        setRunTour(hasOnboarding);
        searchParams.delete("onboarding");
        setSearchParams(searchParams, { replace: true });
      }
    }
  }, [loading]);

  function handleClose() {
    setRunTour(false);
  }

  return (
    <CommonScreen
      title="Onboarding Subpage"
      goBack={() => {
        navigate(-1);
      }}
    >
      <Onboard runTour={runTour} steps={steps} handleClose={handleClose} />

      {loading ? (
        <div className="flex flex-col gap-6 items-center">
          <Loader />

          <span>simulating a page load</span>
        </div>
      ) : (
        <div className="flex flex-col">
          <h1
            className="text-purple-400 text-2xl font-bold"
            data-tour="subpage-title"
          >
            im the subpage
          </h1>

          <div className="min-h-screen flex items-center justify-center">
            <span data-tour="subpage-text">
              using search params you can start a onboarding tutorial
              redirecting to other pages
            </span>
          </div>
        </div>
      )}
    </CommonScreen>
  );
}
