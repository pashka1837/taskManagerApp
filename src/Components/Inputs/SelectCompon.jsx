import {
  FormControl, FormLabel, Option, Select,
} from '@mui/joy';
import { nanoid } from 'nanoid';

export default function SelectCompon({
  label, selectValues, setSelectCompValue,
}) {
  function changeSelected(e) {
    const newStatus = selectValues.find((op) => op.name === e.target.textContent);
    setSelectCompValue(newStatus.id);
  }
  return (
    <FormControl>
      <FormLabel sx={{ textTransform: 'capitalize' }}>{label}</FormLabel>
      <Select
        onChange={changeSelected}
        color="selectPrime"
        variant="outlined"
        defaultValue={selectValues?.at(0).name}
        required
      >
        {selectValues.map((op) => <Option key={nanoid()} value={op.name}>{op.name}</Option>)}
      </Select>
    </FormControl>
  );
}
