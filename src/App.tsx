
import {StyledMenuItem} from './components/StyledMenuItem/StyledMenuItem';
import { StyledButton } from './components/StyledButton/StyledButton';
import {StyledDropdown} from './components/StyledDropdown/StyledDropdown';
import { RecentSearches } from './components/RecentSearches/RecentSearches';
import { StyledFiltersMenuItem } from './components/StyledDropdown/StyledFiltersMenuItem';
import { StyledRecentSearchesMenuItem } from './components/RecentSearches/StyledRecentSearchesMenuItem';
import { DateTimePicker, DateTimePickerTabs } from '@mui/x-date-pickers';

function App() {

  const styledButtonProps = {
    onClick: () => console.log('Navigate Button clicked'),
    variant: "contained" as "contained",
  };

  const onRemoveClick = (value : string) => {
    console.log("Value removed: {}", value)
  }

  return (
    <div>
    
    <div>
      <StyledButton {...styledButtonProps}>
        Navigate to dispatch
      </StyledButton>
    </div>
    <div>
      <StyledDropdown label='Sources'>
        <StyledMenuItem StyledComponent={StyledFiltersMenuItem} value="1" >Mako</StyledMenuItem>
        <StyledMenuItem StyledComponent={StyledFiltersMenuItem} value="2" >Walla</StyledMenuItem>
        <StyledMenuItem StyledComponent={StyledFiltersMenuItem} value="3" >BBC</StyledMenuItem>
        <StyledMenuItem StyledComponent={StyledFiltersMenuItem} value="4" >Ynet</StyledMenuItem>
        <StyledMenuItem StyledComponent={StyledFiltersMenuItem} value="5" >Option 5</StyledMenuItem>
      </StyledDropdown>
    </div>
    <div>
    <RecentSearches onRemove={onRemoveClick} options={[
      { StyledComponent: StyledRecentSearchesMenuItem, value: "option1", children: "crypto" },
      { StyledComponent: StyledRecentSearchesMenuItem, value: "option2", children: "soccer" },
      { StyledComponent: StyledRecentSearchesMenuItem, value: "option3", children: "soccer" }
    ]}>
    </RecentSearches>
    </div>
    </div>
  );
}

export default App;
