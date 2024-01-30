
import {StyledMenuItem} from './components/StyledMenuItem/StyledMenuItem';
import { StyledButton } from './components/StyledButton/StyledButton';
import {StyledDropdown} from './components/StyledDropdown/StyledDropdown';

function App() {
  const selectedOption : string = '';

  const styledButtonProps = {
    onClick: () => console.log('Button clicked'),
    variant: "contained" as "contained",
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
    
    <div>
      <StyledButton {...styledButtonProps}>
        Navigate to dispatch
      </StyledButton>
    </div>
    <div>
      <StyledDropdown selectedOption={selectedOption}label='Sources'>
        <StyledMenuItem value="1" >Mako</StyledMenuItem>
        <StyledMenuItem value="2" >Walla</StyledMenuItem>
        <StyledMenuItem value="3" >BBC</StyledMenuItem>
        <StyledMenuItem value="4" >Ynet</StyledMenuItem>
        <StyledMenuItem value="5" >Option 5</StyledMenuItem>
      </StyledDropdown>
    </div>
    </div>
  );
}

export default App;
