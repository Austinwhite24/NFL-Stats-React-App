import React from 'react'
import {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Try(props) {
    const [team, setTeam] = useState([])

    let navigate = useNavigate();

    const setValues = {
        name: "",
        wins: "",
        losses: "",
        winRatePercentage: ""
    }

    const onClick = (values) => {
        axios.get(`https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/win-stats/2021`, values)
        .then((res) => {
            localStorage.setItem("team_id", res.data.team_id)
            localStorage.setItem("wins", res.data.wins)
            localStorage.setItem("losses", res.data.losses)
            localStorage.setItem("name", res.data.team_id)
            localStorage.setItem("team_id", res.data.team_id)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
        console.log(setValues)
    }
  return (
    <div>
 <form>
     
 </form>
    </div>
  )
}

export default Try