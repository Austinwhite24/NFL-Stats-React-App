import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import TeamStats from "./stats/TeamStats";
import FavTeam from "./FavTeam";

export default function HomePage(props) {
  ////////Change Standing////////
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

  //////// Get Team Stats ///////
  const [teams, setTeams] = useState(TeamStats);

  ///// Fav Team /////
  const [favTeam, setFavTeam] = useState(false);

  return (
    <div>
      <header className="headerDiv">
        <div className="title">
          <h1>The Athletic</h1>
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
          <Link className="rightLinks" to="/register">
            Register
          </Link>
        </div>
      </header>
      <div className="nfl-logo-div">
        <img src="https://theathletic.com/_next/image/?url=https%3A%2F%2Fcdn-league-logos.theathletic.com%2Fcdn-cgi%2Fimage%2Fwidth%3D68%2Cheight%3D68%2Fleague-2-color%402x.png&w=96&q=75" />
        <h2>NFL</h2>
      </div>

      <main>
        <div className="nflStandings">
          <h2>NFL Standings</h2>
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
          <div className="playoffs">
            <p>X = Clinched Playoffs </p>
            <p>Z = Clinched Divison</p>
            <p>Y = Clinched WildCard</p>
          </div>
        </div>
      </main>
    </div>
  );
}
