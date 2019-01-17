import React from "react";

export default ({ about, name, email, phone }) => (
  <>
    <h1> {name} </h1>
    <p> {about} </p>
    <h6> {email} </h6>
    <h6> {phone} </h6>
  </>
);
