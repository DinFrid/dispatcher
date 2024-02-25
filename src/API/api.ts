import { DEFAULT_PAGE_SIZE } from "../layout/BodyLayout/consts";
import axios from 'axios';
import { apiKeys, keyIndex } from "../utils/APIkeys";

export interface FetchHeadlinesParams {
    pageParam: number;
    searchScope: string;
    searchInput: string;
    filters: string;
  }

export const fetchHeadlines = async ({ pageParam = 1 , searchScope, searchInput, filters} : FetchHeadlinesParams) => {
    let pageSize = pageParam === 1 ? 10 : DEFAULT_PAGE_SIZE;
        const url = `https://newsapi.org/v2/${searchScope}?q=${encodeURIComponent(searchInput)}&page=${pageParam}${filters}&pageSize=${pageSize}`;
        console.log("Fetched Data!  url requested:",url);
        const response = await axios.get(url, {
            headers: { 'Authorization': `Bearer ${apiKeys[keyIndex]}` },
        });
        
        return response.data;
};