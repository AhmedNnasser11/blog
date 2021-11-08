import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Style } from "../../GlobalStyle";

export const FeaturedPostsContainer = styled.section`
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const CustomContainer = styled(Container)``;

export const HeadTitle = styled.h3`
  color: ${Style.postTitle};
  font-size: ${Style.h2};
  font-weight: 700;
  line-height: 1.23;
  margin-bottom: 37px;
  @media (max-width: 600px) {
    font-size: ${Style.rh2};
  }
`;
export const ProductsCart = styled.div`
  flex-shrink: 0.5;
`;

export const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  row-gap: 35px;
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
  transition: 0.3s all ease;
  border: 1px solid #ced0d4;
  &:hover {
    background-color: ${Style.bg};
    transition: 0.3s all ease;
  }
  @media (max-width: 557px) {
    flex-direction: column;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px !important;
`;
export const DetailContainer = styled.span`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  color: ${Style.postTitle};
  font-size: ${Style.h3};
  @media (max-width: 600px) {
    font-size: ${Style.rh3};
  }
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

export const ImgWrapper = styled.div`
  min-width: 250px;
  overflow: hidden;
  transition: 0.3s all ease;
  border-radius: 100%;

`;

export const Image = styled.img`
  border-radius: 100%;
  min-width: 250px;
  max-width: 250px;
  max-height: 250px;
  min-height: 250px;
  object-fit: cover;
  transition: 0.3s all ease;
  &:hover{
    transform: scale(1.1);
    transition: 0.3s all ease;
  }
`;
