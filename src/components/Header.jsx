import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #333;
  padding: 10px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  margin: 0 10px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <Nav>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/share">Share</StyledLink>
      <StyledLink to="/experiences">Experiences</StyledLink>
      <StyledLink to="/">Login</StyledLink>
      <StyledLink to="/signup">Signup</StyledLink>
    </Nav>
  );
}

export default Header;
