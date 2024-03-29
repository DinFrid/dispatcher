import React from 'react';
import "rsuite/dist/rsuite.min.css";
import Calendar from '../../images/Calendar';
import { StyledDatePicker } from './styles';
import { DatePickerProps } from 'rsuite';
import { DateRange } from 'rsuite/esm/DateRangePicker';
import { datesLabel, formatDate } from './consts';

export interface DateComponentProps extends DatePickerProps {
  onDateChange : (value : string, label : string) => void;
};

const DateComponent: React.FC<DateComponentProps> = ({onDateChange}) => {

  const handleDateChange = (value: DateRange | null) => {
    
    if (value && value.length === 2) {
      const [start, end] = value;
      const startDateString = formatDate(start);
      const endDateString = formatDate(end);

      onDateChange(`${startDateString},${endDateString}`, datesLabel);

    } else {
      
      onDateChange("none", datesLabel);
    }
  };

  return (
    <StyledDatePicker 
     showOneCalendar
     showHeader={false}
     format="yy/MM/dd"
     caretAs={Calendar} 
     appearance="subtle" 
     character='-' 
     placeholder="Dates" 
     onChange={handleDateChange}
     />
  );
};

export default DateComponent;
