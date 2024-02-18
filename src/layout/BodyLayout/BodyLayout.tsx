import React, { useEffect, useState } from "react";
import HeadlinesLayout from "../HeadlinesLayout/HeadlinesLayout";
import GraphsLayout from "../GraphsContainer/GraphsLayout";
import { BodyContainer, DataLayout, HeadlinesTitle, TopHeadlinesTitleStyles, totalResultsHeadline } from "./styles";
import { apiKeys, keyIndex } from "../../utils/APIkeys";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from 'axios';
import { HeadlineCardProps } from "../../components/HeadlineCard/HeadlineCard";
import { Article } from "./types";
import { useInView } from "react-intersection-observer";
import { defaultHeadlinesTitle, defaultPageSize } from "./consts";
import { formatDate } from "./functions";
import EmptyStateSVG from "../../images/emptyState";

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

    const fetchHeadlines = async ({ pageParam = 1 }) => {
        let pageSize = pageParam === 1 ? 10 : defaultPageSize;
        try {
            const url = `https://newsapi.org/v2/${searchScope}?q=${encodeURIComponent(searchInput)}&page=${pageParam}${filters}&pageSize=${pageSize}`;
            const response = await axios.get(url, {
                headers: { 'Authorization': `Bearer ${apiKeys[keyIndex]}` },
            });

            return response.data;
        } catch (error) {

            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data);
                throw new Error('Axios network response was not ok');
            } else {
                console.error('Unexpected error:', error);
                throw new Error('An unexpected error occurred');
            }
        }
    };

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
        queryFn: fetchHeadlines,
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