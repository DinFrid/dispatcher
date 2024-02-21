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
    const [emptyStateMessage, setEmptyStateMessage] = useState('We couldn’t find any matches for your query');
    const [initState, setInitState] = useState(true);
    const { ref, inView } = useInView();

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
            return allPages.length + 1;//TODO: handle 
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
            setHeadlinesTitle(`${data.pages[0].totalResults} Total results`);
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
            setHeadlinesTitle('');
        }
        else {
            setShowEmptyState(false);
        }
    },[status, headlines])


    return (
        <BodyContainer>
                    <HeadlinesTitle titlestyles={titleStyles}>{headlinesTitle}</HeadlinesTitle>
                    <DataLayout>
                        <HeadlinesLayout headlines={headlines} ref={ref} isEmptyState={showEmptyState} emptyStateMessage={emptyStateMessage}/>
                        <GraphsLayout 
                            headlines={headlines}
                            pieTitle='Sources' 
                            areaTitle='Dates'
                            isEmptyState={showEmptyState} />
                    </DataLayout>
        </BodyContainer>
    );
};

export default BodyLayout;