import { useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import SettingsIcon from "./SettingsIcon";
import NotificationsIcon from "./NotificationsIcon";
import { IconsWrapper, StyledAvatar, StyledIconButton } from "./styles";
import MobileSearchIcon from "../../mobile/Icons/MobileSearchIcon";

const IconsContainer :FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.between('xs','sm'));

    return (
        <IconsWrapper theme={theme}>
            
            {isMobile && 
            <StyledIconButton>
                <MobileSearchIcon/>
            </StyledIconButton>}

            <StyledIconButton>
                <SettingsIcon/>
            </StyledIconButton>
            <StyledIconButton>
                <NotificationsIcon/>
            </StyledIconButton>
            <StyledAvatar theme={theme} >AG</StyledAvatar>

        </IconsWrapper>

    );
};

export default IconsContainer;