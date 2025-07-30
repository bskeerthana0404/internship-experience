import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ff512f, #dd2476);
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  margin: 10px;
  background: white;
  color: #ff512f;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #f0f0f0;
  }
`;

function Home() {
  const nav = useNavigate();

  return (
    <Page>
      <Title>Welcome to InternConnect</Title>A platform where students share their internship experiences. Help others choose wisely by sharing your story.<br />

      <Button onClick={() => nav("/share")}>Share Experience</Button>
      <Button onClick={() => nav("/all")}>View All Experiences</Button>
    </Page>
  );
}

export default Home;