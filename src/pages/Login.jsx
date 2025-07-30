
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to right, #ff512f, #dd2476);
`;

const Box = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 15px;
  width: 320px;
  text-align: center;
  box-shadow: 0 5px 25px rgba(0,0,0,0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 12px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff512f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #dd2476;
  }
`;

const Switch = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #ff512f;
  text-decoration: underline;
`;

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      onLogin({ email });
      nav("/home");
    } else {
      alert("Please enter valid email and password");
    }
  };

  return (
    <Page>
      <Box>
        <h2>Login</h2>
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        <Switch onClick={() => nav("/signup")}>Don't have an account? Signup</Switch>
      </Box>
    </Page>
  );
}

export default Login;
