import { useEffect, useRef, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { RecentSearches } from '../RecentSearches/RecentSearches';
import useOutsideClick from './useOutsideClick';
import { searchBarDropDownProps } from '../../utils/consts/FiltersGroups';
import { LOCAL_STORAGE_RECENT_SEARCHES_KEY } from '../RecentSearches/consts';
import { checkIfRecentSearchesExceeds, checkIfValueIsNotEmpty, clearRecentSearchesFromLocalStorage, fetchRecentSearchesFromLocalStorage, removeDuplicatedValues, removeValueFromRecentSearchesArrayAndReturnUpdated, truncateRecentSearches } from './functions';
import { useMediaQuery, useTheme } from '@mui/material';
import { StyledBox } from './styles';
import { EMPTY_ARRAY } from './consts';

export interface SearchComponentProps {
    onSearchAction : (value : string) => void;
    onDropdownChange : (value : string, label : string) => void;
}

const SearchComponent = ({ onSearchAction, onDropdownChange} : SearchComponentProps) => {
    const [recentSearchesOpen, setRecentSearchesOpen] = useState(false);
    const recentSearchesRef = useRef(null);
    const [recentSearchesHistory, setRecentSearchesHistory] = useState(new Array<string>);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.between('xs','sm'));

    useEffect(() => {
        const currentRecentSearches = fetchRecentSearchesFromLocalStorage();
        updateAndInsertRecentSearchesToLocalStorage(currentRecentSearches);
    },[]);

    const updateAndInsertRecentSearchesToLocalStorage = (updatedRecentSearches : Array<string>) => {
        setRecentSearchesHistory(updatedRecentSearches);
        localStorage.setItem(LOCAL_STORAGE_RECENT_SEARCHES_KEY, JSON.stringify(updatedRecentSearches));
    }

    const handleSearchAction = (value : string) => {
        const currentRecentSearches = fetchRecentSearchesFromLocalStorage();
        const updatedRecentSearches = removeDuplicatedValues(value, currentRecentSearches);

        if(checkIfValueIsNotEmpty(value)) {
            setRecentSearchesOpen(false);
            onSearchAction(value);
            return;
        }

        if (checkIfRecentSearchesExceeds(updatedRecentSearches)) {
            truncateRecentSearches(updatedRecentSearches);
        }

        updateAndInsertRecentSearchesToLocalStorage(updatedRecentSearches);
        
        setRecentSearchesOpen(false);
        onSearchAction(value);
    }

    useOutsideClick(recentSearchesRef, () => {
        if (recentSearchesOpen) {
            setRecentSearchesOpen(false);
        }
    });

    const handleSearchInputFieldClick = () => {
        setRecentSearchesOpen(true); 
    };

    const handleRemoveButtonClicked = (value : string) => {
        const currentRecentSearches = fetchRecentSearchesFromLocalStorage();
        const updatedRecentSearches = removeValueFromRecentSearchesArrayAndReturnUpdated(value, currentRecentSearches);

        updateAndInsertRecentSearchesToLocalStorage(updatedRecentSearches);
    }

    const handleClearButtonClicked = () => {
        clearRecentSearchesFromLocalStorage();
        updateAndInsertRecentSearchesToLocalStorage(EMPTY_ARRAY);
    }
    
    return (
        <StyledBox theme={theme} ref={recentSearchesRef}>
            {!isMobile && 
            <SearchBar
                dropDownProps={searchBarDropDownProps}
                onSearchInputFieldClick={handleSearchInputFieldClick} 
                onSearchAction={handleSearchAction}
                onDropdownChange={onDropdownChange}
            />
            }
            
            {recentSearchesOpen && 
                <RecentSearches onClick={handleSearchAction}
                    onRemove={handleRemoveButtonClicked} 
                    onClear={handleClearButtonClicked} 
                    options={recentSearchesHistory}
                />
            }
        </StyledBox>
    );
};

export default SearchComponent;
