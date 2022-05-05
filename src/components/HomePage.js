import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react'
import TeamStats from "./stats/TeamStats";
import FavTeam from "./FavTeam";
// import App from './App.css'

export default function HomePage(props) {


  ////////Change Standing////////
  const [standings, setStandings] = useState("League Standings")

  function divison() {
    setStandings('Divison Standings')
  }
  function conference() {
    setStandings('Conference Standings')
  }
  function league() {
    setStandings('League Standings')
  }

//////// Get Team Stats ///////
  const [teams, setTeams] = useState(TeamStats)

  ///// Fav Team /////
  const [favTeam, setFavTeam] = useState(false)


// const styles = {
//   backgroundColor: props.favTeam ? "#222222" : "#cccccc"
// }

  // function colorChange () {
  //   backgroundColor: green
  // }
    
  // const teamStats = teams.map(team => (
  //     <div className="nflLogosParent" key={team.id}>
  //       <table>
  //       <tr className="tr">
  //             <th style={styles}className="th">FAV TEAM</th>
  //             <th className="th">TEAM</th>
  //             <th className="th">WIN</th>
  //             <th className="th">LOSS</th>
  //             <th className="th">PCT</th>
  //             <th className="th">REC</th>
  //             <th className="th">REC TD</th>
  //             <th className="th">REC YARDS</th>
  //             <th className="th">RUSH YARDS</th>
  //             <th className="th">RUSH TDS</th>
  //             <th className="th">PASS YARDS</th>
  //             <th className="th">COMP</th>
  //             <th className="th">PASS TDS</th>
  //         </tr>
  //         <input style={styles}type="checkbox" className="" />
  //         <td style={styles}className="td">{team.name}</td>
  //         <td className="td">{team.wins}</td>
  //         <td className="td">{team.losses}</td>
  //         <td className="td">{team.winRatePercentage}</td>
  //         <td className="td">{team.receives}</td>
  //         <td className="td">{team.touchdowns}</td>
  //         <td className="td">{team.yards}</td>
  //         <td className="td">{team.rushYards}</td>
  //         <td className="td">{team.rushTd}</td>
  //         <td className="td">{team.passYards}</td>
  //         <td className="td">{team.completions}</td>
  //         <td className="td">{team.passTds}</td>
  //       </table>
  //     </div>
  // ))

  


 

  return (
    <div>
      <header className="headerDiv">
          <div className="title">
            <h1>The Athletic</h1>
          </div>
        
      <div className="favTeamsDiv">
        <Link className='rightLinks'to="/favoriteTeams">Favorite Teams</Link> |{" "}
        <Link className='rightLinks'to="/login">Login</Link>
        |<Link className='rightLinks'to="/register">Register</Link>
      </div>
      </header>
      <div className="nfl-logo-div">
        <img src="https://theathletic.com/_next/image/?url=https%3A%2F%2Fcdn-league-logos.theathletic.com%2Fcdn-cgi%2Fimage%2Fwidth%3D68%2Cheight%3D68%2Fleague-2-color%402x.png&w=96&q=75" />
        <h2>NFL</h2>
      </div>

      <main>
        <div className="nflStandings">
          <h2 >NFL Standings</h2>
          
        </div>
        <div className="btnDivParent">
          <button onClick={conference}className="btnDivChild" >Conference</button>
          <button onClick={divison}className="btnDivChild">Division</button>
          <button onClick={league}className="btnDivChild">League</button>
          
        </div>
        <div>
          <p className="conference">{standings}</p>
           <div className="playoffs">
               <p>X = Clinched Playoffs </p>
               <p>Z = Clinched Divison</p>
               <p>Y = Clinched WildCard</p>
            </div>
        </div>





        {/* <section>
          <table>
            <tr>
              <th>TEAM</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>PCT</th>
              <th>PF</th>
              <th>PA</th>
              <th>Rush Yds</th>
              <th>Rush Tds</th>
              <th>Rec</th>
              <th>Rec Tds</th>
              <th>Pass Yds</th>
              <th>Pass Tds</th>

            </tr>
            <tr>
                <div className="nflLogosParent">
              <td> <span> <img className='nflLogosChild'src="https://s3-us-west-2.amazonaws.com/theathletic-team-logos/team-logo-56-72x72.png"/>  </span>Chargers</td>
                </div>
          <tb>{teamStats}</tb>
              <td>9</td>
              <td>8</td>
              <td>0</td>
              <td>5.29</td>
              <td>474</td>
              <td>459</td>
              <td>1834</td>
              <td>18</td>
              <td>443</td>
              <td>38</td>
              <td>5014</td>
              <td>38</td>
            </tr>
          </table>
        </section> */}
      </main>
    </div>
  );
}
