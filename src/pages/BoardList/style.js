import { css } from '@emotion/react';

export const layout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  position: relative;
`;

export const modalLayout = (showModal) => css`
  box-sizing: border-box;
  position: fixed;
  top: ${showModal ? "50%" : "50%"};;
  left: ${showModal ? "50%" : "50%"};;
  transform: translate(-50%,-50%);
  border: 1px solid #dbdbdb;
  padding: 50px 100px;
  width: ${showModal ? "1000px" : "0px"};
  height: ${showModal ? "600px" : "0px"};
  opacity: ${showModal ? "1" : "0"};;
  background-color: white;
  transition: all 0.3s ease-in-out;
`

export const modalTitle = css`
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

export const modalContent = css`
  box-sizing: border-box;
  position: absolute;
  top: 20%;
  left: 5%;
  border-top: 2px solid #dbdbdb;
  border-bottom: 2px solid #dbdbdb;
  padding: 10px 5px;
  width: 90%;
  height: 60%;
  overflow: auto;
  font-size: 18px;
  font-weight: 500;
`;

export const modalOutBtn = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid #dbdbdb;
  padding: 20px;
  width: 90px;
  height: 30px;
  right: 5%;
  bottom: 8%;
  &:hover{
    background-color: #eee;
  }
  &:active{
    background-color: #fafafa;
  }
`

export const headerTitle = css`
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

export const boardListLayout = css`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  width: 900px;
  height: 500px;
`

export const boardListHead = css`
  box-sizing: border-box;
  display: flex;
  border-bottom: 2px solid #dbdbdb;
  width: 100%;
  & > div{
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-weight: 700;
    cursor: default;
  }
  & > div:nth-of-type(1) {
    flex-grow: 0;
    border-right: 1px solid #dbdbdb;
    width: 80px;
  }
`;

export const boardListItem = css`
  color: #222;
  text-decoration: none;
  cursor: pointer;
  & > li {
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    
    &:hover{
      background-color: #eee;
      transition: background-color 0.5s;
    }

    & > div {
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    height: 40px;
    }
  
    & > div:nth-of-type(1) {
      flex-grow: 0;
      border-right: 1px solid #dbdbdb;
      width: 80px;
    }
  }
`