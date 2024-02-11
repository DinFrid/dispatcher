import {StyledMenuItem} from './components/StyledMenuItem/StyledMenuItem';
import {StyledDropdown} from './components/StyledDropdown/StyledDropdown';
import { DropdownTypeEnum, MenuItemTypeEnum } from './utils/Enums';
import DateComponent from './components/DateComponent/DateComponent';
import 'rsuite/dist/rsuite.min.css'; 
import { SelectChangeEvent } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import HeadlinesLayout from './layout/HeadlinesLayout/HeadlinesLayout';
import { mockedHeadlines } from './mockData/MockHeadlines';
import GraphsLayout from './layout/GraphsLayout/GraphsLayout';
import { mockedAreaGraphData, mockedPieGraphData } from './mockData/MockGraphs';


function App() {


  const handleDropdownChange = (event: SelectChangeEvent<unknown>) => {
    console.log("Selected value:", event.target.value);
  };

  

  return (
    <div style={{backgroundColor: '#D9DBE9'}}>
      <Navbar/>
      <HeadlinesLayout headlines={mockedHeadlines}/>
      <GraphsLayout 
        pieData={mockedPieGraphData} pieTitle='Sources' pieLabel='sum'
        areaData={mockedAreaGraphData} areaTitle='Dates'/>
    <div>
      
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
    </div>
  );
}

export default App;
