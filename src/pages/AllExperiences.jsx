import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(to right, #ff512f, #dd2476);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Card = styled.div`
  background: white;
  color: #333;
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  width: 300px;
`;

const Emoji = styled.span`
  font-size: 1.5rem;
  margin-left: 10px;
`;

const dummyData = [
  { text: "I learned a lot about React at my internship.", rating: "Good" },
  { text: "The internship was okay, not much guidance.", rating: "Okay" },
  { text: "Bad experience, they made me do unrelated work.", rating: "Bad" },
];

function AllExperiences() {
  const emojiMap = {
    Good: "😊",
    Okay: "😐",
    Bad: "😞",
  };

  return (
    <Page>
      <Title>All Student Experiences</Title>
      {dummyData.map((exp, index) => (
        <Card key={index}>
          <p>{exp.text}</p>
          <p>Rating: {exp.rating} <Emoji>{emojiMap[exp.rating]}</Emoji></p>
        </Card>
      ))}
    </Page>
  );
}

export default AllExperiences;
