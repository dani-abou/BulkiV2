import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect } from 'react';
import PrimabullInput from '../PrimabullInput';

export default function PrimabullDatePicker({ className, ...props }) {
  const { value, onChange } = props;
  useEffect(() => {
    if (!value) onChange(Date.now())
  }, [value, onChange]);
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DesktopDatePicker
      inputFormat="MM/dd/yyyy"
      renderInput={(params) => <PrimabullInput className={className} {...params} />}
      {...props}
    />
  </LocalizationProvider>
}