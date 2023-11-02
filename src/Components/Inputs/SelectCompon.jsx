import {
  FormControl, FormLabel, Option, Select,
} from '@mui/joy';

export default function SelectCompon({ modalData }) {
  const { label4: label, statusOptions } = modalData;
  return (
    <FormControl>
      <FormLabel sx={{ textTransform: 'capitalize' }}>{label}</FormLabel>
      <Select
        name={label}
        color="selectPrime"
        variant="outlined"
        defaultValue={statusOptions[0]}
        required
        sx={{ textTransform: 'capitalize' }}
      >
        {statusOptions.map((op) => <Option key={op} sx={{ textTransform: 'capitalize' }} value={op}>{op}</Option>)}
      </Select>
    </FormControl>
  );
}
