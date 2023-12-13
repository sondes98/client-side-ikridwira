import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/HomeComponent";
import Announce from "./pages/announce/Announce";
import HousePage from "./pages/house/HousePage";
import HouseMap from "./components/map/houseMap";
import fakeData from "./fakeData";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announceS" element={<Announce />} />
        <Route path="/housePage/:id" element={<HousePage />} />
        <Route path="/map" element={<HouseMap houses={fakeData} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
