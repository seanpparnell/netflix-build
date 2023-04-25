import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./screens/LoginScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      <div className="app">
        <BrowserRouter>
          {!user ? (
            <Login />
          ) : (
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
