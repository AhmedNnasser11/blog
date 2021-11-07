import React from "react";
import {
  BottomBox,
  Category,
  Contact,
  CustomFacebook,
  CustomLink,
  CustomLinkedin,
  CustomShare,
  CustomTwiter,
  Date,
  Image,
  Info,
  Item,
  ItemInfo,
  LeftBox,
  Line,
  Name,
  RightBox,
  Title,
} from "./ListItemStyle";

const ListItem = ({title, image, user}) => {

  return (
      <>
    <Item>
      <ItemInfo>
      <LeftBox>
        <Category>Creative</Category>
        <Title>
            <CustomLink to="#">
            {title}
            </CustomLink>
            </Title>
        <BottomBox>
          <Info>
            <Name>{user}</Name>
            <Date>January 24, 2021 4 min read</Date>
          </Info>
          <Contact>
            <CustomFacebook />
            <CustomTwiter />
            <CustomLinkedin />
            <CustomShare />
        </Contact>
        </BottomBox>
        <Line></Line>
      </LeftBox>
      <RightBox>
          <Image src={image} />
      </RightBox>
        </ItemInfo>
    </Item>
    </>
  );
};

export default ListItem;
