import { FormControl, FormLabel, Input } from '@mui/joy';

export default function InputsTitle({ label, name, placeHolder }) {
  return (
    <FormControl>
      <FormLabel>
        {label}
      </FormLabel>
      <Input
        color="inputPrime"
        variant="outlined"
        required
        type="text"
        name={label}
        // defaultValue={name}
        defaultValue={name}
        placeholder={placeHolder}
      />
    </FormControl>
  );
}
