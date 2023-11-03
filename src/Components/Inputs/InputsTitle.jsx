import { FormControl, FormLabel, Input } from '@mui/joy';

export default function InputsTitle({ modalData }) {
  const { label1: label, label1Name: name, label1PlaceHolder: placeHolder } = modalData;
  return (
    <FormControl>
      <FormLabel sx={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <Input
        color="inputPrime"
        variant="outlined"
        required
        type="text"
        name={label}
        defaultValue={name}
        placeholder={placeHolder}
      />
    </FormControl>
  );
}
