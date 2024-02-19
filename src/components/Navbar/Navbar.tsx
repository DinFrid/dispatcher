import SearchComponent from '../SearchComponent/SearchComponent';
import NavbarLogo from './NavbarLogo.svg';
import { StyledImage, StyledNavbar } from './styles';

export interface NavBarProps {
  onSearchAction : (value : string) => void;
  handleSearchDropdownChange : (value : string, label : string) => void;
};

const Navbar = ({onSearchAction, handleSearchDropdownChange} : NavBarProps) => {
  return (
    <StyledNavbar>
        <StyledImage src={NavbarLogo} alt="Navbar Logo" />
        <SearchComponent
          onSearchAction={onSearchAction}
          onDropdownChange={handleSearchDropdownChange}
        />
    </StyledNavbar>
  )
}

export default Navbar