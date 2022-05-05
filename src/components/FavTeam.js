import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import App from "../App";

export default function FavTeam() {
  const [loggedin, setLoggedIn] = useState(true);
  const [standings, setStandings] = useState("League Standings");

  function divison() {
    setStandings("Divison Standings");
  }
  function conference() {
    setStandings("Conference Standings");
  }
  function league() {
    setStandings("League Standings");
  }

  function logout() {
    localStorage.clear();
  }

  return (
    <div>
      <header className="headerDiv">
        <div className="title">
          <h1 className="athletic">The Athletic</h1>
        </div>

        <div className="favTeamsDiv">
          <Link className="rightLinks" to="/favoriteTeams">
            Favorite Teams
          </Link>{" "}
          |{" "}
          <Link className="rightLinks" to="/login">
            Login
          </Link>
          |
          <Link className="rightLinks" to="/home">
            Home
          </Link>
          |
          <Link className="rightLinks" to="/register">
            Register
          </Link>
        </div>
      </header>

      <div className="logoutDiv">
        <button className="logoutBtn" role="button" onClick={logout}>
          Logout
        </button>
      </div>
      <main>
        <div className="nfl-logo-div">
          <img src="https://theathletic.com/_next/image/?url=https%3A%2F%2Fcdn-league-logos.theathletic.com%2Fcdn-cgi%2Fimage%2Fwidth%3D68%2Cheight%3D68%2Fleague-2-color%402x.png&w=96&q=75" />
          <h2 className="nfl">NFL</h2>
        </div>

        <div></div>

        <div className="nflStandings">
          <h2>Favorite Teams</h2>
        </div>
        <div className="btnDivParent">
          <button onClick={conference} className="btnDivChild">
            Conference
          </button>
          <button onClick={divison} className="btnDivChild">
            Division
          </button>
          <button onClick={league} className="btnDivChild">
            League
          </button>
        </div>

        <div>
          <p className="conference">{standings}</p>
        </div>
      </main>
    </div>
  );
}
