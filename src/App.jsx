import { createRoot } from "react-dom";
import Pizza from "./pizza";

const App = () => {
  return (
    <div>
      <h1>Pizza Buawna order now</h1>
      <Pizza
        image={"/public/pizzas/Pepperoni.webp"}
        title="Pizza"
        description="A delicious pizza"
      />
      <Pizza
        image={"/public/pizzas/hawaiian.webp"}
        title="Hawaian"
        description="A delicious pizza"
      />
      <Pizza
        image={"/public/pizzas/big_meat.webp"}
        title="Pepperoni"
        description="A delicious pizza"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
