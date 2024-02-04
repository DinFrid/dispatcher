
import {StyledMenuItem} from './components/StyledMenuItem/StyledMenuItem';
import { StyledButton } from './components/StyledButton/StyledButton';
import {StyledDropdown} from './components/StyledDropdown/StyledDropdown';
import { RecentSearches } from './components/RecentSearches/RecentSearches';
import SearchBar from './components/SearchBar/SearchBar';
import { DropdownTypeEnum, MenuItemTypeEnum } from './utils/Enums';
import HeadlineCard from './components/HeadlineCard/HeadlineCard';

function App() {

  const headlineProps = {
    imageUrl: 'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2021/07/uriah-hall-sean-strickland-ufc-on-espn-28-official-weigh-ins-5.jpg?w=1000&h=600&crop=1',
    date: 'Friday Jun 25, 2021',
    headline: 'Turkey: Foreign tourists evacuated as wildfires threaten resorts - BBC News',
    source: 'BBC News',
    summary: 'A helicopter is deployed against a fire near Marmaris in south-western Turkey\r\nTourists have been evacuated from beaches in south-western Turkey, where raging wildfires are now threateni… [+1829 chars]'
  };

  const filtersMenuProps = {
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
  };

  const styledButtonProps = {
    onClick: () => console.log('Navigate Button clicked'),
    variant: "contained" as "contained",
  };

  const onRemoveClick = (value : string) => {
    console.log("Value removed: {}", value)
  };


  const searchMenuOptions = [{value: "1", menuItemType : MenuItemTypeEnum.FiltersMenuItem, children: "Everything" },
  {value: "2", menuItemType : MenuItemTypeEnum.FiltersMenuItem, children: "Top Headlines" }];

  return (
    <div>
    
    <div>
      <StyledButton {...styledButtonProps}>
        Navigate to dispatch
      </StyledButton>
    </div>
    <div>
      <StyledDropdown label='Sources' dropDownType={DropdownTypeEnum.FiltersDropdown}
      MenuProps={filtersMenuProps}>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="1" >Mako</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="2" >Walla</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="3" >BBC</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="4" >Ynet</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="5" >Option 5</StyledMenuItem>
      </StyledDropdown>
    </div>
    <div>
    <RecentSearches onRemove={onRemoveClick} options={[
      { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "option1", children: "crypto" },
      { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "option2", children: "soccer" },
      { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "option3", children: "soccer" }
    ]}>
    </RecentSearches>
    </div>
    <div>
      <SearchBar dropDownType={DropdownTypeEnum.RecentSearchesDropdown} dropDownOptions={searchMenuOptions}>
        
      </SearchBar>
    </div>  
      <HeadlineCard {...headlineProps}></HeadlineCard>
    </div>
  );
}

export default App;
