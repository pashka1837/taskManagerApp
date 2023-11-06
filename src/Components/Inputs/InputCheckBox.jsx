import CheckIcon from '@mui/icons-material/Check';
import {
  Checkbox, FormControl, Sheet, useColorScheme,
} from '@mui/joy';

export default function InputCheckBox({
  title, isCompleted, id, subTaskValues, setSubTaskValues,
}) {
  const { mode } = useColorScheme();

  function changeIsComplete() {
    const indexOf = subTaskValues.findIndex((s) => s.id === id);
    const newSubT = [...subTaskValues];
    const newSub = { title, id, isCompleted: !isCompleted };
    newSubT.splice(indexOf, 1, newSub);
    setSubTaskValues(newSubT);
  }
  return (

    <FormControl>
      <Sheet
        className="subTaskCheckBox"
        sx={{
          backgroundColor: mode === 'light' ? '#E9EFFA' : '#20212c',
          padding: '0.6em 0.8em',
          borderRadius: '5px',
          color: 'textSecon',
          '&:hover': { backgroundColor: '#b1afe3', color: 'textPrime' },
        }}
      >
        <Checkbox
          onChange={changeIsComplete}
          variant="solid"
          color="checkBoxPrime"
          overlay
          checked={isCompleted}
          // value={id}
          label={title}
          sx={{
            color: isCompleted ? 'textSecon' : 'textPrime',
            textDecoration: isCompleted ? 'line-through' : 'none',
            borderRadius: '0px',
            alignItems: 'center',
          }}
          checkedIcon={(
            <CheckIcon style={{
              backgroundColor: '#635FC7',
              color: '#FFFFFF',
              borderRadius: '3px',
            }}
            />
          )}
        />
      </Sheet>

    </FormControl>

  );
}
