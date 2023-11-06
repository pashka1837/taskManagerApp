function subtasksDone(subtasks) {
  let finnishedSubTasks = 0;
  if (subtasks.length) {
    subtasks.forEach((st) => {
      if (st.isCompleted) finnishedSubTasks += 1;
    });
  }
  return finnishedSubTasks;
}

function inputsValidation(inputTitleValue, inputSubValues, setTitleError, setSubError) {
  if (!inputTitleValue) { setTitleError(true); }
  let isEr = false;
  inputSubValues.forEach((st) => {
    if (!st.name) { st.isError = true; isEr = true; }
  });
  if (isEr || !inputTitleValue) { setSubError(true); return true; }
  return false;
}

export { subtasksDone, inputsValidation };
