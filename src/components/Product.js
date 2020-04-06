import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

function Product(props) {
  const [showbid, updateShowBid] = useState(false);
  const [amount, setAmount] = useState("");
  function handleClick() {
    updateShowBid(!showbid);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setAmount(value);
  }
  function handleButton(event) {
    axios
      .put(`http://127.0.0.1:8000/api/update/${props.id}`, {
        sha: amount,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Bid Submitted");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setAmount("");
  }

  let current_datetime = new Date();
  current_datetime.setHours(0, 0, 0, 0);
  const allBids = JSON.parse(props.bids);

  let arr = Object.values(allBids);
  let max = Math.max(...arr);
  var parts = props.deadline.split("-");
  var Deadline = new Date(parts[0], parts[1] - 1, parts[2]);

  return (
    <div className="product">
      <p>
        <strong>Product Name</strong>: {props.name}
      </p>
      <p>
        <strong>Description</strong>: {props.description}
      </p>
      <p>
        <strong>Bid</strong>: {props.bid}
      </p>
      <p>
        <strong>Deadline</strong>: {props.deadline}
      </p>
      <p>
        <strong>Contact</strong>: {props.contact}
      </p>
      <img
        style={{ height: 200, width: 200 }}
        src={props.img}
        alt="product image"
      ></img>
      <br />
      {Deadline <= current_datetime ? (
        allBids["sha"] == max ? (
          <Button
            size="sm"
            variant="secondary"
            active
            style={{ marginTop: 20 }}
          >
            Claim
          </Button>
        ) : (
          <h4>Deadline is crossed</h4>
        )
      ) : (
        <Button
          onClick={handleClick}
          variant="secondary"
          size="sm"
          active
          style={{ marginTop: 20 }}
        >
          Bid
        </Button>
      )}

      {showbid ? (
        <div style={{ marginTop: 20 }}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter Amount"
            value={amount}
          ></input>
          <Button
            onClick={handleButton}
            variant="secondary"
            size="sm"
            active
            style={{ marginLeft: 20 }}
          >
            Submit
          </Button>
        </div>
      ) : null}
      <DropdownButton
        id="dropdown-basic-button"
        title="Show all Bids"
        style={{ marginTop: 20, marginRight: 20 }}
        size="sm"
      >
        {Object.entries(allBids).map((Bid) => {
          return (
            <Dropdown.Item>
              {Bid[0]} - {Bid[1]}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
}
export default Product;
