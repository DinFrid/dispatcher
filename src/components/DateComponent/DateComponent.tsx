import React from 'react';
import "rsuite/dist/rsuite.min.css";
import Calender from '../../images/Calender';
import { StyledDatePicker } from './DateStyling';


const DateComponent: React.FC = () => {

  return (
    <StyledDatePicker 
     showOneCalendar
     showHeader={false}
     format="dd/MM/yy"
     caretAs={Calender} 
     appearance="subtle" 
     placeholder="Dates" />
  );
};

export default DateComponent;
