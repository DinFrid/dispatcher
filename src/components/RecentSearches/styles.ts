import { Button, Card, Typography } from "@mui/material";
import styled from "styled-components";
import RemoveIcon from "../../images/RemoveIcon";

export const CustomRecentSearches = styled(Card)`
    display: flex;
    flex-direction: column;
    width: 424px;
    height: 132px;
    flex-shrink: 0;
    border-radius: 10px;
    background:  #FFF;
    box-shadow: 0px 4px 12px 0px #00000014;
    margin-top: 6px;
    position: absolute;
    z-index: 1000;

    ${({ theme }) => theme.breakpoints.up('sm')} {

    margin-top: 55px;
  }

    
`;

export const CustomTypography = styled(Typography)`
&&{
    color: #5A5A89;
    font-family: 'Roboto';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    height: 14.68px;
}
`;

export const StyledClearButton = styled(Button)`
  &&{
    color: #5A5A89;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Roboto';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; 
    padding: 15.5px,14px,0,0;
    display: flex;
    width: 41.669px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;


export const StyledRemoveIcon = styled(RemoveIcon)`
    flex-shrink: 0;
    fill-rule: rgba(90, 90, 137, 0.50);
`;


export const ItemsContainer = styled.div`
    overflow-y: auto;
    height: 85px;
`;

export const ItemWrapper = styled.div `
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: 4.31px;
`;
