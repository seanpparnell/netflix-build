import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    });

    return unsubscribe
  }, [dispatch])

  return (
    <div className="app">
      <div className="app">
        <BrowserRouter>
          {!user ? (
            <Login />
          ) : (
            <Routes>
              <Route path="/profile" element={<ProfileScreen />} />
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
