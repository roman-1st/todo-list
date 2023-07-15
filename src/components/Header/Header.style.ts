import styled from "styled-components";
export const Header = styled.header`
  height: 50px;
  width: 100%;
  margin: 0;
  background: rgb(125,125,125);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const HeaderLinkContainer = styled.div`
    margin-left: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`
export const Link = styled.p`
  margin-left: 50px;
  
  
  a {
    text-decoration: none;
    color: rgb(245,254,242);
    
    &:hover {
      transition: 0.2s;
      text-decoration: underline;
    }
  }
  
`