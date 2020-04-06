import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Redirect, useHistory } from "react-router-dom";
import history from "./history";

const UserName = (props) => {
  //let history = useHistory();
  const [userName, setUserName] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserName(value);
  };
  const handleSubmit = () => {
    localStorage.setItem("auctionHouseUserName", userName);
    console.log("redirecting ");
    history.push("/login");
  };
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 150,
        marginLeft: 30,
      }}
    >
      <p>Username </p>{" "}
      <input type="text" name="" onChange={handleChange} value={userName} />
      <br />
      <p></p>
      <Button size="sm" onClick={handleSubmit}>
        Submit
      </Button>
      <p></p>
      <p>Note: This username will be used for bidding and to add products</p>
    </div>
  );
};

export default UserName;
