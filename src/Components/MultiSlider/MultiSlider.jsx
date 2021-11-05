import React from "react";
import MultiSliderItem from "./MultiSliderItem/MultiSliderItem";
import { MultiSliderContainer, CustomSlider } from "./MultiSliderStyle";
import {ArrowForwardIos, ArrowBackIosNew} from "@mui/icons-material"

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos fontSize="small" />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosNew fontSize="small" />
    </div>
  );
};

const MultiSlider = ({data}) => {
  const settings = {
    dots: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      initialSlide: 0,
      autoplay: true,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <MultiSliderContainer>
      <CustomSlider {...settings}>
        {data.map(ele => (
        <MultiSliderItem key={ele.id} title={ele.title}  image={ele.bg} />
        ))}
      </CustomSlider>
    </MultiSliderContainer>
  );
};

export default MultiSlider;
