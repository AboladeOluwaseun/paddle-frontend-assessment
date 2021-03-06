import React from "react";
import { Route, Routes } from "react-router-dom";
import ComingSoon from "./Pages/ComingSoon";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Bubbles from "./Components/Bubbles";
function App() {
  return (
    <>
      <div className="text-white max-w-[100vw] bg-cover bg-[url('Path1.svg')]">
        <div className="max-w-[90%] mx-auto">
          <Routes>
            <Route path="comingsoon" element={<ComingSoon />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="Blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
