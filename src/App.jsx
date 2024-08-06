import { useState } from "react";
import "./styles/index.scss";
import PageSet from "./components/PageSet";
import Landing from "./components/Landing";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import { Appcontext } from "./fetch/ContextProvider";
import Programcourse from "./components/Programcourse";

function App() {
  return (
    <Appcontext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageSet />}>
            <Route index element={<Landing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/sprogram/:Pid" element={<Programcourse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Appcontext>
  );
}

export default App;
