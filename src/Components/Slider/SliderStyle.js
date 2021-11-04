import styled from "styled-components";
import { Container } from "@mui/material";
import Slider from "react-slick";
import { Style } from "../../GlobalStyle";

export const SliderContainer = styled.div`
  width: 100%;
  height: auto;
  z-index: 0 !important;
  background-color: ${Style.bg};
  padding-bottom: 20px;
  @media (max-width: 855px) {
    height: 90%;
  }
`;

export const CustomContainer = styled(Container)`
  z-index: 0;
`;

export const CustomSlider = styled(Slider)`
  width: 100%;
  height: auto;
  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
  .slick-prev,
  .slick-next {
    border: 1px solid ${Style.fontColor};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: ${Style.fontColor};
    z-index: 3;
    top: 90% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease;
    &:hover {
      transition: 0.3s all ease;
      background-color: white;
      border: 1px solid white;
      box-shadow: 0px 4px 10px rgba(37, 47, 63, 0.1);
    }
    @media (max-width: 855px) {
      top: 105% !important;
    }
  }
  .slick-prev {
    left: 10% !important;
    @media (max-width: 1135px) {
      left: 5% !important;
    }
    @media (max-width: 711px) {
      left: 0 !important;
    }
  }
  .slick-next {
    right: 80% !important;
    @media (max-width: 530px) {
      right: 70% !important;
    }
  }
`;
