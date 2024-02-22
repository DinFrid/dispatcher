import styled from "styled-components";

export const HeadlinesContainer = styled.div `
    flex: 1;
    overflow-y: auto;
    margin-bottom: 24px;
    
    ${({ theme }) => theme.breakpoints.up('md')} {
        margin-right: 15px;
    }
`;

export const HeadlinesBody = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 24px;
    margin-right: 15px;
`;