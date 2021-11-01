import { Link } from "react-router-dom";
import styled from "styled-components";
import { Style } from "../../../GlobalStyle";

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${Style.fontColor};
  font-size: ${Style.fontSizeLink};
  font-weight: 500;
  transition: .3s all ease;
  width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Item = styled.li`
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    &:hover ${CustomLink}{
        color: ${Style.buttonColor};
        transition: .3s all ease;
    }
`
