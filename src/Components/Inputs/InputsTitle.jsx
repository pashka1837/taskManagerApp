import {
  FormControl, FormLabel, Input,
} from '@mui/joy';

import { inputClasses } from '@mui/joy/Input';

export default function InputsTitle({
  label, placeHolder, isTitleError, setTitleError, inputTitleValue, setInputTitleValue,
}) {
  function changeInput(e) {
    setTitleError(false);
    setInputTitleValue(e.target.value);
  }
  return (
    <FormControl>
      <FormLabel sx={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <Input
        onChange={changeInput}
        color={isTitleError ? 'danger' : 'inputPrime'}
        variant="outlined"
        type="text"
        defaultValue={inputTitleValue}
        placeholder={placeHolder}
        endDecorator={isTitleError && (
        <span className="inptErrorMsg">Can't be empty</span>
        )}
        sx={{
          borderColor: isTitleError && 'dangerColor',
        }}
      />
    </FormControl>
  );
}
