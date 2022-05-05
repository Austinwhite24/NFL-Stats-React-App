import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import AddTeam from './components/AddTeam';
import FavTeam from './components/FavTeam';
import Login from './components/Login';
import Register from './components/Register';
import {Route, Routes} from 'react-router'
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';
import Try from './components/Try'
import League from './components/League'
import Box from './components/Box';
import TeamStats from "./components/stats/TeamStats";
import Logout from './components/Logout';


// console.log(process.env.REACT_APP_API_KEY)

function App() {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/server/index.js/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
const [isLoggedIn, setIsLoggedIn] = useState(false)
const loginUser = () => setIsLoggedIn(!isLoggedIn)

useEffect(() => {
  if(localStorage.getItem('user_id')) {
    setIsLoggedIn(true)
  }
}, [])



const [teams, setTeams] = useState(TeamStats)
// TeamStats

  return (
    <div className="App">

      
     {/* {isLoggedIn ? null : <Register />} */}
     {/* <Dashboard /> */}
      <Routes>

<Route path='/' element={<><HomePage/><League/></>} />
<Route path='/favoriteTeams' element={<FavTeam />} />
<Route path='/home' element={<><HomePage/><League/></>} />

{/* <Route path='/login' element={<Login /> } /> */}
{/* <Route path='/logout' element={<><Register/><Logout/></>} /> */}

<Route path='*' element={isLoggedIn ? <FavTeam /> : <Login  logFunction={loginUser}/>} />
<Route path='register' element={<Register />} />
</Routes> 
{/* <League /> */}
      {/* <p>{!data ? "Loading..." : data} </p> */}


      
    </div>
  );
}

export default App;
