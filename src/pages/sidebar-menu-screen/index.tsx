import { useNavigate } from "react-router-dom";
import { CommonScreen } from "../../components";
import {
  SidebarMenuClick,
  SidebarMenuHover,
  SidebarMenuHoverExpandable,
  SidebarMenuHoverWithLib,
} from "./components";
import { HTMLAttributes } from "react";

function HighlightText({ children }: HTMLAttributes<HTMLElement>) {
  return <b className="px-1.5 bg-slate-200/50 rounded">{children}</b>;
}

export function SidebarMenuScreen() {
  const navigate = useNavigate();

  return (
    <CommonScreen
      title="Sidebar Menu"
      goBack={() => {
        navigate(-1);
      }}
    >
      <h2 className="font-bold text-2xl">Open submenu through click</h2>

      <span>
        the <HighlightText>x</HighlightText> button in this menu opens and close
        through click in the button, and have its logic to do that using the
        useState react hook.
        <br />
        this is bad in certain ways because increase the processing that the
        page will use, and if I want a behavior to close when hit "esc" or click
        outside I have to write more javascript
      </span>

      <span>
        the <HighlightText>y</HighlightText> button also open and closes through
        click, but it is using only html and css, with the new property{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using"
          className="text-blue-300 hover:text-blue-200"
        >
          popover
        </a>
        <br />
        this is better for performance, for not using javascript, and also comes
        with the functionality to close when you hit "esc" or click outside
        <br />
        but the problem is that this is a recent feature added to html, and may
        not be{" "}
        <a
          href="https://caniuse.com/?search=popover"
          className="text-blue-300 hover:text-blue-200"
        >
          supported
        </a>{" "}
        for all the browsers
      </span>

      <SidebarMenuClick />

      <h2 className="font-bold text-2xl">Open submenu through hover</h2>

      <span>
        now, in some cases, open the submenus of the sidebar may be faster for
        users who need tu use it frequently, through hover action, it means that
        the submenu will show only by placing your mouse over the button
      </span>

      <span>
        in the button <HighlightText>x</HighlightText> we can see how it can be
        a little tricky, when you hover the button, the submenu opens, but when
        you try to reach some option it will close, because the mouse hover is
        not over the button anymore
        <br />
        to avoid that problem, the button and the submenu must be in the same
        container, but even in that way, if there is a space between them, the
        submenu will close too
      </span>

      <span>
        in the button <HighlightText>y</HighlightText> we have a better example,
        where the submenu keeps open when you move the mouse over the button or
        the submenu, because they respect the hover of the same parent
        <br />I made this using a secondary element, that you can use as a safe
        zone to hover your mouse, so in that way, if the style of the menu
        require you to move the submenu more to the side, it will still going to
        work
      </span>

      <span>
        in the bottom, the button <HighlightText>z</HighlightText> have the same
        design and technology of the y version, but as you can see, if you
        hover, you notice that if the submenu overflow the screen size, you
        cannot access it anymore
        <br />
        And after a lot of research, I did not found any possible way of doing
        it with only HTML and CSS, to avoid that problem it is required to use
        javascript
      </span>

      <SidebarMenuHover />

      <h2 className="font-bold text-2xl">Open through hover with some help</h2>

      <span>
        here Im using the library{" "}
        <a
          className="text-blue-300 hover:text-blue-200"
          href="https://popper.js.org/react-popper/"
        >
          react popper
        </a>{" "}
        because it already deals with the logic to keep the floating submenu
        inside the screen, and not overflow
      </span>

      <span>
        <HighlightText>x</HighlightText> and <HighlightText>y</HighlightText>{" "}
        are common submenu, that open with hover
      </span>

      <span>
        <HighlightText>z</HighlightText> shows a adaptability when the submenu
        has a height bigger than the screen, it shows a scrollbar
      </span>

      <span>
        <HighlightText>w</HighlightText> show how it adapt itself to not
        overflow the screen when is to close of the border
      </span>

      <SidebarMenuHoverWithLib />

      <h2 className="font-bold text-2xl">Expanding and contracting</h2>

      <span>
        a sidebar menu with hover submenu that you also can expand to have a
        broader experience
      </span>

      <SidebarMenuHoverExpandable />
    </CommonScreen>
  );
}
