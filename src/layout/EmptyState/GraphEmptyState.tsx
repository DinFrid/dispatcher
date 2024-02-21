import { FC } from "react";
import { GraphEmptyStateContainer, StyledMessage } from "./styles";
import GraphEmptyStateSVG from "./GraphEmptyStateSVG";

interface GraphEmptyStateProps {
    message : string;
};

const GraphEmptyState:FC<GraphEmptyStateProps> = ({message}) => {
    return (
        <GraphEmptyStateContainer>
            <GraphEmptyStateSVG />
            <StyledMessage style={{marginTop: '16px'}}>{message}</StyledMessage>
        </GraphEmptyStateContainer>
        );
};

export default GraphEmptyState;