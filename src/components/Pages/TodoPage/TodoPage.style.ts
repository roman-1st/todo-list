import styled from "styled-components";
import {DARK} from "@/src/data/constans/theme";

interface TodoPageContainerProps {
    theme: string,
}
export const TodoPageContainer = styled.div<TodoPageContainerProps> `
  margin: 20px 40px;
  padding: 20px;
  background: rgb(66, 66, 66);
  background: ${(props) => props.theme === DARK ? "rgb(66, 66, 66)" : "rgb(245,245,245)"};
  color: ${(props) => props.theme === DARK ? "white !important" : "black !important"};
  box-shadow: 0 5px 15px rgb(0, 0, 0, 0.5);
`

export const TodoPageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 10px;
`
export const TodoPageTitle = styled.h1`
  
`
export const TodoList = styled.div`
    
`