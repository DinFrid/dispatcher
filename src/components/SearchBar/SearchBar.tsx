
import { Card, InputBase } from '@mui/material';
import styled from 'styled-components';
import SearchImg from '../../images/SearchIcon.svg';
import StyledDropdown from '../StyledDropdown/StyledDropdown';
import { StyledMenuItemProps } from '../StyledMenuItem/StyledMenuItem';

interface SearchBarProps {
    dropDownOptions : StyledMenuItemProps[];
    type: string;
    dropDownLabel ?: string;
  }



const SearchIconWrapper = styled('div')`
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 32px; 
`;


  const SearchBarCard = styled(Card)`
  &&& {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    width: 663px;
    height: 50px;
    border-radius: 10px;
    padding: 0 16px; // Add some padding on the sides
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; // Adjusted for softer shadow
  }
`;


const StyledInputBase = styled(InputBase)`
color: inherit;
flex-grow: 1; // Allow the input to take up available space

.MuiInputBase-input {
  width: calc(100% - 48px); // Full width minus icon width
  padding-left: 48px; // Padding for the icon
}
`;

const SearchBar = ({dropDownOptions,dropDownLabel,type, ...props} : SearchBarProps) => {

  return (
    <SearchBarCard>
      <SearchIconWrapper>
      <img src={SearchImg} alt="Search Icon" />
      </SearchIconWrapper>
      <StyledInputBase placeholder='Search' />
      <StyledDropdown label={dropDownLabel} type={type}>
        {dropDownOptions.map((option) => (
          <option.StyledComponent key={option.value} value={option.value}>
            {option.children}
          </option.StyledComponent>
        ))}
      </StyledDropdown>
    </SearchBarCard>
  );
}

export default SearchBar