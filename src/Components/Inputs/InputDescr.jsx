import {
  FormControl, FormLabel, Textarea,
} from '@mui/joy';

export default function InputDescr({ modalData }) {
  const { label2: label, name, label2PlaceHolder: placeHolder } = modalData;
  return (
    <FormControl>
      <FormLabel sx={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <Textarea
        color="inputPrime"
        variant="outlined"
        type="text"
        name={label}
        defaultValue={name}
        placeholder={placeHolder}
      />
    </FormControl>
  );
}
