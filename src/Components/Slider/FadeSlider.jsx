import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CustomContainer, CustomSlider, SliderContainer } from "./SliderStyle";
import SlideItem from "./SlideItem/SlideItem";
import {ArrowForwardIos, ArrowBackIosNew} from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux";
import { getSlider, selectSlider } from "../../features/blog/blogSlice";

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

const FadeSlider = () => {
  const dispatch = useDispatch()
  const slider = useSelector(selectSlider);
  console.log(slider)
  useEffect(() => {
    dispatch(getSlider())
  }, [dispatch])
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <SliderContainer>
      <CustomContainer maxWidth="xl">
      <CustomSlider {...settings}>
        {slider.map(ele => (
          <SlideItem key={ele.id} bg={ele.bg} title={ele.title}/>
        ))}
      </CustomSlider>
      </CustomContainer>
    </SliderContainer>
  );
};

    export default FadeSlider;
