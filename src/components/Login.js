import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  function handleClick() {
    console.log(details);
    setDetails({
      username: "",
      password: "",
    });
    props.action(true)
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="login">
        <h3
          style={{
            marginBottom: "20px",
          }}
        >
          Log In
        </h3>
        <input
          onChange={handleChange}
          name="username"
          type="email"
          placeholder="Username"
          value={details.username}
          required
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
          value={details.password}
          required
        />
        <button type="button" onClick={handleClick}>
          Login
        </button>
        <p> Don't have an account?</p>
        <Link to="/signup">Sign up</Link>
      </form>
    </div>
  );
}

export default Login;
