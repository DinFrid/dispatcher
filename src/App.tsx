
import {StyledMenuItem} from './components/StyledMenuItem/StyledMenuItem';
import { StyledButton } from './components/StyledButton/StyledButton';
import {StyledDropdown} from './components/StyledDropdown/StyledDropdown';
import { RecentSearches } from './components/RecentSearches/RecentSearches';
import { StyledFiltersMenuItem } from './components/StyledDropdown/StyledFiltersMenuItem';
import { StyledRecentSearchesMenuItem } from './components/RecentSearches/StyledRecentSearchesMenuItem';
import SearchBar from './components/SearchBar/SearchBar';
import DateComponent from './components/DateComponent/DateComponent';


function App() {

  const styledButtonProps = {
    onClick: () => console.log('Navigate Button clicked'),
    variant: "contained" as "contained",
  };

  const onRemoveClick = (value : string) => {
    console.log("Value removed: {}", value)
  };


  const searchMenuOptions = [{value: "1", StyledComponent: StyledFiltersMenuItem, children: "Everything" },
  {value: "2", StyledComponent: StyledFiltersMenuItem, children: "Top Headlines" }];

  return (
    <div>
    
    <div>
      <StyledButton {...styledButtonProps}>
        Navigate to dispatch
      </StyledButton>
    </div>
    <div>
      <StyledDropdown label='Sources' type={"filtersDropdown"}>
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
    <div>
      <SearchBar type={"type2"} dropDownOptions={searchMenuOptions}>
        
      </SearchBar>
    </div>  
    <div>
      <DateComponent/>
    </div>
    </div>
  );
}

export default App;
