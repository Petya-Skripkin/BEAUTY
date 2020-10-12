import styled, { css } from "styled-components";

export const Content = styled.div`
  position: relative;
`;

export const Conteiner = styled.div`
  position: absolute;
  top: 12vh;
  left: 10vw;
  display: flex;
  flex-direction: column;
  width: 380px;
  color: white;
  z-index: 1;
`;

export const Button = styled.button`
  width: 170px;
  height: 40px;
  border: 1px solid white;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  cursor: pointer;
  outline: none;
`;

export const Slide = styled.div<{ bgImage: string; }>`
  width: 100%;
  height: 60vh;
  box-sizing: border-box;

  ${({ bgImage }) =>
    css`
      background-image: url(${bgImage});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
    `}
`;
