import {
  Sheet, Stack, Typography,
} from '@mui/joy';
import { Form, useSubmit } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SelectCompon } from './Inputs';
import { subtasksDone } from '../utils';
import InputCheckBox from './Inputs/InputCheckBox';

export default function SingleTaskComp({
  task, selectComp, formRef, columnID,
}) {
  const {
    title, subtasks, description, id,
  } = task;

  const submit = useSubmit();

  const [selectCompValue, setSelectCompValue] = useState(selectComp.defaultValue);
  const [subTaskValues, setSubTaskValues] = useState(subtasks);

  useEffect(() => {
    handleSubmit();
  }, [selectCompValue, subTaskValues]);

  function handleSubmit() {
    const formData = new FormData();
    formData.set('status', (selectCompValue));
    formData.set('subTasks', JSON.stringify(subTaskValues));
    formData.set('taskId', id);
    formData.set('columnID', columnID);
    formRef.current = formData;
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
      <Form>
        <Stack spacing={2}>
          <Typography level="h4" fontWeight="700">
            {title}
          </Typography>

          <Typography
            level="body-sm"
            fontWeight="600"
            textColor="textPrime"
          >
            {description}

          </Typography>
          <Typography
            level="body-sm"
            fontWeight="600"
            textColor="textPrime"
          >
            {subTaskValues?.length
              ? `Subtasks (${subtasksDone(subTaskValues)} of ${subTaskValues.length})`
              : 'No subtasks'}
          </Typography>
          {subTaskValues?.length
            ? subTaskValues.map((sub) => (
              <InputCheckBox
                key={sub.id}
                {...sub}
                subTaskValues={subTaskValues}
                setSubTaskValues={setSubTaskValues}
              />
            ))
            : null}
          {selectComp?.selectValues?.length
            ? (
              <SelectCompon
                {...selectComp}
                setSelectCompValue={setSelectCompValue}
                selectCompValue={selectCompValue}
              />
            )
            : null}

        </Stack>
      </Form>

    </Sheet>
  );
}
