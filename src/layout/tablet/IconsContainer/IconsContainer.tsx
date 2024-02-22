import { Avatar, Box, useTheme } from "@mui/material";
import { FC } from "react";
import SettingsIcon from "./SettingsIcon";
import NotificationsIcon from "./NotificationsIcon";
import { IconsWrapper, StyledAvatar } from "./styles";

const IconsContainer :FC = () => {
    const theme = useTheme();

    return (
        <IconsWrapper theme={theme}>
            <SettingsIcon/>
            <NotificationsIcon/>
            <StyledAvatar theme={theme} >AG</StyledAvatar>
        </IconsWrapper>

    );
};

export default IconsContainer;