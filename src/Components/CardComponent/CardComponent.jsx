import React from "react";
import { Avatar } from "@mui/material";
import {
  Card,
  Contact,
  CustomButton,
  CustomFacebook,
  CustomLink,
  CustomLinkedin,
  CustomShare,
  CustomTwiter,
  Date,
  Detail,
  DetailContainer,
  Info,
  Name,
  Title,
} from "./CardComponentStyle";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/blog/blogSlice";

const CardComponent = ({header, title, id}) => {
  const user = useSelector(selectUser);
  return (
    <Card header={header}>
      <Title>
        <CustomLink to="#">
          {title}
        </CustomLink>
      </Title>
      <Info>
        <Detail>
          <Avatar src={user[0]?.avatar} />
          <DetailContainer>
            <Name>
              {user[0]?.name}
            </Name>
            <Date>January 24, 2021</Date>
          </DetailContainer>
        </Detail>
        <Contact>
            <CustomFacebook />
            <CustomTwiter />
            <CustomLinkedin />
            <CustomShare />
          <CustomButton variant="contained">Read Post</CustomButton>
        </Contact>
      </Info>
    </Card>
  );
};

export default CardComponent;
