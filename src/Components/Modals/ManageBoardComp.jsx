import { Form, useSubmit } from 'react-router-dom';
import {
  Button, Sheet, Stack, Typography,
} from '@mui/joy';
import { useState } from 'react';
import { InputsSub, InputsTitle } from '../Inputs/index';
import { inputsValidation } from '../../utils/index';

export default function ManageBoardComp({
  modalTitle, inputsTitle, inputsSub, mainBtnValue,
}) {
  const submit = useSubmit();

  const [inputTitleValue, setInputTitleValue] = useState(inputsTitle.defaultValue);
  const [inputSubValues, setIinputSubValues] = useState(inputsSub.inputValues);

  const [isTitleError, setTitleError] = useState(false);
  const [isSubError, setSubError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputsValidation(inputTitleValue, inputSubValues, setTitleError, setSubError)) return;

    const formData = new FormData(e.target);
    formData.set('columns', JSON.stringify(inputSubValues));
    formData.set('boardName', inputTitleValue);
    submit(formData, { method: 'post' });
  }

  return (
    <Sheet
      sx={{
        padding: '2%',
        width: '25%',
        minWidth: '305px',
        borderRadius: '9px',
      }}
    >
      <Form method="post" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography level="h4" fontWeight="700">{modalTitle}</Typography>
          <InputsTitle
            {...inputsTitle}
            isTitleError={isTitleError}
            setTitleError={setTitleError}
            inputTitleValue={inputTitleValue}
            setInputTitleValue={setInputTitleValue}
          />
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
