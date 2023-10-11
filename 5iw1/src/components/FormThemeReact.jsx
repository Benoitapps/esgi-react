import { useState } from "react";

function FormTheme({ onSubmit, initialValues: theme }) {
  const [data, setData] = useState({
    buttonbackgroundColor: theme.button.backgroundColor,
    h1backgroundColor: theme.h1.backgroundColor,
    h1color: theme.h1.color,
  });

  const handleChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      button: {
        backgroundColor: data.buttonbackgroundColor,
      },
      h1: {
        backgroundColor: data.h1backgroundColor,
        color: data.h1color,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Button</p>
      <label htmlFor="buttonBgColor">Button BackgroundColor</label>
      <input
        id="buttonBgColor"
        name="buttonbackgroundColor"
        type="color"
        value={data.buttonbackgroundColor}
        onChange={handleChange}
      />
      <p>H1</p>
      <label htmlFor="H1BgColor">H1 BackgroundColor</label>
      <input
        id="H1BgColor"
        name="h1backgroundColor"
        type="color"
        value={data.h1backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="H1Color">H1 Color</label>
      <input
        id="H1Color"
        name="h1color"
        type="color"
        value={data.h1color}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Set Theme" />
    </form>
  );
}

export default FormTheme;
