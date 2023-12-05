function TaskForm({ onSubmit, initialValues: item }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);

    const data = Object.fromEntries(formdata.entries());

    if (item) {
      data.id = item.id;
    }

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" defaultValue={item?.name} />
      <label htmlFor="completed">Completed</label>
      <input
        id="completed"
        name="completed"
        type="checkbox"
        checked={item?.checked}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TaskForm;
