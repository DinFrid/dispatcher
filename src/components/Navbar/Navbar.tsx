import { useTheme } from '@mui/material';
import SearchComponent from '../SearchComponent/SearchComponent';
import NavbarDesktopLogo from './NavbarDesktopLogo.svg';
import { ImageWrapper, StyledBox, StyledImage, StyledNavbar } from './styles';

export interface NavBarProps {
  onSearchAction : (value : string) => void;
  handleSearchDropdownChange : (value: string) => void;
};


const Navbar = ({onSearchAction, handleSearchDropdownChange} : NavBarProps) => {
  const theme = useTheme();

  return (
    <StyledNavbar theme={theme}>
      <StyledBox theme={theme}>
        <ImageWrapper theme={theme}>
          <StyledImage theme={theme} src={NavbarDesktopLogo} alt="Navbar Logo" />
        </ImageWrapper>
        <SearchComponent
          onSearchAction={onSearchAction}
          onDropdownChange={handleSearchDropdownChange}
        />
      </StyledBox>
      
    </StyledNavbar>
  )
}

export default Navbar