import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const Title = styled.h2`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  max-width: 90%;
`;

const Arrow = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-35%) rotate(45deg);
  height: 20px;
  width: 20px;
  border-top: 4px solid rgba(0, 0, 0, 0.25);
  border-right: 4px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 0 lightgray;
  transition: all 0.3s ease;

  ${Container}:hover & {
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0.5vmin -0.5vmin 0 rgba(0, 0, 0, 0.25);
  }
`;

const LinkedHeader = ({ url, children }) => {
  return (
    <Container to={url}>
      <Title>
        {children}
        <Arrow />
      </Title>
    </Container>
  );
};

export default LinkedHeader;
