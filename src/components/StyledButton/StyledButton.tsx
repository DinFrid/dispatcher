import { ButtonProps } from '@mui/material/Button';
import MobileRightArrow from '../../layout/mobile/Icons/MobileRightArrow.svg'
import RightArrowIcon from '../../images/RightArrow.svg'
import { CustomStyledButton, StyledImg } from './styles';
import { useMediaQuery, useTheme } from '@mui/material';


export const StyledButton: React.FC<ButtonProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return <CustomStyledButton theme={theme} 
  endIcon={<StyledImg theme={theme} src={isMobile ? MobileRightArrow : RightArrowIcon} alt="Right Arrow" />}
  variant='contained'
  {...props} />;
};
