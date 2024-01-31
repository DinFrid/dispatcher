import { FormControl, InputLabel, Select } from '@mui/material';
import { StyledDropdownProps } from '../../Interfaces/Interfaces';
import DropdownArrow from '../../images/dropdown.svg';
import styled from 'styled-components';


const CustomStyledSelect = styled(Select)`
  &&& {
    padding: 8px 16px;
    border-radius: 10px;
    background-color: #FFF;
    color: #5A5A89;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.25px;

    display: flex;
    width: 189px;
    justify-content: space-between;
    align-items: center;

    height: 47px; 
    padding: 15px;
    gap: 14px;

    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);

     &:focus {
      border-color: #FFF;
      background-color: #FFF;
    }

  .MuiSelect-icon {
    color: #000; 
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
      padding-right: 24px;
    }

  }


`;

const DropdownIcon = () => (
  <img src={DropdownArrow} alt="Dropdown Arrow" />
);

export const StyledDropdown: React.FC<StyledDropdownProps> = ({styles, label,onChange, ...props }) => {

  return (
    <FormControl>
      <InputLabel shrink={false}>{label}</InputLabel>
      
      <CustomStyledSelect 
        IconComponent={DropdownIcon} 
        MenuProps={{
          PaperProps: {
            style: {
              marginTop: '6px',
              minWidth: '189px', 
              marginLeft: '0px',
              height: '120px',  
            },
            sx: {
              '::-webkit-scrollbar': {
                width: '3px',
              },
              '::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: '6px',
              },
            }
          },
        }}
        {...props}
      >
      </CustomStyledSelect>
    </FormControl>
  );
};

export default StyledDropdown;
