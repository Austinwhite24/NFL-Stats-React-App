const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 4000
const axios = require("axios");
const sequelize = require('./sequelize')
const bcrypt = require('bcrypt')
// const ctrl = require('./controller')

//Middleware
const app = express()
app.use(express.json())
app.use(cors())

////Team Wins

// const options = {
//   method: 'GET',
//   url: 'https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/passing-stats/offense/2021',
//   headers: {
//     'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com',
//     'X-RapidAPI-Key': '40d3532524msh38fba6f49ced91dp14bd5ajsn54d2c5642d8b'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


//  const options = {
//   method: 'GET',
//   url: 'https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/win-stats/2021',
//   headers: {
//     'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com',
//     'X-RapidAPI-Key': '40d3532524msh38fba6f49ced91dp14bd5ajsn54d2c5642d8b'
//   }
// };

// axios.request(options).then(function (response) {
// 	// console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//Endpoints

app.get('/newFavTeam', (req, res) => {
  console.log('is this hitting')
  const {selectedYear} = req.body
})

app.get('/test', (req, res) => {
  
  axios.request(options).then(function (response) {
    console.log(response.data)
    console.log('cheeks')
  }).catch(function (error) {
    console.error(error);
  });

} )

app.post('/register', async (req, res)=> {
  const {name, username, password} = req.body
  const checkUser = await sequelize.query(`
  SELECT * FROM users WHERE username = '${username}'
  `)
  if(checkUser[1].rowCount !== 0) {
    res.status(500).send('Username already Exists')
  } else {
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt)
    await sequelize.query(`
    INSERT INTO users(name, username, password)
    VALUES (
      '${name}',
      '${username}',
      '${passwordHash}'
    )
    `)
    const userInfo = await sequelize.query(`
    SELECT user_id, username, name FROM users WHERE username = '${username}'
    `)
    res.status(200).send(userInfo)
  }
})

app.post('/login', async (req, res) => {
  const {username, password} = req.body
  const validUser = await sequelize.query(`
  SELECT * FROM users WHERE username = '${username}'
  `)
  if(validUser[1].rowCount === 1){
    if(bcrypt.compareSync(password, validUser[0][0].password)){
      let object = {
        id: validUser[0][0].id,
        name: validUser[0][0].name,
        username
  
      }
      res.status(200).send(object)
    } else {
      res.status(500).send('Password is Incorrect')
    }
  } else {
    res.status(401).send('Username is Incorrect')
  }
})


// let userID = localStorage.getItem('user_id')


// app.post('/api/addItem', ctrl.addItem)
// app.get('/api/getList', ctrl.getList)
// app.delete('/api/deleteList', ctrl.deleteList)
// app.delete('/api/deleteItem/:id', ctrl.deleteItem)
// app.get('/api/getUsers', (req,res) => {
//     console.log('gettin users bro')
// })
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

app.listen(PORT, () => console.log(`It's over ${PORT}!!!`))

