import { Search } from '@mui/icons-material'
import { InputBase, Typography } from '@mui/material';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const SearchIconWrapper = styled('div')`
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  `;

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


const SearchBar = () => {
  return (
    
  )
}

export default SearchBar