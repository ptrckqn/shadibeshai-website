import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  max-width: 950px;
  margin: 0 auto;
  padding: 60px 30px;
  @media only screen and (max-width: 500px) {
    padding: 60px 15px;
  }
`;

const Section = ({ id, children }) => {
  return <Container id={id}>{children}</Container>;
};

export default Section;
