import styled, { css } from 'styled-components';

export const Content = styled.div`
`;

export const Conteiner = styled.div`
    align-items: center;
    margin-left: 405px; 
    margin-top: 175px;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    width: 255px;
    background-color: white;
    border: 1px solid black; 
`;

export const Button = styled.button`
    width: 130px;
    height: 35px;
    border: 1px solid #F13C6E;
    border-radius: 30px;
    background-color: #F13C6E;
    color: white;
`;

export const Image = styled.img <{ bgImage: string; }>`
    width: 125px;
    height: 166px;
    box-sizing: border-box;

  ${({ bgImage }) =>
    css`
      background-image: url(${bgImage});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
    `}
`;