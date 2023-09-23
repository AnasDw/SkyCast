import React, { useState } from "react";
import "../css/LoginPage.css";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const shared = {
    color: "black",
  };
  return (
    <>
      <div className="loginPage-Background background-noRepeat-cover">
        <div className="ho">
          <div className="fa"></div>
          <div className="fa">
            <h1>꒦ Why did the weather report go to school?</h1>
            <h2> Because it wanted to be a little "brighter"! </h2>
          </div>
          <div className="login flex flex-col">
            <div className="fa-user-circle background-noRepeat-cover"></div>
            <Form className="form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={shared}>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter email"
                />

                <Form.Text className="mb1">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label style={shared}>Password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                onClick={console.log(Email + Password)}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
