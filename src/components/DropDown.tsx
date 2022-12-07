import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaTimes } from "react-icons/fa";
import { propNav } from "./Types";

const DropContiner = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }: propNav) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }: propNav) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #00d1a;
`;
const DropWrapper = styled.div``;
const DropMenu = styled.div`
  display: grid;
  gris-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
function DropDown({ isOpen, toggle }: propNav) {
  return (
    <DropContiner isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropWrapper>
        <DropMenu>
          {menuData.map((item, index) => (
            <DropLink to={item.link} key={index}>
              {item.title}
            </DropLink>
          ))}
        </DropMenu>
        <BtnWrap>
          <Button primary={true} big={true} to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropWrapper>
    </DropContiner>
  );
}

export default DropDown;
