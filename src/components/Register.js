import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { Link } from "react-router-dom";

function Register() {
    const initialValues = {
        name: "",
        username: "",
        password: ""
    }
    const onSubmit = (values) => {
        axios.post('/register', values)
        .then((res) => {
            localStorage.setItem('name', res.data[0][0].name)
            localStorage.setItem('user_id', res.data[0][0].user_id)
            localStorage.setItem('username', res.data[0][0].username)
        })
        .catch((err) => console.log(err.response.data))
    }
    const validate = (values) => {
        const errors = {}
        if(!values.name) {
            errors.name = 'You have to enter Name.'
        } 
        if (!values.username) {
            errors.username = "Username Required"
        }
        if(!values.password) {
            errors.password = "Password Required"
        } 
        else if(values.password.length < 8 ) {
            errors.password = "Password must be longer than 8 Characters."
        } 
        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })


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
          |<Link className="rightLinks" to="/home">
            Home
          </Link>
        </div>
      </header>
      <div className="loginBigDiv">
      <div className="loginRegisterChild">
        <h2>Register Page</h2>
        <form onSubmit={formik.handleSubmit}>
        <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder='Name'
         />
        <input
        type="text"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder='Username'
         />
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder='Password'
         />
         
         <button className="submitBtn" type='submit' disabled={!formik.isValid}>Submit</button>
        </form>
        <div>
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            {formik.errors.username ? <div>{formik.errors.username}</div> : null}
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>

      </div>
      </div>
    </div>
  )
}

export default Register