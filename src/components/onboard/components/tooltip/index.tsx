import { TooltipRenderProps } from "react-joyride";
import { Button } from "../../../../components";

interface Props extends TooltipRenderProps {}

export const Tooltip = ({
  continuous,
  index,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
  isLastStep,
}: Props) => {
  return (
    <div
      className="flex flex-col w-80 h-60 bg-slate-700 rounded-lg p-3 pt-7 relative"
      {...tooltipProps}
    >
      <button
        {...closeProps}
        className="absolute top-0 right-0 hover:bg-slate-400 rounded-lg m-1 min-w-8 min-h-8"
      >
        <span id="close">x</span>
      </button>

      {step.title && <span className="text-neutral-500">{step.title}</span>}

      <div className="flex flex-1 flex-col justify-between">
        <div>{step.content}</div>

        <div className="flex justify-end gap-4">
          {index > 0 && (
            <Button {...backProps} variant="transparent">
              <span id="back">back</span>
            </Button>
          )}

          {continuous && isLastStep ? (
            <Button {...closeProps}>
              <span id="close">finish</span>
            </Button>
          ) : (
            <Button {...primaryProps}>
              <span id="next">next</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
