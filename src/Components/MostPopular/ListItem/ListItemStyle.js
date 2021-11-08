import styled from "styled-components";
import { Style } from "../../../GlobalStyle";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsLinkedin, BsShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transform: scale(0);
  transition: .3s all ease;
  @media (max-width: 755px) {
    transform: scale(1);

  }
`;

export const Line = styled.div`
  height: 2px;
  width: 0;
  left: 0;
  background-color: #0090E1;
  transition: .3s all ease;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  counter-increment: item;
  column-gap: 30px;
  &:before {
    content: "0" counter(item);
    color: #000;
    align-self: flex-start;
    padding-top: 7%;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    font-weight: 500;
    display: flex;
  }
    &:hover ${Image}{
    transform: scale(1);
    transition: .3s all ease;
  }
  &:hover ${Line}{
    width: 100%;
    transition: .3s all ease;
  }
 
  @media (max-width: 755px) {
    padding-bottom: 20px;
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 30px;
  @media (max-width: 755px) {
    row-gap: 30px;
    flex-direction: column;
  }
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
`;

export const Category = styled.h5`
  color: #d93e40;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const Title = styled.h3`
  color: ${Style.postTitle};
  font-size: ${Style.h3};
  @media (max-width: 600px) {
    font-size: ${Style.rh3};
  }
`;

export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div``;

export const Name = styled.p`
  text-transform: capitalize;
  font-size: ${Style.h6};
  line-height: 1.25;
  transition: 0.3s all ease;
  font-weight: 500;
  &:hover {
    color: ${Style.buttonColor};
    transition: 0.3s all ease;
  }
`;

export const Date = styled.p`
  font-size: 10px;
  color: ${Style.fontColor};
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  .icons {
    display: flex;
    column-gap: 10px;
  }
`;
export const RightBox = styled.div`
  width: 410px;
  height: 280px;
  border-radius: 10px;
 margin-left: auto;
 @media (max-width: 755px) {
  width: 100%;
  height: 100%;
  }
`;


export const CustomFacebook = styled(FaFacebookF)`
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s all ease;
  &:hover {
    color: ${Style.buttonColor};
    transition: 0.3s all ease;
  }
`;

export const CustomTwiter = styled(BsTwitter)`
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s all ease;
  &:hover {
    color: ${Style.buttonColor};
    transition: 0.3s all ease;
  }
`;

export const CustomLinkedin = styled(BsLinkedin)`
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s all ease;
  &:hover {
    color: ${Style.buttonColor};
    transition: 0.3s all ease;
  }
`;

export const CustomShare = styled(BsShareFill)`
  font-size: 14px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.3s all ease;
  &:hover {
    color: ${Style.buttonColor};
    transition: 0.3s all ease;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #000;
  background: linear-gradient(90deg, black, black);
  background-size: 0% 3px;
  background-position: left bottom;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover {
    background-size: 100% 3px;
  }
`;