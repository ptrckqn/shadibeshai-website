import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #000;
  padding: 25px 0;
  &:hover {
    text-decoration: ${(props) => (props.isLink ? 'underline' : 'none')};
  }
`;

const Text = styled.p`
  padding-top: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

const TextBlock = ({ title, isLink, children }) => {
  return (
    <Container isLink={isLink}>
      <h3>{title}</h3>
      <Text>{children}</Text>
    </Container>
  );
};

export default TextBlock;
