import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

function League() {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2021");
  const [differentStats, setDiffernetStats] = useState("win-stats");
  const [offenseDefense, setOffenseDefense] = useState("");

  const [favTeam, setFavTeam] = useState(false);
  console.log(favTeam);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/${differentStats}${offenseDefense}/${selectedYear}`,
      headers: {
        "X-RapidAPI-Host": "nfl-team-stats.p.rapidapi.com",
        "X-RapidAPI-Key": "40d3532524msh38fba6f49ced91dp14bd5ajsn54d2c5642d8b",
      },
    };
    axios.request(options).then(function (response) {
      const reverse = response.data.reverse();
      setData(reverse);
    });
  }, [selectedYear, differentStats, offenseDefense]);

  function nameOfFunction() {
    axios
      .post("/newFavTeam", selectedYear)
      .then((response) => console.log(selectedYear))
      .catch((error) => console.log(error));
  }

  return (
    <main>
      <div className="">
        <select
          name="select-year"
          id="select-year"
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        >
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
          <option value="1970">1970</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1966">1966</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1963">1963</option>
          <option value="1962">1962</option>
          <option value="1961">1961</option>
          <option value="1960">1960</option>
          <option value="1959">1959</option>
        </select>

        <select
          name="select-stats"
          id="select-stats"
          onChange={(e) => setDiffernetStats(e.target.value)}
          defaultValue={differentStats}
        >
          <option value="win-stats">Team Wins</option>
          <option value="receiving-stats">Receiving Stats</option>
          <option value="rushing-stats">Rushing Stats</option>
          <option value="passing-stats">Passing Stats</option>
        </select>
        <select
          name="select-offense/defense"
          id="select-offense/defense"
          onChange={(e) => setOffenseDefense(e.target.value)}
          defaultValue={offenseDefense}
        >
          <option value="">Offense/Defense</option>
          <option value="/offense">Offense Stats</option>
          <option value="/defense">Defense Stats</option>
        </select>

        {data.map((data) => (
          <div key={data.id} className="nflStandings">
            <table>
              <tr>
                <th>FAV</th>
                <th>TEAM</th>
                <th>WINS</th>
                <th>LOSSES</th>
                <th>PCT</th>
                <th className="">REC</th>
                <th className="">REC TD</th>
                <th className="">REC YARDS</th>
                <th className="">RUSH YARDS</th>
                <th className="">RUSH TDS</th>
                <th className="">PASS YARDS</th>
                <th className="">COMP</th>
                <th className="">PASS TDS</th>
              </tr>
              <tr>
                <td className="favTD">
                  <input
                    id="favBtn"
                    onClick={nameOfFunction}
                    defaultValue={favTeam}
                    type="checkbox"
                  />
                </td>
                <td className="teamCSS">{data.name}</td>
                <td>{data.wins}</td>
                <td>{data.losses}</td>
                <td>{data.winRatePercentage}</td>
                <td>
                  {differentStats === "receiving-stats" ? data.receives : ""}
                </td>
                <td className="rec-td">
                  {differentStats === "receiving-stats" ? data.touchdowns : ""}
                </td>
                <td className="rec-yards">
                  {differentStats === "receiving-stats" ? data.yards : ""}
                </td>
                <td className="rush-yards">
                  {differentStats === "rushing-stats" ? data.yards : ""}
                </td>
                <td className="rush-td">
                  {differentStats === "rushing-stats" ? data.touchdowns : ""}
                </td>
                <td className="pass-yards">
                  {differentStats === "passing-stats" ? data.passYards : ""}
                </td>
                <td className="pass-comp">
                  {differentStats === "passing-stats" ? data.completions : ""}
                </td>
                <td className="pass-td">
                  {differentStats === "passing-stats" ? data.touchdowns : ""}
                </td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    </main>
  );
}

export default League;
