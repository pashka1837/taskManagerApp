import Add from '@mui/icons-material/Add';
import {
  Button, FormControl, FormLabel, Input, Stack,
} from '@mui/joy';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

export default function InputsSub({ modalData }) {
  const {
    label3: label, btnSubTitle: btnName, inputValues,
  } = modalData;

  const [inputs, setInputs] = useState([...inputValues]);

  function addInput() {
    const newInput = { id: inputs.length + 1, name: this.id };
    setInputs([...inputs, newInput]);
  }

  function removeInput(id) {
    const newInputs = inputs.filter((inp) => inp.id !== id);
    setInputs(newInputs);
  }
  return (
    <Stack spacing={1}>
      <FormLabel sx={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      {inputs.map((inp) => (
        <FormControl key={inp.id}>
          <Stack flexDirection="row" alignItems="center">
            <Input
              color="inputPrime"
              variant="outlined"
              type="text"
              name={label}
              defaultValue={inp.name}
              placeholder={inp.plcHolder || ''}
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
        {btnName}
      </Button>
    </Stack>

  );
}
