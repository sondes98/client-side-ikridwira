import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HouseMap from "./components/map/HouseMap";
import fakeData from "./fakeData";
import Announce from "./pages/announce/Announce";
import HousePage from "./pages/house/HousePage";
import Home from "./pages/home/home";
import OpenHouse from "./pages/OpenHouse";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announceS" element={<Announce />} />
        <Route path="/housePage/:id" element={<HousePage />} />
        <Route path="/map" element={<HouseMap houses={fakeData} />} />
        <Route path="/openhouse" element={<OpenHouse />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
