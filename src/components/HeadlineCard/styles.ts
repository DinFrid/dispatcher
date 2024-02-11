import { Card, CardContent } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  display: flex;
  width: 986px;
  height: 242px;
  border-radius: 20px !important; 
  box-shadow: 0px 32px 64px 0px #0000000D;

`;

export const StyledCardContent = styled(CardContent)`
 padding: 16px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewsImage = styled.img`
    width: 244px;
    height: 242px;
`;