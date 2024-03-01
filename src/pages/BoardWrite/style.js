import { css } from '@emotion/react';


export const layout = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 120px;
  border: 1px solid #dbdbdb;
  padding: 50px 0px;
`;

export const headerTitle = css`
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

export const boardTitle = css`
  box-sizing: border-box;
  margin-bottom: 10px;
  outline: none;
  width: 90%;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const submitBtn = css`
  box-sizing: border-box;
  margin-top: 50px;
  width: 90%;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
  &:active {
    background-color: #eee;
  }
`;