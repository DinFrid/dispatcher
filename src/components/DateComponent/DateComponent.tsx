import React from 'react';
import "rsuite/dist/rsuite.min.css";
import Calendar from '../../images/Calendar';
import { StyledDatePicker } from './DateStyling';


const DateComponent: React.FC = () => {

  return (
    <StyledDatePicker 
     showOneCalendar
     showHeader={false}
     format="dd/MM/yy"
     caretAs={Calendar} 
     appearance="subtle" 
     placeholder="Dates" />
  );
};

export default DateComponent;
