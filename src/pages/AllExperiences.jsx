import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

function AllExperiences() {
  const [experiences, setExperiences] = useState([]);
  
  const emojiMap = {
    Good: "😊",
    Okay: "😐",
    Bad: "😞",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/experience");
        setExperiences(res.data);
      } catch (err) {
        console.error("Error fetching experiences:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Page>
      <Title>All Student Experiences</Title>
      {experiences.length === 0 ? (
        <p>No experiences yet.</p>
      ) : (
        experiences.map((exp, index) => (
          <Card key={index}>
            <p><strong>Company:</strong> {exp.companyName}</p>
            <p>{exp.experience}</p>
            <p>
              Rating: {exp.rating} <Emoji>{emojiMap[exp.rating]}</Emoji>
            </p>
          </Card>
        ))
      )}
    </Page>
  );
}

export default AllExperiences;
