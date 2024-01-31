import { MenuItem } from "@mui/material";
import styled from "styled-components";

export const StyledFiltersMenuItem = styled(MenuItem)`
&&& {
  background-color: #FFF;
  font-family: 'Mulish';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  flex-shrink: 0;
  letter-spacing: 0.1px;
  color: #5A5A89;
  height: 28px;
  width: 189px;
  padding-left: 23.94;

  &:hover {
      background-color: rgba(223, 224, 235, 0.41);
    }

    &.Mui-selected {
      background-color: rgba(223, 224, 235, 0.41); 
    }
}
`;