import { useMediaQuery, useTheme } from '@mui/material';
import SearchComponent from '../SearchComponent/SearchComponent';
import NavbarDesktopLogo from './NavbarDesktopLogo.svg';
import { StyledBox, StyledImage, StyledNavbar } from './styles';
import IconsContainer from '../../layout/tablet/IconsContainer/IconsContainer';

export interface NavBarProps {
  onSearchAction : (value : string) => void;
  handleSearchDropdownChange : (value : string, label : string) => void;
};



const Navbar = ({onSearchAction, handleSearchDropdownChange} : NavBarProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <StyledNavbar theme={theme}>
      <StyledBox theme={theme}>
        <StyledImage theme={theme} src={NavbarDesktopLogo} alt="Navbar Logo" />
        <SearchComponent
          onSearchAction={onSearchAction}
          onDropdownChange={handleSearchDropdownChange}
        />
      </StyledBox>
      {!isDesktop && <IconsContainer/>}
    </StyledNavbar>
  )
}

export default Navbar