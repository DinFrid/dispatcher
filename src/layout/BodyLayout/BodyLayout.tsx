import React, { useState } from "react";
import HeadlinesLayout from "../HeadlinesLayout/HeadlinesLayout";
import GraphsLayout from "../GraphsContainer/GraphsLayout";
import { mockedAreaGraphData, mockedPieGraphData } from "../../mockData/MockGraphs";
import { BodyContainer, DataLayout, HeadlinesTitle } from "./styles";
import { apiKeys, keyIndex } from "../../utils/APIkeys";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from 'axios';
import { HeadlineCardProps } from "../../components/HeadlineCard/HeadlineCard";
import { Article } from "./types";

interface BodyLayoutProps {
    filters : Map<string, string>;
    searchScope : string;
    searchInput : string;
};


const BodyLayout:React.FC<BodyLayoutProps> = ({filters, searchScope, searchInput}) => {
    const [headlinesTitle, setHeadlinesTitle] = useState('Top Headlines in Israel');
    console.log(filters)


    const fetchHeadlines = async ({ pageParam = 1 }: { pageParam: number }) => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/${searchScope}?q=${searchInput}&page=${pageParam}`, {
            headers: {
              'Authorization': `Bearer ${apiKeys[keyIndex]}`, 
            },
          });
          console.log("Fetched Data! Page : ", pageParam);

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

    const {data, status, hasNextPage} = useInfiniteQuery({
        queryKey: ["headlines", {filters,searchScope, searchInput}],
        queryFn: fetchHeadlines,
        initialPageParam : 1,
        getNextPageParam: (lastPage, allPages) => {
             return lastPage.length === allPages.length ? undefined : lastPage.length;
            } 
    });

    if(status === 'error') {
        return <p>No Results</p>
    }

    const headlines = data?.pages.flatMap(page => 
        page.articles.map((article: Article) => ({
          urlToImage: article.urlToImage,
          urlToDispatch: article.url,
          publishedAt: article.publishedAt,
          title: article.title,
          content: article.content,
          source: article.source.name
        }))
      ) as HeadlineCardProps[] ?? [];

            

    return (
        <BodyContainer>
            <HeadlinesTitle>{headlinesTitle}</HeadlinesTitle>
            <DataLayout>
                <HeadlinesLayout headlines={headlines}/>
                <GraphsLayout 
                    pieData={mockedPieGraphData} pieTitle='Sources' pieLabel='sum'
                    areaData={mockedAreaGraphData} areaTitle='Dates'/>
            </DataLayout>
        </BodyContainer>
    );
};

export default BodyLayout;