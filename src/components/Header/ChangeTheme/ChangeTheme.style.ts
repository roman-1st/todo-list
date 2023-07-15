import styled from "styled-components";

export const ChangeThemeContainer = styled.div `
  width: 150px;
  height: 25px;
  margin-left: 100px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface ButtonProps {
    value: string,
    isActive: boolean,
}
export const Button = styled.button<ButtonProps>`
  pointer-events: ${(props) => !props.isActive ? "auto" : "none" };
  background: ${(props) => props.value === "DARK" ? "#3b3b3b" : "#e7e7e7" };
  color: ${(props) => props.value === "DARK" ? "#f3f3f3" : "black" };
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  
  &:hover {
    transition: 0.2s;
    background: ${(props) => props.value === "DARK" ? "#171717" : "#f3f3f3" };
    color: ${(props) => props.value === "DARK" ? "#f3f3f3" : "black" };
  }
  
`