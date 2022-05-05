import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import FavTeam from "./components/FavTeam";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import League from "./components/League";
import TeamStats from "./components/stats/TeamStats";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginUser = () => setIsLoggedIn(!isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      setIsLoggedIn(true);
    }
  }, []);

  const [teams, setTeams] = useState(TeamStats);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <League />
            </>
          }
        />
        <Route path="/favoriteTeams" element={<FavTeam />} />
        <Route
          path="/home"
          element={
            <>
              <HomePage />
              <League />
            </>
          }
        />

        <Route
          path="*"
          element={isLoggedIn ? <FavTeam /> : <Login logFunction={loginUser} />}
        />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
