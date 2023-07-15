import styled from "styled-components";
import {DARK} from "@/src/data/constans/theme";

export const AddTodoContainer = styled.div`
  margin-left: 50px;
`

interface OpenProps {
    theme: string,
}

export const OpenModalButton = styled.button<OpenProps>`
  padding: 5px 10px;
  border: 1px solid lightgray;
  background: none;
  text-align: center;
  color: ${(props) => props.theme === DARK ? "white !important" : "black !important"};
  cursor: pointer;
  
  &:hover {
    transition: 0.2s;
    box-shadow: 0 2px 5px rgb(0,0,0,0.5);
  }
`

export const Modal = styled.dialog`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  border: none;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div<OpenProps>`
  background: ${(props) => props.theme === DARK ? "rgb(96, 96, 96)" : "rgb(255,255,255)"};
  color: ${(props) => props.theme === DARK ? "white !important" : "black !important"};
  padding: 20px;
  position: relative;
`

export const TodoValuesContainer = styled.div`
  margin: 20px;
  
  display: flex;
  align-items: end;
`

export const ValueContainer = styled.div`
    &:nth-child(2) {
      margin-left: 30px;
    }
    
`


export const TodoValue = styled.p`
  margin-bottom: 10px;
`

export const TodoTextInput = styled.input`
  padding: 2px 0 2px 10px;
  outline: none;
  width: 200px;
`

export const AddTodoButton = styled.button`
  margin-left: 50px;

  cursor: pointer;
  padding: 5px 10px;
  border: none;
  background: #00ff2a;
  &:hover {
    transition: 0.2s;
    box-shadow: 0 2px 5px rgb(0,0,0, 0.2);
  }
`

export const CLoseModalButton = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 26px;
  cursor: pointer;
  color: gray;
  
  &:hover {
    color: black;
    transition: 0.2s;
  }
`