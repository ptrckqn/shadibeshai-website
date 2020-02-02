import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 60px 30px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
`;

const Title = styled.h1``;

const Subtitle = styled.h3`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 35px;
`;

const Description = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled(Img)`
  border-radius: 50%;
`;

const Hero = ({ image }) => {
  return (
    <Container>
      <Content>
        <Title>
          Hey, I'm <br /> Dr. Shadi Beshai
        </Title>
        <Description>
          <Image fixed={image.childImageSharp.fixed} />
          <Subtitle>
            Associate Professor of Clinical Psychology at The University of
            Regina
          </Subtitle>
        </Description>
      </Content>
    </Container>
  );
};

export default Hero;
