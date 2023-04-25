import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
