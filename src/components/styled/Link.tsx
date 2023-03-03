import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: white;
  font-weight: 400;
  font-size: 18px;
  background-color: rgb(77 124 15);
  padding: 10px;
  border: 2px solid white;
  border-radius: 10px;
  :hover{
    background-color: rgb(38, 61, 8);
  }
`;
