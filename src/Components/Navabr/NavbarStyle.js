import { Link } from "react-router-dom";
import styled from "styled-components";
import { ShoppingCartOutlined, Search, Menu, Close } from "@mui/icons-material";
import { Container } from "@mui/material";
import { IconButton } from "@mui/material";
import {Style} from "../../GlobalStyle"

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(37, 47, 63, 0.1);
`;



export const CustomContainer = styled(Container)`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
`;
export const Logo = styled.span`
    color: #000;
    font-size: ${Style.h4};
    font-weight: 600;
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: .5;
  height: 100%;
  @media (max-width: 900px){
    display: none;
  }
`;
export const DropDownContainer = styled.ul`
    list-style: none;
    position: absolute;
    background-color: #FFF;
    width: 240px;
    height: auto;
    top: 100%;
    left: 0;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 4px 10px rgba(37, 47, 63, 0.1);
    visibility: hidden;
    opacity: 0;
    transition: .3s all ease-in;
    z-index: 1;
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${Style.fontColor};
  font-size: ${Style.fontSizeLink};
  font-weight: 400;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LinksName = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ${DropDownContainer}{
    visibility: visible;
    opacity: 1;
    transition: .3s all ease-in;
  }
  &:after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 4px;
    background: ${Style.buttonColor};
    left: 0;
    border-radius: 10px 10px 0 0;
    transition: .3s width ease-in;
  }
  &:hover:after{
      width: 100%;
      transition: .3s width ease-in;
    }
    &:hover ${CustomLink}{
      transition: .3s color ease-in;
      color: ${Style.buttonColor}
    }
`;


export const SearchAndCart = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 244px;
  height: 35px;
  border-radius: 44px;
  background-color: ${Style.bg};
  overflow: hidden;
  transition: .3s all ease;
  @media (max-width: 500px){
      width: 140px !important;
  }
  ${props => props.focus ? (
    `border: 1px solid ${Style.buttonColor}`
  ): `border: 1px solid ${Style.bg}`}
  `;
export const CustomInput = styled.input`
    border: 0;
    outline: none;
    background-color: ${Style.bg};
    width: 100%;
    height: 100%;
 
`;
export const CustomCart = styled(ShoppingCartOutlined)`
  font-weight: 400 !important;
`;
export const CustomMenu = styled(Menu)`

`
export const CustomClose = styled(Close)`

`
export const CustomIconButton = styled(IconButton)`
    background-color: ${Style.bg} !important;
    padding: 9px !important;
    transition: .3s all ease;
    &:hover{
        background-color: ${Style.buttonColor} !important;
        transition: .3s all ease;
        ${CustomCart}{
            color: #FFF;
            transition: .3s all ease;
        }
        &:hover ${CustomMenu}{
          color: #FFF;
          transition: .3s all ease;
        }
        &:hover ${CustomClose}{
          color: #FFF;
          transition: .3s all ease;
        }
    }
`
export const CustomIconMenuButton = styled(CustomIconButton)`
 @media (min-width: 900px){
    display: none !important;
  }
`


export const CustomSearch = styled(Search)`
    color: ${Style.fontColor};
    font-size: 16px;
    font-weight: 300;
    margin-left: 17px;
`;

