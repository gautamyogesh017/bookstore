import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let url = "";

  const registerUser = async () => {
    const requestOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };
    await fetch("http://localhost:3000/register", requestOption);
  };

  return (
    <div className="form">
      <div className="form-header">
        <h1>Register here!</h1>
      </div>
      <hr />
      <div className="form-body">
        <div className="form-username">
          <label className="form__label">Name </label>
          <br />
          <input
            className="form__input"
            type="text"
            id="Name"
            placeholder="Name"
            onKeyUp={(event) => {
              console.log(event);
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-email">
          <label className="form__label">Email </label>
          <br />
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onKeyUp={(event) => {
              console.log(event);
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="form-password"></div>
        <label className="form__label">Password </label>
        <br />
        <input
          className="form__input"
          type="password"
          id="password"
          placeholder="Password"
          onKeyUp={(event) => {
            console.log(event);
            setPassword(event.target.value);
          }}
        />
      </div>
      <hr />
      <div className="form-checkbox">
        <label>
          <input type="checkbox" />I agree to the terms and conditions by
          clicking here.
        </label>
      </div>
      <div className="footer">
        <button type="submit" className="btn" onClick={() => registerUser()}>
          Register Now!
        </button>
        <div className="form-login">
          <p> Already have an Account?</p>
          <a href={url}>Click here to Sign in!</a>
        </div>
      </div>
    </div>
  );
};
export default Register;
