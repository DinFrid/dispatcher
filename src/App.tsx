import {StyledDropdown} from './components/StyledDropdown/StyledDropdown';
import { DropdownTypeEnum } from './utils/Enums';
import DateComponent from './components/DateComponent/DateComponent';
import 'rsuite/dist/rsuite.min.css'; 
import { SelectChangeEvent } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import HeadlinesLayout from './layout/HeadlinesLayout/HeadlinesLayout';
import { mockedHeadlines } from './mockData/MockHeadlines';
import GraphsLayout from './layout/GraphsContainer/GraphsLayout';
import { mockedAreaGraphData, mockedPieGraphData } from './mockData/MockGraphs';
import { mockedFiltersMenuItems } from './mockData/MockMenuItems';
import { FiltersBar } from './layout/FiltersBar/FiltersBar';
import { mockedDropdowns } from './mockData/MockDropdowns';


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
        <FiltersBar dropdowns={mockedDropdowns}/>
    <div>
      
      <DateComponent></DateComponent>
    </div>
    <div>
      <StyledDropdown label='Sources' dropDownType={DropdownTypeEnum.FiltersDropdown} onChange={handleDropdownChange} dropdownItems={mockedFiltersMenuItems}/>
    </div>
    </div>
  );
}

export default App;
