import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
// import Bars from "../images/bars.svg";
import { HiBars3BottomRight } from "react-icons/hi2";
import { propNav } from "./Types";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: #000d1a;
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding:0 1rem;
height:100%
cursor:pointer;
text-decoration: none;
font-size:larger;

  `;
const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
  transition: all 0.3s;
  &:hover {
    transform: translateY(-3px);
  }
`;
const MenuBars = styled(HiBars3BottomRight)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 30%);
  }
`;
const NavMenu = styled.i`
  display: flex;
  align-items: center;
  margin-right: -50px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Navbar({ toggle }: propNav) {
  return (
    <Nav>
      <Logo to="/">Home Shop</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to={"/contact"} primary={true} big={true}>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
