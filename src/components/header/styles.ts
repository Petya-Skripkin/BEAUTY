import styled from "styled-components";
import { css } from "styled-components";

export const Content = styled.div``;

export const Menu = styled.ul<{ Background?: "white" | "gray" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;

  ${({ Background = "white" }) =>
    Background == "white"
      ? css`
          background-color: white;
        `
      : css`
          background-color: #efefef;
        `}
`;

export const LinkContent = styled.li`
  display: inline-block;
  cursor: pointer;
`;

export const Link = styled.a<{size?: boolean}>`
  padding: 10px 30px;
  color: black;
  text-decoration: none;

  ${({ size = false }) =>
    size
      ? css`
          font-size: 16px;
          font-weight: 550;
        `
      : css`
          font-size: 14px;
        `}
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
`;

export const Icon = styled.img`
  height: 80px;
`;

export const Search = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 220px;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #efefef;
  border-radius: 40px;
  background-color: #efefef;
`;

export const SearchIcon = styled.a`
  width: 20px;
  height: 20px;
  background: url("./search.svg"), no-repeat, 100%;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 80%;
  font-size: 18px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
`;
