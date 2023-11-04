function subtasksDone(subtasks) {
  let finnishedSubTasks = 0;
  if (subtasks.length) {
    subtasks.forEach((st) => {
      if (st.isCompleted) finnishedSubTasks += 1;
    });
  }
  return finnishedSubTasks;
}

export { subtasksDone };
