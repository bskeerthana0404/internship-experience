import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const ButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background-color: #dd2476;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c21e68;
  }
`;

function AllExperiences() {
  const [experiences, setExperiences] = useState([]);
  const navigate = useNavigate();

  const emojiMap = {
    Good: "😊",
    Okay: "😐",
    Bad: "😞",
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/experience");
      setExperiences(res.data);
    } catch (err) {
      console.error("Error fetching experiences:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/experience/${id}`);
      fetchData(); // Refresh the list
    } catch (err) {
      console.error("Error deleting experience:", err);
    }
  };

  const handleEdit = (experience) => {
    // Navigate to /share with selected experience as state
    navigate("/share", { state: { experience } });
  };

  return (
    <Page>
      <Title>All Student Experiences</Title>
      {experiences.length === 0 ? (
        <p>No experiences yet.</p>
      ) : (
        experiences.map((exp) => (
          <Card key={exp._id}>
            <p><strong>Company:</strong> {exp.companyName}</p>
            <p><strong>Domain:</strong> {exp.domain}</p>
            <p>{exp.experience}</p>
            <p>
              <strong>
                Rating: {exp.rating} <Emoji>{emojiMap[exp.rating]}</Emoji>
              </strong>
            </p>

            <ButtonContainer>
              <Button onClick={() => handleEdit(exp)}>Edit</Button>
              <Button onClick={() => handleDelete(exp._id)}>Delete</Button>
            </ButtonContainer>
          </Card>
        ))
      )}
    </Page>
  );
}

export default AllExperiences;
