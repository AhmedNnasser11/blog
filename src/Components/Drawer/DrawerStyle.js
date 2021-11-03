import { Link } from "react-router-dom";
import styled from "styled-components";
import { Style } from "../../GlobalStyle";

export const NavDrawer = styled.nav`
background-color: #FFF;
z-index: 5;
width: 320px;
position: absolute;
overflow-y: auto;
top: 100%;
left: 0;
box-shadow: 0px 4px 10px rgba(37,47,63,0.1);
transition: .3s all ease;
${props => props.openMenu ? (
   `transform: translateX(0);`
): `transform: translateX(-100vw);`}
@media (min-width: 900px){
    display: none;
  }
`

export const LinkContainer = styled.span`
width: 100%;
height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DrawerUl = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Style.fontColor};
    width: 100%;
    height: 60px;
    font-weight: 600;
    display: flex;
    align-items: center;
    &:hover{
        color: ${Style.buttonColor};
        transition: .3s color ease;
    }
`
export const DrawerLi = styled.li`
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid #f0f2f5;
    transition: .3s color ease;
    cursor: pointer;
    &:last-of-type{
        border-bottom: 1px solid #f0f2f5;
    }
`
export const DrawerLiItem = styled(DrawerLi)`
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 20px;
        padding-right: 20px;
        height: 60px;
      &:last-of-type{
        border-bottom: 0;
    }
`
export const DrawerDrop = styled(DrawerUl)`
    width: 100%;
    height: 100%;
    ${props => props.subMenu ? (
        `display: flex;`
    ): `display: none;`}
`