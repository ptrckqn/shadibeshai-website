import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  max-width: 950px;
  padding: 30px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 500px) {
    padding: 30px 15px;
  }
`;

const Links = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 25px;
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(2, max-content);
  }
`;

const li = styled.li``;

const NavLink = styled.a`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

const MadeBy = styled.a`
  color: rgba(0, 0, 0, 0.3);
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Container>
      <Links>
        <li>
          <NavLink
            href="https://scholar.google.ca/citations?user=S6qBaxEAAAAJ&hl=en"
            target="__blank"
          >
            Google Scholar
          </NavLink>
        </li>
        <li>
          <NavLink
            href="https://www.researchgate.net/profile/Shadi_Beshai"
            target="__blank"
          >
            Research Gate
          </NavLink>
        </li>
        <li>
          <NavLink href="https://www.uregina.ca" target="__blank">
            URegina
          </NavLink>
        </li>
        <li>
          <NavLink
            href="https://www.facebook.com/Depression-Cognition-and-Culture-Lab-1672076403036594/?fref=photo"
            target="__blank"
          >
            Facebook
          </NavLink>
        </li>
      </Links>
      {/* <MadeBy href="https://github.com/ptrckqn" target="__blank">
        Made by Patrick Quan
      </MadeBy> */}
    </Container>
  );
};

export default Footer;
