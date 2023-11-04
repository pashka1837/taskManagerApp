import {
  FormControl, FormLabel, Textarea,
} from '@mui/joy';

export default function InputDescr({ modalData }) {
  const {
    label2: label, inpName2, defValue2, label2PlaceHolder: placeHolder,
  } = modalData;
  return (
    <FormControl>
      <FormLabel sx={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <Textarea
        color="inputPrime"
        variant="outlined"
        type="text"
        name={inpName2}
        defaultValue={defValue2}
        placeholder={placeHolder}
      />
    </FormControl>
  );
}
