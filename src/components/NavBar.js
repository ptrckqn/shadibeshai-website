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
  box-shadow: ${(props) =>
    props.shadow ? null : '1px 2px 18px rgba(0, 0, 0, 0.1)'};
  transition: box-shadow 0.3s;
`;

const Container = styled.div`
  max-width: 950px;
  padding: 0 30px;
  height: ${(props) => (props.long ? '120px' : '60px')};
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

const Checkbox = styled.input`
  display: none;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  border-radius: 10px;
  background-color: #fff;
  @media only screen and (max-width: 600px) {
    display: none;
    ${Checkbox}:checked ~ & {
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }
  }
`;

const NavLink = styled.li`
  position: relative;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  &:not(:first-child) {
    @media only screen and (min-width: 600px) {
      margin-left: 25px;
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 35px;
    margin-bottom: 20px;
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
`;

const NavBtn = styled.label`
  position: relative;
  height: 20px;
  width: 35px;
  z-index: 2;
  span {
    position: absolute;
    display: block;
    height: 3px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    transition: all 0.3s;

    &:nth-child(1) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-child(2) {
      bottom: 0;
    }
  }

  ${Checkbox}:checked ~ & span {
    &:nth-child(1) {
      opacity: 0;
    }

    &:nth-child(2) {
      transform: translateY(-8.5px);
    }

    &:nth-child(3) {
      transform: translateY(8.5px);
    }
  }

  @media only screen and (min-width: 600px) {
    display: none;
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
        <Checkbox type="checkbox" id="navCheckbox" />
        <NavBtn htmlFor="navCheckbox">
          <span />
          <span />
          <span />
        </NavBtn>
        <NavLinks>
          {' '}
          <NavLink>
            <StyledLink to="/publications">Publications</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="/lab">Lab</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="/media">Media</StyledLink>
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
