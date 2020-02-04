import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 5;
  box-shadow: ${props =>
    props.shadow ? null : '1px 2px 18px rgba(0, 0, 0, 0.1)'};
  transition: box-shadow 0.3s;
`;

const Container = styled.div`
  max-width: 950px;
  padding: 0 30px;
  height: ${props => (props.long ? '120px' : '60px')};
  transition: height 0.3s;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 500px) {
    padding: 0 15px;
  }
`;

const Brand = styled.div`
  font-size: 21px;
  color: rgba(0, 0, 0, 0.75);
  transition: all 0.3s;
  font-weight: 700;
  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: inherit;
`;

const StyledA = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: inherit;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLink = styled.li`
  position: relative;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  &:not(:first-child) {
    margin-left: 25px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
  }
  &:hover {
    color: rgba(0, 0, 0, 1);
    &::after {
      width: 100%;
      background-color: rgba(0, 0, 0, 1);
    }
  }
  @media only screen and (max-width: 500px) {
    :nth-child(3) {
      display: none;
    }
  }
`;

const NavBar = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset <= 0) {
      setAtTop(true);
    } else if (window.pageYOffset > 0) {
      setAtTop(false);
    }
  };

  return (
    <Nav shadow={atTop}>
      <Container long={atTop}>
        <Brand>
          <StyledLink to="/">Dr. Shadi Beshai</StyledLink>
        </Brand>
        <NavLinks>
          <NavLink>
            <StyledLink to="/publications">Publications</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="/lab">Lab</StyledLink>
          </NavLink>
          <NavLink>
            <StyledA href="/#contact">Contact</StyledA>
          </NavLink>
        </NavLinks>
      </Container>
    </Nav>
  );
};

export default NavBar;
