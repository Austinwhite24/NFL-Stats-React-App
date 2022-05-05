import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(props) {
  let navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    axios
      .post("/login", values)
      .then((res) => {
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("user_id", res.data.user_id);
        localStorage.setItem("username", res.data.username);
        props.logFunction();
        navigate("/secret");
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username Required";
    }
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be longer than 8 Characters.";
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

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
        <h2>Login Page</h2>
        <div className="loginInfo">

        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          <button className="submitBtn" type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </form>
        <Link className="register" to="/register">
            Register
          </Link>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
