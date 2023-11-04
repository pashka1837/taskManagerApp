import { Sheet, Stack, Typography } from '@mui/joy';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';
import { SelectCompon } from './Inputs';

export default function SingleTaskComp({ id, columnName, myRef }) {
  const { current } = useSelector((store) => store.drawer);

  const column = current.columns.find((colum) => colum.name === columnName);
  const task = column.tasks.find((taskk) => taskk.id === id);
  const { title, subtasks, description } = task;

  const selectInpData = {
    label4: 'current status',
    statusOptions: current.columns.map((c) => c.name),
    curStatus: columnName,
  };

  console.log(column, task);
  console.log(id, columnName);

  return (
    <Sheet
      sx={{
        padding: '2%',
        width: '25%',
        minWidth: '305px',
        borderRadius: '9px',
      }}
    >
      <Form ref={myRef} method="post">
        <Stack spacing={2}>
          <Typography level="h4" fontWeight="700">
            {title}
          </Typography>
          <Typography
            level="body-sm"
            sx={{
              color: 'textSecon',
              fontWeight: '400',
            }}
          >
            {description}
          </Typography>
          <input type="text" name="hey" id="" />
          <SelectCompon modalData={selectInpData} />
        </Stack>
      </Form>

    </Sheet>
  );
}
