import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import IconButton from '@mui/material/IconButton';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import { Box, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField'; // Import TextField for renderInput

interface DateProps {
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
}

const DateComponent: React.FC<DateProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: 1, borderRadius: '16px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
        <Typography component="span">Dates</Typography>
        <IconButton
          size="small"
          onClick={() => setOpen(true)}
          sx={{ padding: 0 }}
        >
          <CalendarTodayOutlined />
        </IconButton>
      </Box>
      <DatePicker
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={value}
        onChange={onChange}
        slots={{
            textField: textFieldProps => <TextField {...textFieldProps} />
          }}
      />
    </LocalizationProvider>
  );
};

export default DateComponent;
