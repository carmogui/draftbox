import { Button, CommonScreen } from "../../components";
import { useRef, useState } from "react";

export function ViewScroll() {
  const [showElement, setShowElement] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const changeSizeTopRef = useRef<HTMLDivElement | null>(null);

  function scrollToBottom() {
    const { current } = bottomRef;

    if (current) {
      current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }

  function scrollToTop() {
    const { current } = topRef;

    if (current) {
      current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function scrollToTopChangeSize() {
    const { current } = changeSizeTopRef;

    setShowElement((cur) => !cur);

    if (current) {
      const direction = showElement ? "start" : "end";

      setTimeout(() => {
        current.scrollIntoView({ behavior: "smooth", block: direction });
      });
    }
  }

  return (
    <CommonScreen title="view scroll">
      <div className="flex gap-10 py-8">
        <div className="flex flex-col gap-5 w-72">
          <h2 className="text-2xl font-semibold">scroll to bottom</h2>

          <div>
            <Button onClick={scrollToBottom}>click to scroll</Button>
          </div>

          <div ref={bottomRef} className="flex flex-col gap-2 scroll-m-6">
            {new Array(10).fill(null).map(() => {
              return (
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Praesentium perspiciatis nesciunt omnis eos ipsam numquam cum
                  corrupti, ipsa consequatur nam vitae qui neque expedita
                  excepturi possimus harum eaque enim officiis!
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5 w-72">
          <h2 className="text-2xl font-semibold">scroll to top</h2>

          <div ref={topRef} className="flex flex-col gap-2 scroll-m-6">
            {new Array(10).fill(null).map(() => {
              return (
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Praesentium perspiciatis nesciunt omnis eos ipsam numquam cum
                  corrupti, ipsa consequatur nam vitae qui neque expedita
                  excepturi possimus harum eaque enim officiis!
                </span>
              );
            })}
          </div>

          <div>
            <Button onClick={scrollToTop}>click to scroll</Button>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-72">
          <h2 className="text-2xl font-semibold">
            scroll to top and bottom when the section change size
          </h2>

          <div
            ref={changeSizeTopRef}
            className="flex flex-col gap-2 scroll-m-6"
          >
            {new Array(showElement ? 10 : 1).fill(null).map(() => {
              return (
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Praesentium perspiciatis nesciunt omnis eos ipsam numquam cum
                  corrupti, ipsa consequatur nam vitae qui neque expedita
                  excepturi possimus harum eaque enim officiis!
                </span>
              );
            })}

            {!showElement && "..."}
          </div>

          <Button onClick={scrollToTopChangeSize}>
            {showElement ? "show less" : "show more"}
          </Button>
        </div>
      </div>
    </CommonScreen>
  );
}
