import styled from "styled-components";


interface TodoContainerProps {
    completed: boolean,
}
export const TodoContainer = styled.div<TodoContainerProps>`
  width: calc(100% - 40px);
  height: 80px;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${(props) => props.completed ? 'lightgreen' : 'none'};
  //cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  &:hover {
    transition: 0.2s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  }
`

export const TodoCheck = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TodoId = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center; 
  position: relative;
`
export const TodoUId = styled.p`
  font-size: 8px;
  color: gray;
  top: 30px;
  position: absolute;
`

export const TodoTextContainer = styled.div`
    width: 80%;
  //height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-left: 20px;
`

export const InputCheck = styled.input`
    cursor: pointer;
`

export const TodoTitle = styled.h3`
    
`

export const TodoText = styled.p`
    
`

export const TodoDeleteContainer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const DeleteButton = styled.span`
  font-size: 25px;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: rgb(255, 75, 75);
  }
`