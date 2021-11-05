import styled from "styled-components"
import Slider from "react-slick";
import { Style } from "../../GlobalStyle";

export const MultiSliderContainer = styled.section`
.slick-prev::before,
  .slick-next::before {
    display: none;
  }
  &:hover .slick-prev,
  &:hover .slick-next  {
    opacity: 1;
    transition: 0.3s all ease;
  }

  .slick-prev,
  .slick-next {
    border: 1px solid ${Style.fontColor};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: ${Style.fontColor};
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease;
    opacity: 0;
    &:hover {
      transition: 0.3s all ease;
      background-color: white;
      border: 1px solid white;
      box-shadow: 0px 4px 10px rgba(37, 47, 63, 0.1);
    }
  }

`

export const CustomSlider = styled(Slider)`
   
`