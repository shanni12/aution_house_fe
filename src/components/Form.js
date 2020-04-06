import React, { useState } from "react";
import axios from "axios";
function Form() {
  const [details, setDetails] = useState({
    name: "",
    description: "",
    starting_bid: "",
    deadline: "",
    contact: "",
    image: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setDetails((prevalue) => {
      return { ...prevalue, [name]: value };
    });
  }
  function handleClick(event) {
    const formData = new FormData();
    formData.append("name", details.name);
    formData.append("description", details.description);
    formData.append("starting_bid", details.starting_bid);
    formData.append("deadline", details.deadline);
    formData.append("contact", details.contact);
    formData.append("image", details.image);
    formData.append("uploaded_by", "admin");

    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/create/", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          alert("Created Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setDetails({
      name: "",
      description: "",
      starting_bid: "",
      deadline: "",
      contact: "",
      image: "",
    });
  }
  return (
    <form style={{ width: "60%" }}>
      <h3>Product Name:</h3>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={details.name}
        placeholder="Enter Product Name"
        required
      />
      <h3>Description:</h3>
      <textarea
        onChange={handleChange}
        type="text"
        value={details.description}
        name="description"
        placeholder="Describe the Product"
        required
      ></textarea>
      <h3>Starting Bid:</h3>
      <input
        onChange={handleChange}
        type="text"
        name="starting_bid"
        value={details.starting_bid}
        placeholder="Enter the Starting Bid"
        required
      ></input>
      <h3>Deadline:</h3>
      <input
        onChange={handleChange}
        type="Date"
        name="deadline"
        value={details.deadline}
        placeholder="Deadline"
        required
      ></input>
      <h3>Contact Number:</h3>
      <input
        onChange={handleChange}
        value={details.contact}
        type="tel"
        id="phone"
        name="contact"
        placeholder="9876543210(example)"
        pattern="[1-9]{1}[0-9]{9}"
        required
      />
      <h3>Image(Upload)</h3>
      <input
        type="file"
        name="image"
        onChange={handleChange}
        value={details.image}
      />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
}
export default Form;
