import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import fakeData from "./fakeData";
import Announce from "./pages/announce/announce";
import HousePage from "./pages/house/HousePage";
import Home from "./pages/home/home";
import OpenHouse from "./pages/OpenHouse";
import AnnouncementPage from "./pages/announce/AnnouncementPage";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announceS" element={<Announce />} />
        <Route path="/housePage/:id" element={<HousePage />} />
        <Route path="/openhouse" element={<OpenHouse />} />
        <Route path="/Announcepost" element={<AnnouncementPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
