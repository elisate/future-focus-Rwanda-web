import { useState } from "react";
import "./styles/index.scss";
import PageSet from "./components/PageSet";
import Landing from "./components/Landing";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSet />}>
          <Route index element={<Landing />} />
          <Route element={<AboutUs/>} path="/about"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
