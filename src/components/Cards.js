import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 25px 0;
`;

const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: ${props => (props.variant ? '1fr' : 'repeat(2, 1fr)')};
  grid-gap: 15px;
`;

const Cards = ({ title, variant, children }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <Grid variant={variant}>{children}</Grid>
    </Container>
  );
};

export default Cards;
