import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import InitalCard from "./components/commonComponents/IntialCard";
import CompareTool from "./components/commonComponents/CompareTool";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<InitalCard />} />
          <Route path="/tool" element={<CompareTool />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
