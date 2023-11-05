import { FormControl, FormLabel, Input } from '@mui/joy';

export default function InputsTitle({
  label, placeHolder, inputTitleValue, setInputTitleValue,
}) {
  function changeInput(e) {
    setInputTitleValue(e.target.value);
  }
  return (
    <FormControl>
      <FormLabel sx={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <Input
        onChange={changeInput}
        color="inputPrime"
        variant="outlined"
        required
        type="text"
        defaultValue={inputTitleValue}
        placeholder={placeHolder}
      />
    </FormControl>
  );
}
