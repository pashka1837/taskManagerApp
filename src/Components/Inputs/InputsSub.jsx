import Add from '@mui/icons-material/Add';
import {
  Button, FormControl, FormLabel, Input, Stack,
} from '@mui/joy';
import ClearIcon from '@mui/icons-material/Clear';
import { nanoid } from 'nanoid';

export default function InputsSub({
  label, btnValue, inputSubValues, setIinputSubValues,
}) {
  function addInput() {
    const newInput = { id: nanoid(), name: '' };
    setIinputSubValues([...inputSubValues, newInput]);
  }

  function removeInput(id) {
    const newInputs = inputSubValues.filter((inp) => inp.id !== id);
    setIinputSubValues(newInputs);
  }

  function onInputChange(id, e) {
    const curInput = inputSubValues.find((inp) => inp.id === id);
    const curInputIndex = inputSubValues.findIndex((inp) => inp.id === id);
    const { value } = e.target;
    curInput.name = value;
    const newInputs = [...inputSubValues];
    newInputs.splice(curInputIndex, 1, curInput);
    setIinputSubValues(newInputs);
  }
  return (
    <Stack spacing={1}>
      <FormLabel sx={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      {inputSubValues.map((inp) => (
        <FormControl key={inp.id}>
          <Stack flexDirection="row" alignItems="center">
            <Input
              onChange={(e) => onInputChange(inp.id, e)}
              color="inputPrime"
              variant="outlined"
              type="text"
              defaultValue={inp.name}
              placeholder={inp.placeholder}
              sx={{ width: '100%', paddingX: '2%' }}
              required
            />
            <Button
              onClick={() => removeInput(inp.id)}
              color="btnCross"
              variant="plain"
              sx={{ paddingX: '2%' }}
            >
              <ClearIcon />
            </Button>
          </Stack>
        </FormControl>
      ))}
      <Button
        onClick={addInput}
        color="btnSecon"
        variant="solid"
        startDecorator={<Add />}
        sx={{
          borderTopRightRadius: '25px',
          borderBottomRightRadius: '25px',
          borderTopLeftRadius: '25px',
          borderBottomLeftRadius: '25px',
        }}
      >
        {btnValue}
      </Button>
    </Stack>

  );
}
