import * as React from 'react';
import { Dayjs } from 'dayjs';
import IconButton from '@mui/material/IconButton';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import { DateRange } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  DateRangePicker,
  DateRangePickerProps,
} from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeFieldProps } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

interface DateRangeButtonFieldProps extends SingleInputDateRangeFieldProps<Dayjs> {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

type DateRangeButtonFieldComponent = ((
  props: DateRangeButtonFieldProps & React.RefAttributes<HTMLDivElement>,
) => React.ReactElement) & { fieldType?: string };

const DateRangeButtonField = React.forwardRef<HTMLDivElement, DateRangeButtonFieldProps>(
  (props) => {
    const { setOpen } = props;

    return (
      <IconButton
        onClick={() => setOpen?.((prev) => !prev)}
        size="large"
      >
        <CalendarTodayOutlined />
      </IconButton>
    );
  },
) as DateRangeButtonFieldComponent;

DateRangeButtonField.fieldType = 'single-input';

const ButtonDateRangePicker = React.forwardRef<HTMLDivElement, Omit<DateRangePickerProps<Dayjs>, 'open' | 'onOpen' | 'onClose'>>(
  (props, ref) => {
    const [open, setOpen] = React.useState(false);

    return (
      <DateRangePicker
        slots={{ field: DateRangeButtonField, ...props.slots }}
        slotProps={{ field: { setOpen } as any }}
        ref={ref}
        {...props}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      />
    );
  },
);

export default function DateComponent() {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ButtonDateRangePicker
        value={value}
        onChange={(newValue: DateRange<Dayjs>) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
}
