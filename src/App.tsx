import { Link, useNavigate } from "react-router-dom";
import "./app.css";
import { Button, CommonScreen, SidebarMenu } from "./components";
import { Routes } from "./constants";
import { FinalCurrencyInput } from "./pages/currency/components";
import { ReactNode } from "react";

function Card({
  children,
  title,
  route,
}: {
  children: ReactNode;
  title: string;
  route: Routes;
}) {
  return (
    <div className="flex flex-col flex-1 items-center justify-between min-w-72 min-h-56 rounded-lg p-5 gap-4">
      <h2 className="w-full text-4xl font-bold h-[86px] overflow-hidden overflow-ellipsis line-clamp-2">
        {title}
      </h2>

      <div className="flex flex-col gap-4 p-3 rounded-md w-full h-72">
        {children}
      </div>

      <div className="flex self-end">
        <Link
          className="py-3 px-5 bg-slate-900 hover:bg-slate-800 rounded-lg shadow-md hover:outline hover:outline-1 hover:outline-purple-600"
          to={route}
        >
          learn more
        </Link>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  return (
    <CommonScreen>
      <h1 className="font-bold text-6xl font-mono tracking-widest">DRAFTBOX</h1>

      <div className="flex flex-col gap-4 flex-wrap">
        <Card title={"fixed decimals currency input"} route={Routes.Currency}>
          <div className="flex flex-col gap-7">
            <span>
              useful when you need some value from the user, but the decimals
              doesn't matter
            </span>

            <label className="flex flex-col items-start gap-1">
              <span>example: </span>
              <FinalCurrencyInput />
            </label>
          </div>
        </Card>

        <hr className="h-px bg-white w-full" />

        <Card title={"onboarding for page tutorials"} route={Routes.Onboarding}>
          <div className="flex flex-col gap-7">
            <span>
              a sequence of modals that point to a specific location in the
              screen that can be used to teach the user how the system works
            </span>

            <div className="flex items-center gap-1">
              <Button
                onClick={() => {
                  navigate(`${Routes.OnboardingSubpage}?onboarding=true`);
                }}
              >
                click here
              </Button>

              <span>to see an example</span>
            </div>
          </div>
        </Card>

        <hr className="h-px bg-white w-full" />

        <Card title={"scroll into view"} route={Routes.ViewScroll}>
          <>
            <span>
              some tests using react utils to scroll to bottom, to top, or to
              the end of a text that has appear
            </span>
          </>
        </Card>

        <hr className="h-px bg-white w-full" />

        <Card title={"sidebar menu"} route={Routes.SidebarMenu}>
          <>
            <span>
              sidebar menu are very useful in some management applications, you
              can hover this example to see how it works
            </span>
            <SidebarMenu />
          </>
        </Card>
      </div>
    </CommonScreen>
  );
}

export default App;
