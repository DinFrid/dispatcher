import Button from '@mui/material/Button';
import { StyledButtonProps } from '../../Interfaces/Interfaces';
import styled from 'styled-components';
import RightArrowIcon from '../../images/RightArrow.svg'

const CustomStyledButton = styled(Button)`
  && {
    color: var(--Grayscale-White, #FFF);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; 
    letter-spacing: 0.25px;
    text-transform: uppercase;
    background-color: #0058B9; 
    border-radius: 20px; 
    padding: 5px 20px; 
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); 
    height: auto;
    white-space: nowrap; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 10px; 

    .MuiButton-endIcon {
      margin-left: 0px; 
    }
  }
`;

export const StyledButton: React.FC<StyledButtonProps> = (props) => {
  return <CustomStyledButton 
  endIcon={<img src={RightArrowIcon} alt="Right Arrow" />}
  {...props} />;
};
