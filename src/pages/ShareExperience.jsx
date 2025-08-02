
/*import React, { useState } from "react";
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

export default ShareExperience;*/





















/*import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const ShareExperienceContainer = styled.div`
  max-width: 500px;
  margin: 100px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: linear-gradient(to right, #ff512f, #dd2476);
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 100px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  font-color:black;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color:black;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #dd2476;
  }
`;

const ShareExperience = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editingExperience = location.state?.experience || null;

  const [companyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [experience, setExperience] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (editingExperience) {
      setCompanyName(editingExperience.companyName || "");
      setDomain(editingExperience.domain || "");
      setExperience(editingExperience.experience || "");
      setRating(editingExperience.rating || "");
    }
  }, [editingExperience]);

  const handleSubmit = async () => {
    if (!companyName || !experience || !rating) {
      alert("Please fill out all fields");
      return;
    }

    const payload = { companyName, domain, experience, rating };

    try {
      if (editingExperience && editingExperience._id) {
        await axios.put(
          `http://localhost:5000/api/experience/${editingExperience._id}`,
          payload
        );
        alert("Experience updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/experience", payload);
        alert("Experience shared successfully!");
      }

      setCompanyName("");
      setDomain("");
      setExperience("");
      setRating("");

      navigate("/all");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <ShareExperienceContainer>
      <Title>{editingExperience ? "Edit Experience" : "Share Experience"}</Title>
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
        onChange={(e) => setDomain(e.target.value)}
      />
      <Textarea
        placeholder="Describe your experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Rating (Good / OK / Bad)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Button onClick={handleSubmit}>
        {editingExperience ? "Update Experience" : "Share Experience"}
      </Button>
    </ShareExperienceContainer>
  );
};

export default ShareExperience;*/





















import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

// Outer wrapper with full-page gradient background
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #ff512f, #dd2476);
  font-family: 'Segoe UI', sans-serif;
`;

// Form container with white background
const ShareExperienceContainer = styled.div`
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

const Textarea = styled.textarea`
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
  background:  #dd2476;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: black;
  }
`;

function ShareExperience() {
  const location = useLocation();
  const navigate = useNavigate();
  const editingExperience = location.state?.experience || null;

  const [companyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [experience, setExperience] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (editingExperience) {
      setCompanyName(editingExperience.companyName || "");
      setDomain(editingExperience.domain || "");
      setExperience(editingExperience.experience || "");
      setRating(editingExperience.rating || "");
    }
  }, [editingExperience]);

  const handleSubmit = async () => {
    if (!companyName || !experience || !rating) {
      alert("Please fill out all fields");
      return;
    }

    const payload = { companyName, domain, experience, rating };

    try {
      if (editingExperience && editingExperience._id) {
        await axios.put(
          `http://localhost:5000/api/experience/${editingExperience._id}`,
          payload
        );
        alert("Experience updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/experience", payload);
        alert("Experience shared successfully!");
      }

      setCompanyName("");
      setDomain("");
      setExperience("");
      setRating("");

      navigate("/all");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Page>
      <ShareExperienceContainer>
        <Title>{editingExperience ? "Edit Experience" : "Share Experience"}</Title>
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
          onChange={(e) => setDomain(e.target.value)}
        />
        <Textarea
          placeholder="Describe your experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select Rating</option>
          <option value="Good">😊 Good</option>
          <option value="Okay">😐 Okay</option>
          <option value="Bad">😞 Bad</option>
        </Select>
        <Button onClick={handleSubmit}>
          {editingExperience ? "Update Experience" : "Share Experience"}
        </Button>
      </ShareExperienceContainer>
    </Page>
  );
}

export default ShareExperience;

