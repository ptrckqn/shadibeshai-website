import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 25px;
`;

const Title = styled.span`
  font-size: 20px;
  color: #000;
  text-decoration: none;
`;

const Body = styled.p`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
`;

const Card = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Container>
  );
};

export default Card;
