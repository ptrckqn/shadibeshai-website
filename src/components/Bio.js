import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  padding: 25px 0;
  margin-left: auto;
  display: flex;
  align-items: center;
  max-width: 750px;
  flex-direction: ${props => (props.variant ? 'row-reverse' : 'reverse')};
`;

const Details = styled.div`
  flex: 0 1 66%;
  transform: ${props =>
    props.variant ? 'translateX(-35px)' : 'translateX(35px)'};
  z-index: 2;
  background: #fff;
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
  padding: 25px;
`;

const Sub = styled.h4`
  font-style: italic;
  font-weight: 300;
  margin: 10px 0;
`;

const Bio = ({ title, sub, image, variant, children }) => {
  return (
    <Container variant={variant}>
      <Details variant={variant}>
        <h3>{title}</h3>
        <Sub>{sub}</Sub>
        <p>{children}</p>
      </Details>
      <Img fixed={image.childImageSharp.fixed} />
    </Container>
  );
};

export default Bio;
