function FormTheme({ onSubmit, initialValues: theme }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);

    const data = Object.fromEntries(formdata.entries());

    onSubmit({
      button: {
        backgroundColor: data.buttonBgColor,
      },
      h1: {
        backgroundColor: data.H1BgColor,
        color: data.H1Color,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Button</p>
      <label htmlFor="buttonBgColor">Button BackgroundColor</label>
      <input
        id="buttonBgColor"
        name="buttonBgColor"
        type="color"
        defaultValue={theme.button.backgroundColor}
      />
      <p>H1</p>
      <label htmlFor="H1BgColor">H1 BackgroundColor</label>
      <input
        id="H1BgColor"
        name="H1BgColor"
        type="color"
        defaultValue={theme.h1.backgroundColor}
      />
      <label htmlFor="H1Color">H1 Color</label>
      <input
        id="H1Color"
        name="H1Color"
        type="color"
        defaultValue={theme.h1.color}
      />
      <br />
      <input type="submit" value="Set Theme" />
    </form>
  );
}

export default FormTheme;
