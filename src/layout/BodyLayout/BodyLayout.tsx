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
import EmptyStateSVG from "../../images/emptyState";
import { fetchHeadlines } from "../../API/api";

export interface BodyLayoutProps {
    filters : string;
    searchScope : string;
    searchInput : string;
};

const BodyLayout:React.FC<BodyLayoutProps> = ({filters, searchScope, searchInput}) => {
    const [headlinesTitle, setHeadlinesTitle] = useState(defaultHeadlinesTitle);
    const [titleStyles, setTitleStyles] = useState(TopHeadlinesTitleStyles);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [showEmptyState, setShowEmptyState] = useState(false);
    const [emptyStateMessage, setEmptyStateMessage] = useState('');
    const { ref, inView } = useInView();

    useEffect(() => {
        const trimmedInput = searchInput.trim();
        if (!trimmedInput) {
            setShowEmptyState(true);
            setEmptyStateMessage('Please enter search words.');
        } else {
            setShowEmptyState(false);
        }
    }, [searchInput]);

    const {data, status, hasNextPage, fetchNextPage} = useInfiniteQuery({
        queryKey: ["headlines", {filters,searchScope, searchInput}],
        queryFn: ({ pageParam = 1 }) => fetchHeadlines({ pageParam, searchScope, searchInput, filters }),
        initialPageParam : 1,
        getNextPageParam: (lastPage, allPages) => {
            if(headlinesTitle === defaultHeadlinesTitle)
                return undefined;

            return allPages.length + 1;//TODO: handle 
            } 
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage]);

    useEffect(() => {
        if (data?.pages[0]?.totalResults !== undefined) {
            setTotalResults(data.pages[0].totalResults);
            if (searchInput !== 'israel' || searchScope !== 'Top-Headlines') {
                setHeadlinesTitle(`${data.pages[0].totalResults} Total results`);
                setTitleStyles(totalResultsHeadline);
            }
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


    return (
        <BodyContainer>
            {showEmptyState ? (
                <>
                    <EmptyStateSVG />
                    <p>{emptyStateMessage}</p>
                </>
            ) : (
                <>
                    <HeadlinesTitle titlestyles={titleStyles}>{headlinesTitle}</HeadlinesTitle>
                    <DataLayout>
                        <HeadlinesLayout headlines={headlines} ref={ref} />
                        <GraphsLayout 
                            headlines={headlines}
                            pieTitle='Sources' 
                            areaTitle='Dates'
                            showEmptyGraphs={headlines.length === 0 || !searchInput.trim()} />
                    </DataLayout>
                </>
            )}
        </BodyContainer>
    );
};

export default BodyLayout;