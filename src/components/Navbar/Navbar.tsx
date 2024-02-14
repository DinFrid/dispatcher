import { mockedRecentSearchesOptions } from '../../utils/consts/ConstsMenuItems';
import SearchComponent from '../SearchComponent/SearchComponent';
import NavbarLogo from './NavbarLogo.svg';
import { StyledImage, StyledNavbar } from './styles';

const onRemoveClick = (value : string) => {
    console.log("Value removed: {}", value)
};

const onClearClick = () => {
  console.log("Clear button clicked!")
};



export interface NavBarProps {
  onSearchAction : (value : string) => void;
  handleSearchDropdownChange : (value : string, label : string) => void;
};

const Navbar = ({onSearchAction, handleSearchDropdownChange} : NavBarProps) => {
  return (
    <StyledNavbar>
        <StyledImage src={NavbarLogo} alt="Navbar Logo" />
        <SearchComponent
          onRemove={onRemoveClick} 
          onClear={onClearClick} 
          recentSearches={mockedRecentSearchesOptions} 
          onSearchAction={onSearchAction}
          onDropdownChange={handleSearchDropdownChange}
        />
    </StyledNavbar>
  )
}

export default Navbar