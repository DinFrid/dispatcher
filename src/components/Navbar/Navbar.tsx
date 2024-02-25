import { useMediaQuery, useTheme } from '@mui/material';
import SearchComponent from '../SearchComponent/SearchComponent';
import NavbarDesktopLogo from './NavbarDesktopLogo.svg';
import { IconsWrapper, ImageWrapper, StyledBox, StyledIconButton, StyledImage, StyledNavbar } from './styles';
import MobileSearchIcon from '../../layout/mobile/Icons/MobileSearchIcon';

export interface NavBarProps {
  onSearchAction : (value : string) => void;
  handleSearchDropdownChange : (value : string, label : string) => void;
};



const Navbar = ({onSearchAction, handleSearchDropdownChange} : NavBarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
      {isMobile && 
      <IconsWrapper>
        <StyledIconButton >
          <MobileSearchIcon/>
        </StyledIconButton>
      </IconsWrapper>
      }
    </StyledNavbar>
  )
}

export default Navbar