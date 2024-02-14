import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { apiKeys, keyIndex } from '../../utils/APIkeys';
import { HeadlineCardProps } from '../../components/HeadlineCard/HeadlineCard';
import { Article } from './types';
import { BodyLayoutProps } from './BodyLayout';
  

export const useFetchHeadlines = ({ searchScope, searchInput, filters } : BodyLayoutProps ) => {

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
    return data?.pages.flatMap(page => 
        page.articles.map((article: Article) => ({
          urlToImage: article.urlToImage,
          urlToDispatch: article.url,
          publishedAt: article.publishedAt,
          title: article.title,
          content: article.content,
          source: article.source.name
        }))
      ) as HeadlineCardProps[] ?? [];
    };