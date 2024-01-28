import { FormControl, Select } from '@mui/material';
import RightArrowIcon from './images/Arrow - Right.svg'
import {StyledMenuItem} from './components/StyledMenuItem/StyledMenuItem';
import { StyledButton } from './components/StyledButton/StyledButton';

function App() {

  const styledButtonProps = {
    onClick: () => console.log('Button clicked'),
    variant: "contained" as "contained",
    endIcon: <img src={RightArrowIcon} alt="Right Arrow" />
  };

  const dropdownProps = {
    styles: {
      marginTop:35,        
         width: 250,
         height: 50,
       }
  }

  return (
    <div>
    <FormControl fullWidth>
      <Select
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: "112px", 
            },
          },
        }}
      >
        <StyledMenuItem value="1">Option 1</StyledMenuItem>
        <StyledMenuItem value="2">Option 2</StyledMenuItem>
        <StyledMenuItem value="3">Option 3</StyledMenuItem>
        <StyledMenuItem value="4">Option 4</StyledMenuItem>
        <StyledMenuItem value="5">Option 5</StyledMenuItem>
      </Select>
    </FormControl>

    <div>
      <StyledButton {...styledButtonProps}>
        Navigate to dispatch
      </StyledButton>
    </div>
    </div>
  );
}

export default App;
