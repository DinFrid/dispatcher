import React from 'react';
import "rsuite/dist/rsuite.min.css";
import Calendar from '../../images/Calendar';
import { StyledDatePicker } from './styles';
import { DatePickerProps } from 'rsuite';
import { DateRange } from 'rsuite/esm/DateRangePicker';
import { datesLabel, formatDate } from './consts';
import { useTheme } from '@mui/material';

export interface DateComponentProps extends DatePickerProps {
  onDateChange : (value : string, label : string) => void;
};

const DateComponent: React.FC<DateComponentProps> = ({onDateChange}) => {
  const theme = useTheme();

  const handleDateChange = (value: DateRange | null) => {
    
    if (value && value.length === 2) {
      const [start, end] = value;
      const startDateString = formatDate(start);
      const endDateString = formatDate(end);

      onDateChange(datesLabel, `${startDateString},${endDateString}`);

    } else {
      
      onDateChange(datesLabel, "none");
    }
  };

  return (
    <StyledDatePicker theme={theme} 
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
