import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 25px 0;
`;

const Text = styled.p`
  padding-top: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

const TextBlock = ({ title, children }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <Text>{children}</Text>
    </Container>
  );
};

export default TextBlock;
