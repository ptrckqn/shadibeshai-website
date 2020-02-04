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
  @media only screen and (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;

const Details = styled.div`
  flex: 0 1 66%;
  transform: ${props =>
    props.variant ? 'translateX(-35px)' : 'translateX(35px)'};
  z-index: 2;
  background: #fff;
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
  padding: 25px;
  @media only screen and (max-width: 650px) {
    transform: translateY(-50px);
  }
`;

const Sub = styled.h4`
  font-style: italic;
  font-weight: 300;
  margin: 10px 0;
`;

const Image = styled(Img)`
  width: 100%;
`;

const Bio = ({ title, sub, image, variant, children }) => {
  return (
    <Container variant={variant}>
      <Details variant={variant}>
        <h3>{title}</h3>
        <Sub>{sub}</Sub>
        <p>{children}</p>
      </Details>
      <Image fluid={image.childImageSharp.fluid} />
    </Container>
  );
};

export default Bio;
