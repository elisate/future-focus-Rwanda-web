import { useState } from "react";
import "./styles/index.scss";
import PageSet from "./components/PageSet";
import Landing from "./components/Landing";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import { Appcontext } from "./fetch/ContextProvider";
import Programcourse from "./components/Programcourse";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import StudentRegistration from "./components/StudentRegistration";
import UserDashboard from "./components/userDashboard";
import ViewCourse from "./components/ViewCourse";


function App() {
  return (
    <Appcontext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageSet />}>
            <Route index element={<Landing />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/sprogram/:Pid" element={<Programcourse />} />
            <Route
              path="/studentregistration/:Pid"
              element={<StudentRegistration />}
            />
            <Route path="/studentCourse" element={<UserDashboard />} />
            <Route path="/viewCourse/:courseId" element={<ViewCourse />} />
            
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Appcontext>
  );
}

export default App;
