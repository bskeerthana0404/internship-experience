
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #ff512f, #dd2476);
`;

const FormBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h2`
  text-align: center;
  color: #dd2476;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 100px;
  resize: none;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background: #ff512f;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #dd2476;
  }
`;

function ShareExperience() {
  const [companyName, setCompanyName] = useState("");
  const[domain,setdomain]=useState("");
  const [experience, setExperience] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async () => {
    if (!companyName || !experience || !rating) {
      alert("Please fill out all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/experience", {
        companyName,
        domain,
        experience,
        rating,
      });

      alert("Experience shared!");
      setCompanyName("");
      setdomain("");
      setExperience("");
      setRating("");
    } catch (err) {
      console.error("Submission Error:", err.response?.data || err.message);
      alert("Error submitting experience");
    }
  };

  return (
    <Page>
      <FormBox>
        <Title>Share Your Internship Experience</Title>
        <Input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <Input
            type="text"
            placeholder="Domain"
            value={domain}
            onChange={(e) => setdomain(e.target.value)}
            />

        <TextArea
          placeholder="Write your experience..."
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select Rating</option>
          <option value="Good">😊 Good</option>
          <option value="Okay">😐 Okay</option>
          <option value="Bad">😞 Bad</option>
        </Select>
        <Button onClick={handleSubmit}>Submit</Button>
      </FormBox>
    </Page>
  );
}

export default ShareExperience;
