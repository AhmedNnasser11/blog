import styled from "styled-components"
import {Link} from "react-router-dom"
import {Style} from "../../../GlobalStyle"
export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    filter: opacity(.7);
    transition: .3s all ease;
    object-fit: cover;
    &:hover{
      transform: scale(1.2);
      transition: .3s all ease;
    }
`

export const MultiSliderItemContainer = styled.div`
    width: 95%;
    height: 455px;
    background-color: #FFF;
    border-radius: 10px;
    overflow: hidden;
    &:hover ${Image}{
      filter: opacity(1);
      transition: .3s all ease;
    }
`

export const HeadTitle = styled.h3`
    padding: 25px;
    padding-top: 10%;
    width: 100%;
    height: 150px;
    text-align: center;
`

export const CustomLink = styled(Link)`
    text-decoration: none;
    font-size: ${Style.h4};
    color: ${Style.postTitle};
    font-weight: 700;
    background: linear-gradient(90deg, black, black);
    background-size: 0% 3px;
    background-position: left bottom;
    background-repeat: no-repeat;
    transition: background-size 400ms;

  &:hover {
    background-size: 100% 3px;
  }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    margin-top: 50px;
    text-align: center !important;
`

