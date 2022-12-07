import { Link } from "react-router-dom";
import styled from "styled-components";
import { propBtn } from "./Types";

export const Button = styled(Link)`
  background: ${({ primary }: propBtn) => (primary ? "#000d1a" : "CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 160px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ primary }: propBtn) => (primary ? "#fff" : "#000d1a")};
  padding: ${({ big }: propBtn) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }: propBtn) => (big ? "20px" : "14px ")};
  &:hover {
    transform: translateY(-5px);
  }
`;
