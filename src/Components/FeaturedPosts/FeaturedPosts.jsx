import { Avatar, Grid } from "@mui/material";
import React, {useEffect} from "react";
import {
  Card,
  CustomContainer,
  CustomLink,
  Date,
  Detail,
  DetailContainer,
  FeaturedPostsContainer,
  HeadTitle,
  Image,
  ImgWrapper,
  Info,
  LeftSection,
  Name,
  ProductsCart,
  Title,
} from "./FeaturedPostsStyle";
import {useDispatch, useSelector} from "react-redux"

import {getFeatured, selectFeatured, selectUser} from "../../features/blog/blogSlice"

const FeaturedPosts = () => {
    const dispatch = useDispatch()
    const featured = useSelector(selectFeatured)
    const user = useSelector(selectUser)


    useEffect(() => {
        dispatch(getFeatured())
    }, [dispatch])
  return (
    <FeaturedPostsContainer>
      <CustomContainer maxWidth="xl">
        <HeadTitle>More Featured Posts.</HeadTitle>
        <ProductsCart>
          <Grid container spacing={2}>
            {featured.map(ele => (
              <Grid item xs={12} md={6} key={ele.id}>
              <Card>
                <LeftSection>
                  <Title>
                    <CustomLink to="#">
                      {ele.title}
                    </CustomLink>
                  </Title>
                  <Info>
                    <Detail>
                      <Avatar src={user[0]?.avatar} />
                      <DetailContainer>
                        <Name>{user[0]?.name}</Name>
                        <Date>January 24, 2021</Date>
                      </DetailContainer>
                    </Detail>
                  </Info>
                </LeftSection>
                <ImgWrapper>
                  <Image src={ele.bg} />
                </ImgWrapper>
              </Card>
            </Grid>
            ))}
          </Grid>
        </ProductsCart>
      </CustomContainer>
    </FeaturedPostsContainer>
  );
};

export default FeaturedPosts;
