import { Form, useSubmit } from 'react-router-dom';
import {
  Button, Sheet, Stack, Typography,
} from '@mui/joy';
import { useState } from 'react';
import {
  InputDescr, InputsSub, InputsTitle, SelectCompon,
} from './Inputs/index';

export default function ManageTask({
  modalTitle, inputsTitle, inputDesc, inputsSub, selectComp, mainBtnValue,
}) {
  const submit = useSubmit();

  const [inputTitleValue, setInputTitleValue] = useState(inputsTitle.defaultValue);
  const [inputDescValue, setInputDescValue] = useState(inputDesc.defaultValue);
  const [inputSubValues, setIinputSubValues] = useState(inputsSub.inputValues);
  const [selectCompValue, setSelectCompValue] = useState(selectComp.defaultValue);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set('taskName', inputTitleValue);
    formData.set('desc', inputDescValue);
    formData.set('subtasks', JSON.stringify(inputSubValues));
    formData.set('status', selectCompValue);
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
            inputTitleValue={inputTitleValue}
            setInputTitleValue={setInputTitleValue}
          />
          <InputDescr
            {...inputDesc}
            inputDescValue={inputDescValue}
            setInputDescValue={setInputDescValue}
          />
          <InputsSub
            {...inputsSub}
            inputSubValues={inputSubValues}
            setIinputSubValues={setIinputSubValues}
          />
          {selectComp?.selectValues?.length
            ? (
              <SelectCompon
                {...selectComp}
                selectValues={selectComp.selectValues}
                selectCompValue={selectCompValue}
                setSelectCompValue={setSelectCompValue}
              />
            )
            : null}

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
