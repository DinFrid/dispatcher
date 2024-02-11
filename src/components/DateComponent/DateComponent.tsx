import React from 'react';
import "rsuite/dist/rsuite.min.css";
import Calendar from '../../images/Calendar';
import { StyledDatePicker } from './styles';
import { DatePickerProps } from 'rsuite';

export interface DateProps extends DatePickerProps {};

const DateComponent: React.FC = () => {

  return (
    <StyledDatePicker 
     showOneCalendar
     showHeader={false}
     format="dd/MM/yy"
     caretAs={Calendar} 
     appearance="subtle" 
     character='-' 
     placeholder="Dates" />
  );
};

export default DateComponent;
