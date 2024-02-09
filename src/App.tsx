import {StyledMenuItem} from './components/StyledMenuItem/StyledMenuItem';
import { StyledButton } from './components/StyledButton/StyledButton';
import {StyledDropdown} from './components/StyledDropdown/StyledDropdown';
import { RecentSearches } from './components/RecentSearches/RecentSearches';
import SearchBar from './components/SearchBar/SearchBar';
import { DropdownTypeEnum, MenuItemTypeEnum } from './utils/Enums';
import HeadlineCard from './components/HeadlineCard/HeadlineCard';
import PieGraph from './components/Graphs/PieGraph/PieGraph';
import AreaGraph from './components/Graphs/AreaGraph/AreaGraph';
import DateComponent from './components/DateComponent/DateComponent';
import 'rsuite/dist/rsuite.min.css'; 
import { SelectChangeEvent } from '@mui/material';


function App() {

  const headlineProps = {
    imageUrl: 'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2021/07/uriah-hall-sean-strickland-ufc-on-espn-28-official-weigh-ins-5.jpg?w=1000&h=600&crop=1',
    date: 'Friday Jun 25, 2021',
    headline: 'Turkey: Foreign tourists evacuated as wildfires threaten resorts - BBC News',
    source: 'BBC News',
    summary: 'A helicopter is deployed against a fire near Marmaris in south-western Turkey\r\nTourists have been evacuated from beaches in south-western Turkey, where raging wildfires are now threateni… [+1829 chars]'
  };

  const styledButtonProps = {
    onClick: () => console.log('Navigate Button clicked'),
    
  };

  const onRemoveClick = (value : string) => {
    console.log("Value removed: {}", value)
  };
  
  const handleDropdownChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    console.log("Selected value:", event.target.value);
  };


  const searchMenuOptions = [{value: "Everything", menuItemType : MenuItemTypeEnum.FiltersMenuItem, children: "Everything" },
  {value: "Top Headlines", menuItemType : MenuItemTypeEnum.FiltersMenuItem, children: "Top Headlines" }];

  const pieGraphData = [
    { value: 10, label: 'NBC' },
    { value: 30, label: 'Vulture' },
    { value: 50, label: 'CNN' },
    { value: 10, label: 'ESPN' },
  ];

  const areaGraphData = [
    { date: 'MAR', sourcesNumber: 100 },
    { date: 'APR', sourcesNumber: 450 },
    { date: 'MAY', sourcesNumber: 200 },
    { date: 'JUN', sourcesNumber: 350 },
    { date: 'JUL', sourcesNumber: 500 },
    { date: 'AUG', sourcesNumber: 350 },
    { date: 'SEP', sourcesNumber: 500 },
];

  return (
    <div style={{backgroundColor: '#D9DBE9'}}>
    
    <div>
      <StyledButton {...styledButtonProps}>
        Navigate to dispatch
      </StyledButton>
      <DateComponent></DateComponent>
    </div>
    <div>
      <StyledDropdown label='Sources' dropDownType={DropdownTypeEnum.FiltersDropdown} onChange={handleDropdownChange}>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="Mako" >Mako</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="Walla" >Walla</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="BBC" >BBC</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="Ynet" >Ynet</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="Option 5" >Option 5</StyledMenuItem>
      </StyledDropdown>
    </div>
    <div>
    <RecentSearches onRemove={onRemoveClick} options={[
      { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "crypto", children: "crypto" },
      { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "football", children: "football" },
      { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "soccer", children: "soccer" }
    ]}>
    </RecentSearches>
    </div>
    <div>
      <SearchBar dropDownProps={{dropDownType : DropdownTypeEnum.RecentSearchesDropdown, onChange : handleDropdownChange}} dropDownOptions={searchMenuOptions}>
        
      </SearchBar>
    </div>  
      <HeadlineCard {...headlineProps}></HeadlineCard>
      <PieGraph title={"Sources"} label={'Sum'} data={pieGraphData}></PieGraph>
      <AreaGraph title={"Dates"} data={areaGraphData}></AreaGraph>
    </div>
  );
}

export default App;
