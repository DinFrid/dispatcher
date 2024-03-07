import styled from "styled-components";

export const HeadlinesContainer = styled.div `
    flex: 1;
    height: 95%;
    margin-bottom: 24px;
    margin-right: 1%;
    overflow: scroll;


    ${({ theme }) => theme.breakpoints.between('xs','sm')} {
        /* max-height: 510px; */
    }

    ${({ theme }) => theme.breakpoints.up('sm')} {
        

    }
    
    ${({ theme }) => theme.breakpoints.up('md')} {
        margin-right: 15px;
        height: 90%;
    }


`;

export const HeadlinesBody = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 24px;
    margin-right: 15px;
    /* height: calc(100% - 30px); */
`;