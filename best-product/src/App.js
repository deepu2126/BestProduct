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
          empowers you to navigate through the product landscape with clarity,
          <br />
          ensuring confident decisions and minimal confusion.
        </p>
      </div>
    </div>
  );
}

export default App;
