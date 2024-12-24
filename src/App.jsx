import { createRoot } from "react-dom/client";
import Order from "./Order";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Pizza Buawna order now</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
