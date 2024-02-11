import { MenuItemTypeEnum } from '../../utils/Enums';
import SearchComponent from '../SearchComponent/SearchComponent';
import NavbarLogo from './NavbarLogo.svg';
import { StyledImage, StyledNavbar } from './styles';

const onRemoveClick = (value : string) => {
    console.log("Value removed: {}", value)
  };

  const onClearClick = () => {
    console.log("Clear button clicked!")
  };

const recentSearchesProps = {onRemove: onRemoveClick, onClear: onClearClick, options: [//TODO: pass 3 seperated props
    { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "crypto", children: "crypto" },
    { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "football", children: "football" },
    { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "soccer", children: "soccer" }
  ]};

const Navbar = () => {
  return (
    <StyledNavbar>
        <StyledImage src={NavbarLogo} alt="Navbar Logo" />
        <SearchComponent recentSearchesProps={recentSearchesProps}></SearchComponent>
    </StyledNavbar>
  )
}

export default Navbar