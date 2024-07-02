import { Link } from "react-router-dom";
import "./app.css";
import { CommonScreen } from "./components";
import { Routes } from "./constants";
import { FinalCurrencyInput } from "./pages/currency/components";

function App() {
  return (
    <CommonScreen>
      <h1 className="font-bold text-6xl font-mono tracking-widest">DRAFTBOX</h1>

      <div className="flex flex-col items-center justify-between w-full h-56 bg-slate-700 shadow-md rounded-lg p-5">
        <span className="text-4xl font-bold">
          fixed decimals currency input
        </span>

        <FinalCurrencyInput />

        <Link
          className="py-3 px-5 bg-slate-900 shadow-md rounded-lg"
          to={Routes.Currency}
        >
          learn more
        </Link>
      </div>
    </CommonScreen>
  );
}

export default App;
