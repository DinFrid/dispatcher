import { FC } from "react";
import EmptyStateSVG from "./BodyEmptyStateSVG";
import { BodyEmptyStateContainer, StyledMessage } from "./styles";

interface BodyEmptyStateProps {
    message : string;
};

const BodyEmptyState:FC<BodyEmptyStateProps> = ({message}) => {
    return (
    <BodyEmptyStateContainer>
        <EmptyStateSVG />
        <StyledMessage >{message}</StyledMessage>
    </BodyEmptyStateContainer>
    );
};

export default BodyEmptyState;