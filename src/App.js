import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
