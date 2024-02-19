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