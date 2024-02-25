import { Avatar, Box, IconButton } from "@mui/material";
import { styled } from "styled-components";

export const IconsWrapper = styled(Box) `
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 16px;

  ${({ theme }) => theme.breakpoints.up('sm')} {

    margin-right: 20px;
  }
`;

export const StyledIconButton = styled(IconButton) `
  && {
    padding: 0;
  }
`;

export const StyledAvatar = styled(Avatar) `
    && {
      background-color: #0058B9;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.25px;
      font-family: Roboto;
      height: 35px;
      width: 35px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
      height: 50px;
      width: 50px;

  }
}
`;