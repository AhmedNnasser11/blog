import React from "react";
import CardComponent from "../../CardComponent/CardComponent";
import {
  Image,
  ItemContainer
} from "./SlideItemStyle";

const SlideItem = ({bg, title, key}) => {
  return (
    <>
      <ItemContainer>
        <Image src={bg} />
        <CardComponent header title={title} id={key}/>
      </ItemContainer>
    </>
  );
};

export default SlideItem;
