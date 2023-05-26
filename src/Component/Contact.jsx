import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional validation or submit the form data here
    console.log("Name", name);
    console.log("Email", email);
    console.log("Message", message);
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-3xl ml-96 mt-10 p-60 pt-28 wrapper">
        <Box
          sx={{
            width: 500,
            height: 700,
          }}
          className="mb-20 bg-primary rounded-md"
        >
          <div className="py-16 px-24">
            <div className="pt-4">
              <label>Name</label>
              <input
                className="rounded-md"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="pt-4">
              <label>Email</label>
              <input
                className="rounded-md"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="pt-4">
              <label>Message</label>
              <textarea
                className="rounded-md"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            <div className="rounded-md pt-4">
              <button
                style={{
                  background: "#CE5A29",
                  textAlign: "center",
                  marginLeft: "2.5em",
                  width: "50%",
                  padding: "0.2rem",
                  height: "20%",
                  borderRadius: "0.3rem",
                }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
        {/* go back link */}
      <div className="bg-primary rounded-md text-center shadow-md p-2 pl-7 w-40 flex items-center ml-40">
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </div>
      </div>
    </form>
  );
};

export default ContactForm;
