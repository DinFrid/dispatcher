import React, { useEffect, useState } from "react";
import HeadlinesLayout from "../HeadlinesLayout/HeadlinesLayout";
import GraphsLayout from "../GraphsContainer/GraphsLayout";
import { BodyContainer, DataLayout, HeadlinesTitle, TopHeadlinesTitleStyles, totalResultsHeadline } from "./styles";
import { useInfiniteQuery } from "@tanstack/react-query";
import { HeadlineCardProps } from "../../components/HeadlineCard/HeadlineCard";
import { Article } from "./types";
import { useInView } from "react-intersection-observer";
import { defaultHeadlinesTitle } from "./consts";
import { formatDate } from "./functions";
import { fetchHeadlines } from "../../API/api";
import { useMediaQuery, useTheme } from "@mui/material";

export interface BodyLayoutProps {
    filters : string;
    searchScope : string;
    searchInput : string;
    isInitState : boolean;
};

const BodyLayout:React.FC<BodyLayoutProps> = ({filters, searchScope, searchInput, isInitState}) => {
    const [headlinesTitle, setHeadlinesTitle] = useState(defaultHeadlinesTitle);
    const [titleStyles, setTitleStyles] = useState(TopHeadlinesTitleStyles);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [showEmptyState, setShowEmptyState] = useState(false);
    const [emptyStateMessage, setEmptyStateMessage] = useState('');
    const [initState, setInitState] = useState(true);
    const { ref, inView } = useInView();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const [isLoading,setIsLoading] = useState(false);


    useEffect(() => {
        setInitState(isInitState);
    },[isInitState])
    
    const {data, status, hasNextPage, fetchNextPage} = useInfiniteQuery({
        queryKey: ["headlines", {filters,searchScope, searchInput}],
        queryFn: ({ pageParam = 1 }) => fetchHeadlines({ pageParam, searchScope, searchInput, filters }),
        initialPageParam : 1,
        retry: false,
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, allPages) => {
            if(initState) {
                return undefined;
            }
            return lastPage.length < 0 ? undefined : allPages.length + 1;
            } 
    });


    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage]);

    useEffect(() => {
        if(initState) {
            return;
        }
        if ( data?.pages[0]?.totalResults !== undefined) {
            setTotalResults(data.pages[0].totalResults);
            setHeadlinesTitle(`${headlines.length} of ${data.pages[0].totalResults} results`);
            setTitleStyles(totalResultsHeadline);
        }

    }, [data, searchInput, searchScope]);

    const headlines = data?.pages.flatMap(page =>
        page.articles.map((article: Article) => ({
            ...article,
            urlToDispatch: article.url,
            publishedAt: formatDate(article.publishedAt),
            source: article.source.name
        }))
    ) as HeadlineCardProps[] ?? [];

    useEffect(() => {
        if(status === 'error' || (headlines.length === 0 && status !== 'pending')) {
            setShowEmptyState(true);
            setEmptyStateMessage('We couldn’t find any matches for your query');
            setHeadlinesTitle('');
            setIsLoading(false);
            return;
        }
        if(status === 'pending') {
            setIsLoading(true);
            // setHeadlinesTitle('');
        }
        else {
            setIsLoading(false);
            setShowEmptyState(false);
        }
    },[status, headlines])

    
    return (
        <BodyContainer theme={theme}>
            <HeadlinesTitle theme={theme} titlestyles={titleStyles}>{headlinesTitle}</HeadlinesTitle>
            <DataLayout theme={theme}>
                <HeadlinesLayout headlines={headlines} ref={ref} isEmptyState={showEmptyState} emptyStateMessage={emptyStateMessage} isLoading={isLoading}/>
                {isDesktop && <GraphsLayout 
                    headlines={headlines}
                    pieTitle='Sources' 
                    areaTitle='Dates'
                    isEmptyState={showEmptyState} 
                    isLoading= {isLoading}
                    />}
            </DataLayout>
        </BodyContainer>
    );
};

export default BodyLayout;