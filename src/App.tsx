import {StyledMenuItem} from './components/StyledMenuItem/StyledMenuItem';
import { StyledButton } from './components/StyledButton/StyledButton';
import {StyledDropdown} from './components/StyledDropdown/StyledDropdown';
import { DropdownTypeEnum, MenuItemTypeEnum } from './utils/Enums';
import HeadlineCard from './components/HeadlineCard/HeadlineCard';
import PieGraph from './components/Graphs/PieGraph/PieGraph';
import AreaGraph from './components/Graphs/AreaGraph/AreaGraph';
import DateComponent from './components/DateComponent/DateComponent';
import 'rsuite/dist/rsuite.min.css'; 
import { SelectChangeEvent } from '@mui/material';
import Navbar from './components/Navbar/Navbar';


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

  const handleDropdownChange = (event: SelectChangeEvent<unknown>) => {
    console.log("Selected value:", event.target.value);
  };

  const pieGraphData = [
    { value: 10, label: 'NBC' },
    { value: 30, label: 'Vulture' },
    { value: 50, label: 'CNN' },
    { value: 10, label: 'ESPN' },
    { value: 10, label: 'A' },
    { value: 30, label: 'B' },
    { value: 50, label: 'C' },
    { value: 10, label: 'D' },
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
      <Navbar></Navbar>
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
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="Option 6" >Option 6</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="Option 7" >Option 7</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="Option 8" >Option 8</StyledMenuItem>
        <StyledMenuItem menuItemType={MenuItemTypeEnum.FiltersMenuItem} value="Option 9" >Option 9</StyledMenuItem>
      </StyledDropdown>
    </div>
      <HeadlineCard {...headlineProps}></HeadlineCard>
      <PieGraph title={"Sources"} label={'Sum'} data={pieGraphData}></PieGraph>
      <AreaGraph title={"Dates"} data={areaGraphData}></AreaGraph>
    </div>
  );
}

export default App;
