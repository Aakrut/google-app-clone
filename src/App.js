import React, { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoute from "./components/MainRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./components/Results";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <MainRoute />
        <Footer />
      </div>
    </div>
  );
};

export default App;
