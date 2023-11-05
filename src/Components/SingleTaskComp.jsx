import {
  Sheet, Stack, Typography,
} from '@mui/joy';
import { useSelector } from 'react-redux';
import { Form, useSubmit } from 'react-router-dom';
import { useState } from 'react';
import { InputDescr, SelectCompon } from './Inputs';
import { subtasksDone } from '../utils';
import InputCheckBox from './Inputs/InputCheckBox';

export default function SingleTaskComp({
  task, selectComp, formRef, columnID,
}) {
  const submit = useSubmit();

  const {
    title, subtasks, description, id,
  } = task;

  const [selectCompValue, setSelectCompValue] = useState(selectComp.defaultValue);
  const [subTaskValues, setSubTaskValues] = useState(subtasks);

  // dont` touch
  // const inputDescr = {
  //   label2: 'description',
  //   inpName2: 'description',
  //   defValue2: description,
  //   label2PlaceHolder: '',
  // };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set('status', JSON.stringify(selectCompValue));
    formData.set('subTasks', subTaskValues);
    formData.set('taskId', id);
    formData.set('columnName', columnID);
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
      <Form ref={formRef} method="post" onSubmit={handleSubmit}>
        {/* <input style={{ display: 'none' }} name="taskId" type="text" defaultValue={taskId} />
        <input style={{ display: 'none' }} name="columnName" type="text" defaultValue={column.name} /> */}

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
          <SelectCompon {...selectComp} setSelectCompValue={setSelectCompValue} />
        </Stack>
      </Form>

    </Sheet>
  );
}
