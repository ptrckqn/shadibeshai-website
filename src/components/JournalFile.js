import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  display: block;
  color: #000;
  text-decoration: underline;
  margin: 20px 0;
  font-size: 22px;
`;

const JournalFile = ({ url, children }) => {
  return (
    <Container href={url} target="__blank">
      {children}
    </Container>
  );
};

export default JournalFile;
