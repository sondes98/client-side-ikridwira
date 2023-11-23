import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/HomeComponent";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
