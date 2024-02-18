import { LOCAL_STORAGE_RECENT_SEARCHES_KEY, MAX_RECENT_SEARCHES } from "../RecentSearches/consts";

export const checkIfRecentSearchesExceeds = (recentSearches : Array<string>) => {
    return recentSearches.length > MAX_RECENT_SEARCHES;
}

export const truncateRecentSearches = (recentSearches : Array<string>) => {
    recentSearches.length = MAX_RECENT_SEARCHES; 
}

export const removeDuplicatedValues = (value : string, currentSearches : Array<string>) => {
    return [value, ...currentSearches.filter((item: string) => item !== value)];
}

export const fetchRecentSearchesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_RECENT_SEARCHES_KEY) || '[]');
}

export const removeValueFromRecentSearchesArrayAndReturnUpdated = (valueToRemove : string, currentRecentSearches : Array<string>) => {
    return currentRecentSearches.filter((item: string) => item !== valueToRemove);
}

export const clearRecentSearchesFromLocalStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_RECENT_SEARCHES_KEY);
}

export const checkIfValueIsNotEmpty = (value : string) => {
    return value.trim().length === 0;
}