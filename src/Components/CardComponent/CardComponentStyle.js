import styled from "styled-components";
import { Style } from "../../GlobalStyle";
import { Button } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsLinkedin, BsShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Card = styled.div`
  background-color: white;
  width: 575px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 35px;
  ${(props) =>
    props.header
      ? ` margin-top: -154px;
      margin-left: 44%;
      z-index:1;
      @media(max-width: 1135px){
        margin-left: 24%;
      };
      @media(max-width: 855px){
        width: 100%;
        margin-top: 0;
        margin-left: 0;
        border-radius: 0px;
      }
      `
      : null}
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
`;
export const DetailContainer = styled.span`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  color: ${Style.postTitle};
  font-size: ${Style.h3};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 855px) {
    flex-direction: column;
  }
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
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

export const Name = styled.span`
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

export const Date = styled.span`
  font-size: 10px;
  color: ${Style.fontColor};
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

export const CustomButton = styled(Button)`
  box-shadow: none !important;
  width: 150px;
  height: 50px !important;
  background-color: ${Style.buttonColor} !important;
  margin-right: -70px !important;
  padding: 10px 30px !important;
  line-height: 26px !important;
  border-radius: 500px !important;
  border: 1px solid ${Style.buttonColor};
  transition: 0.3s all ease !important;
  &:hover {
    background-color: #fff !important;
    color: ${Style.buttonColor} !important;
    border: 1px solid ${Style.buttonColor};
    transition: 0.3s all ease !important;
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
