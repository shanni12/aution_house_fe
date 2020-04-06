import React, { useState } from "react";

function Signup() {
  const [details, setDetails] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  function handleClick() {
    if (details.password !== details.confirmpassword) {
      alert("password mismatch");
      setDetails((prevalue) => {
        return {
          ...prevalue,
          confirmpassword: "",
        };
      });
    } else {
      console.log(details);
      //todo:send the request to backend
      setDetails((prevalue) => {
        return {
          username: "",
          password: "",
          confirmpassword: "",
        };
      });
    }
  }
  return (
    <form>
      <h3> Sign Up </h3>{" "}
      <input
        name="username"
        onChange={handleChange}
        type="email"
        placeholder="username"
        value={details.username}
      />{" "}
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="password"
        value={details.password}
      />{" "}
      <input
        name="confirmpassword"
        onChange={handleChange}
        type="password"
        placeholder="confirm password"
        value={details.confirmpassword}
      />{" "}
      <button type="button" onClick={handleClick}>
        {" "}
        Sign Up{" "}
      </button>{" "}
    </form>
  );
}
export default Signup;
