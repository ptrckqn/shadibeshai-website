import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  display: block;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  margin: 20px 0;
  font-size: 18px;
  transition: all 0.3s;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

const JournalFile = ({ url, children }) => {
  return (
    <Container href={url} target="__blank">
      {children}
    </Container>
  );
};

export default JournalFile;
