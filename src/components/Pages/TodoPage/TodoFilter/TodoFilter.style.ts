import styled from "styled-components";

export const FilterContainer = styled.div`
    margin-left: 50px;
`

export const FilterSelect = styled.select `
  outline: none;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    box-shadow: 0 2px 5px rgb(0,0,0,0.5);
  }
`
