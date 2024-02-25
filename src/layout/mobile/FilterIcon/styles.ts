import { Drawer, ListItemButton, ListItemText } from "@mui/material";
import styled from "styled-components";

export const StyledDrawer = styled(Drawer) `
&&{
   
    flex-shrink: 0;
    gap: 120px;

          &.MuiDrawer-paper {
            width: '50vw';
            box-sizing: 'border-box';
          }
    }
    .MuiDrawer-paperAnchorDockedRight{
        width: 70vw;
    }
`;
export const StyledText = styled(ListItemText)<{isnone : string}> `
    &&{
        font-family: 'Roboto';
        font-size: 12px;
        font-style: ${({isnone}) => isnone === 'true' ? 'italic' : 'normal'};
        color: #5A5A89;  
        //border-bottom: 1px solid #D9DBE9;
    }
`;

export const StyledButton = styled(ListItemButton) `
    &&{
        margin-bottom: 10px;
    }
`;