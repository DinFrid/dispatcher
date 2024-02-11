import { ButtonProps } from '@mui/material/Button';
import RightArrowIcon from '../../images/RightArrow.svg'
import { CustomStyledButton } from './styles';



export const StyledButton: React.FC<ButtonProps> = (props) => {
  return <CustomStyledButton 
  endIcon={<img src={RightArrowIcon} alt="Right Arrow" />}
  variant='contained'
  {...props} />;
};
