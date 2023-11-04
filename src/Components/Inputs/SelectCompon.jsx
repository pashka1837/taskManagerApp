import {
  FormControl, FormLabel, Option, Select,
} from '@mui/joy';

export default function SelectCompon({ modalData }) {
  const { label4: label, statusOptions, curStatus } = modalData;
  return (
    <FormControl>
      <FormLabel sx={{ textTransform: 'capitalize' }}>{label}</FormLabel>
      <Select
        name={label}
        color="selectPrime"
        variant="outlined"
        defaultValue={curStatus || statusOptions[0]}
        required
      >
        {statusOptions.map((op) => <Option key={op} value={op}>{op}</Option>)}
      </Select>
    </FormControl>
  );
}
