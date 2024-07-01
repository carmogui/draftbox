import { Link } from "react-router-dom";
import "./app.css";
import { CommonScreen } from "./components";
import { Routes } from "./constants";

function App() {
  return (
    <CommonScreen>
      <h1 className="font-bold text-6xl font-mono tracking-widest">DRAFTBOX</h1>

      <Link
        className="w-full h-56 bg-slate-700 shadow-md rounded-lg"
        to={Routes.Currency}
      >
        {" "}
        currency
      </Link>
    </CommonScreen>
  );
}

export default App;
