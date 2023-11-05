import {
  FormControl, FormLabel, Option, Select,
} from '@mui/joy';
import { nanoid } from 'nanoid';

export default function SelectCompon({
  label, selectValues, setSelectCompValue, selectCompValue,
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
        // value={selectValues?.at(2).name}
        value={(selectValues.find((v) => v.id === selectCompValue))?.name}
        required
      >
        {selectValues.map((op) => <Option key={nanoid()} value={op.name}>{op.name}</Option>)}
      </Select>
    </FormControl>
  );
}
