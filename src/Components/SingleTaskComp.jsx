import {
  Sheet, Stack, Typography,
} from '@mui/joy';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';
import { useState } from 'react';
import { InputDescr, SelectCompon } from './Inputs';
import { subtasksDone } from '../utils';
import InputCheckBox from './Inputs/InputCheckBox';

export default function SingleTaskComp({ taskId, columnName, formRef }) {
  const { current } = useSelector((store) => store.drawer);

  const column = current.columns.find((colum) => colum.name === columnName);
  const task = column.tasks.find((taskk) => taskk.id === taskId);
  const { title, subtasks, description } = task;
  const [subT, setSubT] = useState(subtasks);

  const selectInpData = {
    label4: 'current status',
    statusOptions: current.columns.map((c) => c.name),
    curStatus: columnName,
  };
  // dont` touch
  // const inputDescr = {
  //   label2: 'description',
  //   inpName2: 'description',
  //   defValue2: description,
  //   label2PlaceHolder: '',
  // };

  return (
    <Sheet
      sx={{
        padding: '2%',
        width: '25%',
        minWidth: '305px',
        borderRadius: '9px',
      }}
    >
      <Form ref={formRef} method="post">
        <input style={{ display: 'none' }} name="taskId" type="text" defaultValue={taskId} />
        <input style={{ display: 'none' }} name="columnName" type="text" defaultValue={columnName} />

        <Stack spacing={2}>
          <Typography level="h4" fontWeight="700">
            {title}
          </Typography>

          {/* <InputDescr modalData={inputDescr} /> */}
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
            {subT.length
              ? `Subtasks (${subtasksDone(subT)} of ${subT.length})`
              : 'No subtasks'}
          </Typography>
          {subT.length && subT.map((sub) => <InputCheckBox key={subT.id} {...sub} subT={subT} setSubT={setSubT} />)}
          <SelectCompon modalData={selectInpData} />
        </Stack>
      </Form>

    </Sheet>
  );
}
