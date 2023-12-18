import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="m-5">
        <h1 className="text-3xl font-bold">
          A Clear Guide to Choosing the{" "}
          <span className="text-pink-600">Right One</span> <br /> Without the
          Confusion
        </h1>
        <p className="text-center px-48 text-sm mt-3 font-medum text-slate-700">
          Embark on a seamless journey to find your perfect match! Our guide{" "}
          <br />
          empowers you to navigate through the product landscape with clarity
          <br />
          ensuring confident decisions and minimal confusion.
        </p>
      </div>
      <div>
        How to implement it:
        <ul className="flex gap-5">
          <li className="w-[1/6] bg-gradient-to-r from-sky-400 to-blue-500 p-2">
            Define your needs and priorities: What are you looking for in a
            product? What features are essential, and what are nice-to-haves?
          </li>
          <li className="w-[1/6] bg-gradient-to-r from-sky-400 to-blue-500 p-2">
            Research and gather options: Look for products that fit your needs
            and budget.
          </li>
          <li className="w-[1/6] bg-gradient-to-r from-sky-400 to-blue-500 p-2">
            Group the options: Categorize them based on relevant criteria.
          </li>
          <li className="w-[1/6] bg-gradient-to-r from-sky-400 to-blue-500 p-2">
            Develop a ranking system: Determine your criteria for ranking within
            each group (e.g., price, features, brand reputation).
          </li>
          <li className="w-[1/6] bg-gradient-to-r from-sky-400 to-blue-500 p-2">
            Rank and compare: Compare the options within each group based on
            your ranking system.
          </li>
          <li className="w-[1/6] bg-gradient-to-r from-sky-400 to-blue-500 p-2">
            Choose the best fit: Select the product that best aligns with your
            priorities within your chosen group.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
