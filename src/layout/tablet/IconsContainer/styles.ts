import { Avatar, Box } from "@mui/material";
import { styled } from "styled-components";

export const IconsWrapper = styled(Box) `
    

  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 20px;
  }
`;

export const StyledAvatar = styled(Avatar) `
    && {

  ${({ theme }) => theme.breakpoints.up('sm')} {
      background-color: #0058B9;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.25px;
      font-family: Roboto;
      height: 50px;
      width: 50px;

  }
}
`;