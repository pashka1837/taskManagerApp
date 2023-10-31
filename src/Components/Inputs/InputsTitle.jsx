import { FormControl, FormLabel, Input } from '@mui/joy';

export default function InputsTitle({ label, name, placeHolder }) {
  return (
    <FormControl>
      <FormLabel sx={{ color: 'textSecon' }} color="textSecon">
        {label}
      </FormLabel>
      <Input
        color="inputPrime"
        variant="outlined"
        required
        type="text"
        name={name}
        defaultValue={name}
        placeholder={placeHolder}
      />
    </FormControl>
  );
}
