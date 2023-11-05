import {
  FormControl, FormLabel, Textarea,
} from '@mui/joy';

export default function InputDescr({
  label, placeHolder, inputDescValue, setInputDescValue,
}) {
  function changeInput(e) {
    setInputDescValue(e.target.value);
  }
  return (
    <FormControl>
      <FormLabel sx={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <Textarea
        onChange={changeInput}
        color="inputPrime"
        variant="outlined"
        type="text"
        defaultValue={inputDescValue}
        placeholder={placeHolder}
      />
    </FormControl>
  );
}
