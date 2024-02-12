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
    { value: "crypto", label: "crypto" },
    { value: "football", label: "football" },
    { value: "soccer", label: "soccer" }
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