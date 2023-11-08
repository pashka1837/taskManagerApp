import { Form, useSubmit } from 'react-router-dom';
import {
  Button, Sheet, Stack, Typography,
} from '@mui/joy';
import { useState } from 'react';
import { InputsSub } from '../Inputs/index';

export default function AddColumns({
  modalTitle, inputsSub, mainBtnValue,
}) {
  const submit = useSubmit();

  const [inputSubValues, setIinputSubValues] = useState(inputsSub.inputValues);

  const [isSubError, setSubError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let isEr = false;
    inputSubValues.forEach((st) => {
      if (!st.name) { st.isError = true; isEr = true; }
    });
    if (isEr) { setSubError(true); return; }

    const formData = new FormData(e.target);
    formData.set('columns', JSON.stringify(inputSubValues));
    submit(formData, { method: 'post' });
  }

  return (
    <Sheet
      sx={{
        p: 4,
        width: {
          xs: '90%', sm: '50%', md: '35%', lg: '30%', xl: '20%',
        },
        borderRadius: '9px',
      }}
    >
      <Form method="post" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography level="h4" fontWeight="700">{modalTitle}</Typography>
          <InputsSub
            {...inputsSub}
            setSubError={setSubError}
            inputSubValues={inputSubValues}
            setIinputSubValues={setIinputSubValues}
          />
          <Button
            color="btnPrime"
            variant="solid"
            type="submit"
            sx={{
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
              borderTopLeftRadius: '25px',
              borderBottomLeftRadius: '25px',
              width: '100%',
            }}
          >
            {mainBtnValue}
          </Button>
        </Stack>
      </Form>
    </Sheet>

  );
}
