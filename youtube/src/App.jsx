// MyComponent.js

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function MyComponent() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default MyComponent;
