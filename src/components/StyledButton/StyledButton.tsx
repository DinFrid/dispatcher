import Button, { ButtonProps } from '@mui/material/Button';
import styled from 'styled-components';
import RightArrowIcon from '../../images/RightArrow.svg'

const CustomStyledButton = styled(Button)`
  && {
    color: '#FFF';
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 26px; 
    background-color: #0058B9; 
    border-radius: 20px; 
    padding: 5px 20px; 
    white-space: nowrap; 
    box-shadow: none;

    &:hover {
      box-shadow: none; 
    }

    &:active {
      box-shadow: none; 
    }
  }
`;

export const StyledButton: React.FC<ButtonProps> = (props) => {
  return <CustomStyledButton 
  endIcon={<img src={RightArrowIcon} alt="Right Arrow" />}
  variant='contained'
  {...props} />;
};
