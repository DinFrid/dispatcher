import { FC } from "react";
import EmptyStateSVG from "./BodyEmptyStateSVG";
import { BodyEmptyStateContainer, StyledMessage } from "./styles";
import { useTheme } from "@mui/material";


interface BodyEmptyStateProps {
    message : string;
};

const BodyEmptyState:FC<BodyEmptyStateProps> = ({message}) => {
    const theme = useTheme();

    return (
    <BodyEmptyStateContainer theme={theme}>
        <EmptyStateSVG />
        <StyledMessage >{message}</StyledMessage>
    </BodyEmptyStateContainer>
    );
};

export default BodyEmptyState;