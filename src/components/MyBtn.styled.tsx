import styled, {css} from "styled-components";

type MyBtnPropsType={
    primary?: boolean,
    outlined?: boolean
}
export const MyBtn=styled.button<MyBtnPropsType>`
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  
  
  ${props => props.primary && css<MyBtnPropsType>`
    border: none;
    background: #4E71FE;
    color: #FFF;
    margin-left: 20px;

    &:hover {
      background: #030c62;
      border: 2px solid #4E71FE;
    }
  `}

  ${props => props.outlined && css<MyBtnPropsType>`
    border: 2px solid #4E71FE;
    color: #4E71FE;
    margin-left: 12px;

    &:hover {
      border: none;
      background: #030c62;
      color: #FFF;
    }
  `}
  `




