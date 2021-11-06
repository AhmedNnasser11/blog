import { Container } from "@mui/material"
import styled from "styled-components"
import { Style } from "../../GlobalStyle";

export const MostPopularContainer = styled.section`
width: 100%;
  background-color: #FFF;
  padding-top: 70px;
  padding-bottom: 70px;
`

export const CustomContainer = styled(Container)``

export const HeadTitle = styled.h3`
  color: ${Style.postTitle};
  font-size: ${Style.h2};
  font-weight: 700;
  line-height: 1.23;
  margin-bottom: 37px;
`;
