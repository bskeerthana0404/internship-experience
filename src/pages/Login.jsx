
// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

// const Page = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   font-family: 'Segoe UI', sans-serif;
//   background: linear-gradient(to right, #ff512f, #dd2476);
// `;

// const Box = styled.div`
//   background: #fff;
//   padding: 40px;
//   border-radius: 15px;
//   width: 320px;
//   text-align: center;
//   box-shadow: 0 5px 25px rgba(0,0,0,0.2);
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 12px 0;
//   border-radius: 8px;
//   border: 1px solid #ccc;
//   font-size: 1rem;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color: #ff512f;
//   color: #fff;
//   border: none;
//   border-radius: 8px;
//   font-size: 1rem;
//   font-weight: bold;
//   cursor: pointer;

//   &:hover {
//     background-color: #dd2476;
//   }
// `;

// const Switch = styled.p`
//   margin-top: 15px;
//   font-size: 0.9rem;
//   cursor: pointer;
//   color: #ff512f;
//   text-decoration: underline;
// `;

// function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const nav = useNavigate();

//   const handleLogin = () => {
//     if (email && password) {
//       onLogin({ email });
//       nav("/home");
//     } else {
//       alert("Please enter valid email and password");
//     }
//   };

//   return (
//     <Page>
//       <Box>
//         <h2>Login</h2>
//         <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//         <Button onClick={handleLogin}>Login</Button>
//         <Switch onClick={() => nav("/signup")}>Don't have an account? Signup</Switch>
//       </Box>
//     </Page>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components
const LoginContainer = styled.div`
  max-width: 400px;
  margin: 150px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: linear-gradient(to right, #ff512f, #dd2476);
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #bbb;
  border-radius: 6px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color:white;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  text-align: center;
  color: ${props => props.success ? 'green' : 'red'};
`;

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      setIsAuthenticated(true);
      setSuccess(true);
      setMsg('Login successful');
    } catch (err) {
      setSuccess(false);
      setMsg(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </Form>
      {msg && <Message success={success}>{msg}</Message>}
    </LoginContainer>
  );
};

export default Login;
