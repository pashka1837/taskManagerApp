import Add from '@mui/icons-material/Add';
import {
  Button, FormControl, FormLabel, Input, Stack,
} from '@mui/joy';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

export default function InputsSub({ label, btnName }) {
  const [inputs, setInputs] = useState([{ id: 0, name: 'Todo' }, { id: 1, name: 'Doing' }]);

  function addInput() {
    const newInput = { id: inputs.length + 1, name: this.id };
    setInputs([...inputs, newInput]);
  }

  function removeInput(id) {
    const newInputs = inputs.filter((inp) => inp.id !== id);
    setInputs(newInputs);
  }
  return (

    <FormControl>
      <Stack spacing={1}>
        <FormLabel sx={{ color: 'textSecon' }} color="textSecon">
          {label}
        </FormLabel>
        {inputs.map((inp) => (
          <Stack key={inp.id} flexDirection="row" alignItems="center">
            <Input
              color="inputPrime"
              variant="outlined"
              type="text"
              name={inp.name}
              defaultValue={inp.name}
              required
            />
            <Button
              onClick={() => removeInput(inp.id)}
              color="btnCross"
              variant="plain"
            >
              <ClearIcon />
            </Button>
          </Stack>
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
          Add New
          {' '}
          {btnName}
        </Button>
      </Stack>

    </FormControl>
  );
}
